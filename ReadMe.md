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
       hook:     options,
       requestTime: requestTime
     }
   */
  
})
```