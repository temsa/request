var Hook = require('hook.io').Hook,
    request = require('request'),
    util = require('util');

var RequestHook = exports.RequestHook = function(options){

  Hook.call(this, options);

  var self = this;

  self.on('*::sendRequest', function(event, data){
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
     self.emit('*::gotResponse', {
       err:         err,
       statusCode:  response.statusCode,
       hook:        options,
       body:        body,
       requestTime: requestTime
     });
   })

};

