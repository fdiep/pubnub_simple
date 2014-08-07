//load config file
var config = require("./config.js");

var pubnub = require("pubnub").init({
    publish_key   : PUBNUB.publish_key,
    subscribe_key : PUBNUB.subscribe_key
});

/* ---------------------------------------------------------------------------
Listen for Messages
--------------------------------------------------------------------------- */
pubnub.subscribe({
    channel  : PUBNUB.channel_01,
    callback : function(message) {
        console.log( " > ", message );
    }
});
