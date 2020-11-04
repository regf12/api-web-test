<?php

namespace App\Http\Controllers;

use Response;
use Illuminate\Http\Request;


class SearchController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index($stringSearch)
	{
		$urls = array(
			"https://itunes.apple.com/search?term=$stringSearch&entity=musicVideo",
			"http://api.tvmaze.com/search/shows?q=$stringSearch",
			"http://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=GetListByName&name=$stringSearch"
		);
		$data = $this->multipleRequest($urls);

		return Response::json(array(
			'resultCount' => count($data),
			'results' => $data
		), 200);
	}

	/**
	 * Return an array with all the data.
	 *
	 * @param  curl instances  $curly
	 * @param  curl instances  $pm
	 * @return array result
	 */
	public function parsed($curly, $pm)
	{
		$result = array();
		foreach ($curly as $key => $response) {
			$aux = json_decode( curl_multi_getcontent($response) );

			if ($aux==null) {
				$aux2 = curl_multi_getcontent($response);
				$pattern = "(<GetListByNameResult>[\s\S]*?<\/GetListByNameResult>)";
				header('Content-type: application/json');
				if (preg_match_all($pattern, $aux2, $matches)) {
					foreach (simplexml_load_string($matches[0][0])->PersonIdentification as $value) {
						$aux2 = $value;
						$aux2->source = 'crcind';
						$result[] = $aux2;
					}
				}
			}else{
				if (is_object($aux)) {
					foreach ($aux->results as $value) {
						$aux2 = $value;
						$aux2->source = 'itunes';
						$result[] = $aux2;
					}
				}else{
					foreach ($aux as $value) {
						$aux2 = $value;
						$aux2->source = 'tvmaze';
						$result[] = $aux2;
					}
				}
			}

			curl_multi_remove_handle($pm, $response);
		}
		curl_multi_close($pm);
		return $result;
	}

	/**
	 * Multiple queries are configured.
	 *
	 * @param  array  $urls
	 * @param  array  $options
	 * @return method parsed
	 */
	public function multipleRequest($urls, $options = array())
	{
		$curly = array();
		$pm = curl_multi_init();

		foreach ($urls as $key => $url) {
			$curly[$key] = curl_init();

			if (is_array($url) && !empty($url['url'])) {
				$url = $url['url'];
			} else {
				$url = $url;
			}

			curl_setopt($curly[$key], CURLOPT_URL, $url);
			curl_setopt($curly[$key], CURLOPT_HEADER, 0);
			curl_setopt($curly[$key], CURLOPT_RETURNTRANSFER, 1);

			if (!empty($url['post'])) {
				curl_setopt($curly[$key], CURLOPT_POST, 1);
				curl_setopt($curly[$key], CURLOPT_POSTFIELDS, $url['post']);
			}

			if (!empty($options)) {
				curl_setopt_array($curly[$key], $options);
			}

			curl_multi_add_handle($pm, $curly[$key]);
		}

		$ejecutando = null;

		do {
			curl_multi_exec($pm, $ejecutando);
		} while ($ejecutando > 0);

		return $this->parsed($curly, $pm);
	}

}
