/**
	*	@apiDefine urlParam Url Parameter
*/
/**
	*	@apiDefine headerParam Header Parameter
*/

/******************************************************************************************************************
	*	@api {get} /{subdomain}/{version_id}/activities Get Activities
	*	@apiName ActivityControllerIndex
	*	@apiGroup Activities
	*	@apiVersion 1.0.0
	*	@apiDescription This service allows you to obtain the list of activities.
	*
	*
	*	@apiParam (headerParam) {String} Authorization Bearer access token.
	*	@apiParam (urlParam) {String} subdomain Subdomain.
	*	@apiParam (urlParam) {String} version_id Version id.
	*
	*
	*	@apiSuccess {Json} data Data with activities information.
	*
	*	@apiSuccessExample Success-Response:
	*	HTTP/1.1 200 OK
	*	{
	*		"data": {
	*			"activities": [
	*				{
	*					"id": 1,
	*					"name": "Rueda de negocios",
	*					"description": null,
	*					"datetime": null,
	*					"type": "networking",
	*					"typeName": "activity.type.networking",
	*					"status": 0,
	*					"statusName": null,
	*					"activityUuid": "enexpro-1-1e1887bf4cb5d3c7a9caac76a4ebfa74"
	*				}
	*			]
	*		}
	*	}
	*
	*
	*	@apiError {String} message Message indicative of the error.
	*
	*	@apiErrorExample Error-Response: (Missing or wrong access token)
	*	HTTP/1.1 401 Unauthorized
	*	{
	*		"message": "Unauthenticated."
	*	}
	*	@apiErrorExample Error-Response: (Wrong version_id parameter)
	*	HTTP/1.1 500 Internal Server Error
	*	{
	*		"message": "Call to undefined method."
	*	}
*/

/******************************************************************************************************************
	*	@api {get} /{subdomain}/{version_id}/activities/{activityId} Get an activity
	*	@apiName ActivityControllerShow
	*	@apiGroup Activities
	*	@apiVersion 1.0.0
	*	@apiDescription This service allows to obtain the information of an activity.
	*
	*
	*	@apiParam (headerParam) {String} Authorization Bearer access token.
	*	@apiParam (urlParam) {String} subdomain Subdomain.
	*	@apiParam (urlParam) {String} version_id Version id.
	*	@apiParam (urlParam) {String} activityId Activity id.
	*
	*
	*	@apiSuccess {Json} data Parameter indicating the success status of the query.
	*
	*	@apiSuccessExample Success-Response:
	*	HTTP/1.1 200 OK
	*	{
	*		"id": 1,
	*		"name": "Rueda de negocios",
	*		"description": null,
	*		"datetime": null,
	*		"type": "networking",
	*		"typeName": "activity.type.networking",
	*		"status": 0,
	*		"statusName": null,
	*		"activityUuid": "enexpro-1-1e1887bf4cb5d3c7a9caac76a4ebfa74"
	*	}
	*
	*
	*	@apiError {String} message Message indicative of the error.
	*
	*	@apiErrorExample Error-Response: (Missing or wrong access token)
	*	HTTP/1.1 401 Unauthorized
	*	{
	*		"message": "Unauthenticated."
	*	}
	*	@apiErrorExample Error-Response: (Wrong version_id parameter)
	*	HTTP/1.1 500 Internal Server Error
	*	{
	*		"message": "Call to undefined method."
	*	}
*/
