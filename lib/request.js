var Hook = require('hook.io').Hook,
    request = require('request'),
    util = require('util');

var RequestHook = exports.RequestHook = function(options){

  for (var o in options) {
    this[o] = options[o];
  }

  Hook.call(this);

  var self = this;

  self.on('i.request', function(event, data){
    self._request(data);
    console.log('I am currently getting data on my inputs from: '.green + event.toString().yellow + ' ' + JSON.stringify(data).grey);
  });

  self.on('o.*', function(event, data){
     console.log('I am currently sending data to my outputs on: '.green + event.toString().yellow + ' ' + JSON.stringify(data).grey);
  });

  // on ready, start up the httpServer
  self.on('ready', function(){

  });
  
};

// RequestHook inherits from Hook
util.inherits(RequestHook, Hook);

RequestHook.prototype._request = function(options){

  console.log('making a request ', options);
  request(options, function (error, response, body) {
     if(response.statusCode == 201){
       console.log('document saved as: http://mikeal.couchone.com/testjs/'+ rand);
     } else {
       console.log('error: '+ response.statusCode);
       console.log(body);
     }
   })


};

