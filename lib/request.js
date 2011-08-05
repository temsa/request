var Hook = require('hook.io').Hook,
    request = require('request'),
    util = require('util');

var RequestHook = exports.RequestHook = function(options){

  Hook.call(this, options);

  var self = this;

  self.on('*::sendRequest', function(data){
    console.log(data);
    self._request(data);
  });

};

// RequestHook inherits from Hook
util.inherits(RequestHook, Hook);

RequestHook.prototype._request = function(options){

  var self = this,
      now  = new Date().getTime();

  request(options, function (err, response, body) {

     var requestTime = new Date().getTime() - now;
     response = response || {};
     self.emit('gotResponse', {
       err:         err,
       statusCode:  response.statusCode,
       headers:		response.headers,
       body:        body,
       requestTime: requestTime,
       hook:        options //gives back whatever option has been passed, ideal for passing a context
     });
   })

};

