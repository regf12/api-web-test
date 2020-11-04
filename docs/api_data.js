define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "docs/main.js",
    "group": "/media/emilio/Utils/projects/portfolio/api-web-test/docs/main.js",
    "groupTitle": "/media/emilio/Utils/projects/portfolio/api-web-test/docs/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/{subdomain}/{version_id}/activities",
    "title": "Get Activities",
    "name": "ActivityControllerIndex",
    "group": "Activities",
    "version": "1.0.0",
    "description": "<p>This service allows you to obtain the list of activities.</p>",
    "parameter": {
      "fields": {
        "Header Parameter": [
          {
            "group": "headerParam",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access token.</p>"
          }
        ],
        "Url Parameter": [
          {
            "group": "urlParam",
            "type": "String",
            "optional": false,
            "field": "subdomain",
            "description": "<p>Subdomain.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "optional": false,
            "field": "version_id",
            "description": "<p>Version id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Data with activities information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"data\": {\n\t\t\"activities\": [\n\t\t\t{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"name\": \"Rueda de negocios\",\n\t\t\t\t\"description\": null,\n\t\t\t\t\"datetime\": null,\n\t\t\t\t\"type\": \"networking\",\n\t\t\t\t\"typeName\": \"activity.type.networking\",\n\t\t\t\t\"status\": 0,\n\t\t\t\t\"statusName\": null,\n\t\t\t\t\"activityUuid\": \"enexpro-1-1e1887bf4cb5d3c7a9caac76a4ebfa74\"\n\t\t\t}\n\t\t]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message indicative of the error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: (Missing or wrong access token)",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\t\"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: (Wrong version_id parameter)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\t\"message\": \"Call to undefined method.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/routes/activities.js",
    "groupTitle": "Activities",
    "sampleRequest": [
      {
        "url": "https://api.koyag.xyz/{subdomain}/{version_id}/activities"
      }
    ]
  },
  {
    "type": "get",
    "url": "/{subdomain}/{version_id}/activities/{activityId}",
    "title": "Get an activity",
    "name": "ActivityControllerShow",
    "group": "Activities",
    "version": "1.0.0",
    "description": "<p>This service allows to obtain the information of an activity.</p>",
    "parameter": {
      "fields": {
        "Header Parameter": [
          {
            "group": "headerParam",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access token.</p>"
          }
        ],
        "Url Parameter": [
          {
            "group": "urlParam",
            "type": "String",
            "optional": false,
            "field": "subdomain",
            "description": "<p>Subdomain.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "optional": false,
            "field": "version_id",
            "description": "<p>Version id.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "optional": false,
            "field": "activityId",
            "description": "<p>Activity id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Parameter indicating the success status of the query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"id\": 1,\n\t\"name\": \"Rueda de negocios\",\n\t\"description\": null,\n\t\"datetime\": null,\n\t\"type\": \"networking\",\n\t\"typeName\": \"activity.type.networking\",\n\t\"status\": 0,\n\t\"statusName\": null,\n\t\"activityUuid\": \"enexpro-1-1e1887bf4cb5d3c7a9caac76a4ebfa74\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message indicative of the error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: (Missing or wrong access token)",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\t\"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: (Wrong version_id parameter)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\t\"message\": \"Call to undefined method.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/routes/activities.js",
    "groupTitle": "Activities",
    "sampleRequest": [
      {
        "url": "https://api.koyag.xyz/{subdomain}/{version_id}/activities/{activityId}"
      }
    ]
  }
] });
