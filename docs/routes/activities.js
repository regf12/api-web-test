/**
	*	@apiDefine urlParam Url Parameter
*/
/**
	*	@apiDefine headerParam Header Parameter
*/

/**
	*	@api {get} /search/{stringSearch} Search
	*	@apiName Search
	*	@apiGroup Search
	*	@apiVersion 1.0.0
	*	@apiDescription This service allows to obtain the results of three different apis.
	*
	*
	*	@apiParam (urlParam) {String} stringSearch Search parameter.
	*
	*
	*	@apiSuccess {Json} data Data with activities information.
	*
	*	@apiSuccessExample Success-Response:
	*	HTTP/1.1 200 OK
	*	{
	*		"data": {
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
