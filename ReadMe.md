## hook.io-request

*a simple Hook for making outgoing http requests*

## Hook.io Events Names

**sendRequest** *sends HTTP request*:

**gotResponse** *event emitted when request comes back*:

```javascript

//
// requestOptions is a 1:1 mapping to https://github.com/mikeal/request API 
//
var requestOptions = {
  "url": "http://google.com"
};

myHook.emit('*::sendRequest', requestOptions);

myHook.on('*::gotResponse', function(source, event, data){
  
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