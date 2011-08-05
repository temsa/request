## hook.io-request

*a simple Hook for making outgoing http requests*

## Installation

     npm install hook.io-repl -g

## Usage

     hookio-repl

## Hook Events Names

**sendRequest** *sends HTTP request*:

**gotResponse** *event emitted when request comes back*:

## Example

```javascript

//
// requestOptions is a 1:1 mapping to https://github.com/mikeal/request API 
//
var requestOptions = {
  "url": "http://google.com"
};

myHook.emit('sendRequest', requestOptions);

myHook.on('*::gotResponse', function(data){
  
  console.log(data);
  
  /* Outputs:
    {
       err:         err,
       statusCode:  response.statusCode,
       headers:     response.headers,
       body:        response.body
       hook:     options,
       requestTime: requestTime
     }
   */
  
})
```

Note that the "hook" key contains original parameterts passed to request,
making it ideal to put some other values for handling the request context (such as linking the request to an id, for example)