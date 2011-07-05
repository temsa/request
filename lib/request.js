var Hook = require('hook.io').Hook,
    request = require('request'),
    util = require('util');

var RequestHook = exports.RequestHook = function(options){

  for (var o in options) {
    this[o] = options[o];
  }

  Hook.call(this);

  var self = this;

  self.on('i.request.o.request', function(source, event, data){
    self._request(data);
  });

  // on ready, start up the httpServer
  self.on('ready', function(){

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
     // Note: the body should be passed back here, was spamming console too much for debug
     self.emit('o.gotResponse', {
       err:         err,
       statusCode:  response.statusCode,
       hook:     options,
       requestTime: requestTime
     });
   })

};

