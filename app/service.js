var mockServer = require('mockserver-client');
var mockServerClient = mockServer.mockServerClient;

function create (host, port) {

    mockServerClient(host, port).mockAnyResponse(
    {
        'httpRequest': {
            'method': 'GET',
            'path': '/movie/all',
            'queryStringParameters': [
                
            ],
            'body': {
                
            }
        },
        'httpResponse': {
            'statusCode': 200,
            "headers": [
                {
                    "name": "Content-Type",
                    "values": ["application/json; charset=utf-8"]
                },
                {
                    "name": "Cache-Control",
                    "values": ["public, max-age=86400"]
                }
            ],
            'body': JSON.stringify([{"name":"Planet of Apes", "id": 1}, {"name":"Terminator", "id": 2}, {"name":"Fast and Furious", "id": 3}]),
            'delay': {
                'timeUnit': 'MILLISECONDS',
                'value': 250
            }
        },
        'times': {
            'remainingTimes': 1,
            'unlimited': true
        }
    }
);

mockServerClient(host, port).mockAnyResponse(
    {
        'httpRequest': {
            'method': 'GET',
            'path': '/movie/1',
            'queryStringParameters': [
                
            ],
            'body': {
                
            }
        },
        'httpResponse': {
            'statusCode': 200,
            "headers": [
                {
                    "name": "Content-Type",
                    "values": ["application/json; charset=utf-8"]
                },
                {
                    "name": "Cache-Control",
                    "values": ["public, max-age=86400"]
                }
            ],
            'body': JSON.stringify({"name":"Planet of Apes", "id": 1}),
            'delay': {
                'timeUnit': 'MILLISECONDS',
                'value': 250
            }
        },
        'times': {
            'remainingTimes': 1,
            'unlimited': false
        }
    }
);

mockServerClient(host, port).mockAnyResponse(
    {
        'httpRequest': {
            'method': 'POST',
            'path': '/movie',
            'queryStringParameters': [
                
            ],
            'body': {
                
            }
        },
        'httpResponse': {
            'statusCode': 200,
            "headers": [
                {
                    "name": "Content-Type",
                    "values": ["application/json; charset=utf-8"]
                },
                {
                    "name": "Cache-Control",
                    "values": ["public, max-age=86400"]
                }
            ],
            'body': JSON.stringify({"name":"The mummy", "id": 4}),
            'delay': {
                'timeUnit': 'MILLISECONDS',
                'value': 250
            }
        },
        'times': {
            'remainingTimes': 1,
            'unlimited': false
        }
    }
);

}

function reset(host, port) {
    
    mockServerClient(host, port).reset();

}

module.exports.create = create;
module.exports.reset = reset;