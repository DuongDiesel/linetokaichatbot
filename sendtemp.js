#!/usr/bin/env node
const line = require('@line/bot-sdk');
const configfile = require('./config');
const config = {
    channelAccessToken: configfile.linechannelAccessToken,
    channelSecret: configfile.linechannelSecret
  };
const client = new line.Client(config);

function sendBroadcastMessageTemp() {
    console.log("sendBroadcastMessage");
    return client.broadcast({
        type: "text",
        text: '今日の体温登録お願いします'
    }
    ).then(data => console.log(data))
    .catch(e => console.log(e))
};

sendBroadcastMessageTemp();