<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

use Response;
use Illuminate\Http\Request;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;


class SearchController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index($stringSearch)
	{
		$client = new Client();
		$url = "https://itunes.apple.com/search?term=$stringSearch";
		$result = $client->post($url);
		#$result = $response->getBody();


		$url = "http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl";
		$client = new SoapClient($url, [ "trace" => 1 ] );
		$resultado = $client->ResolveIP( [ "ipAddress" => $argv[1], "licenseKey" => "0" ] );


		return Response::json(array(
			'results' => $result,
			'results2' => $resultado,
			'resultCount' => 1
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
