<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

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

		$data1 = array();
		$url1 = "https://itunes.apple.com/search?term=$stringSearch&entity=musicVideo";
		$response1 = Http::post($url1);

		if ($response1->ok()) {
			foreach ($response1->json()['results'] as $value) {
				$aux = $value;
				$aux['source'] = 'itunes';
				$data1[] = $aux;
			}
		}

		#----------------------------------------------------------------

		$data2 = array();
		$url2 = "http://api.tvmaze.com/search/shows?q=$stringSearch";
		$response2 = Http::get($url2);

		if ($response2->ok()) {
			foreach ($response2->json() as $value) {
				$aux = $value['show'];
				$aux['source'] = 'tvmaze';
				$data2[] = $aux;
			}
		}

		#----------------------------------------------------------------

		$data3 = array();
		$url3 = "http://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=GetListByName&name=$stringSearch";
		$xmlSoapResponse = file_get_contents($url3);
		$pattern = "(<GetListByNameResult>[\s\S]*?<\/GetListByNameResult>)";
		header('Content-type: application/json');

		if (preg_match_all($pattern, $xmlSoapResponse, $matches)) {
			foreach (simplexml_load_string($matches[0][0])->PersonIdentification as $value) {
				$aux = $value;
				$aux->source = 'crcind';
				$data3[] = $aux;
			}
		}

		#----------------------------------------------------------------

		$DataParsed = array_merge($data1,$data2,$data3);

		return Response::json(array(
			'results' => $DataParsed,
			'resultCount' => count($DataParsed)
		), 200);

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		//
	}

}
