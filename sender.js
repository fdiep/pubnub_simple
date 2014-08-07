//load config file
var config = require("./config.js");

var pubnub = require("pubnub").init({
    publish_key   : PUBNUB.publish_key,
    subscribe_key : PUBNUB.subscribe_key
});

/* ---------------------------------------------------------------------------
Publish Messages
--------------------------------------------------------------------------- */
var message = { "some" : "data" };
pubnub.publish({
    channel   : PUBNUB.channel_01,
    message   : message,
    callback  : function(e) { console.log( "SUCCESS!", e ); },
    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
});

/* ---------------------------------------------------------------------------
Type Console Message
--------------------------------------------------------------------------- */
var stdin = process.openStdin();
stdin.on( 'data', function(chunk) {
    pubnub.publish({
        channel : "my_channel",
        message : ''+chunk
    });
});
