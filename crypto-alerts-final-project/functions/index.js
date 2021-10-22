/* eslint-disable max-len */
const GetData = require("../utils/GetCoinData");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

 const updatePing = async () => {
    
            const tempPing = await GetData.ping();
            exports.pingSchedule = functions.pubsub.schedule("*****").onRun((context) => {
            db.doc("timer/timer1").update({"time": ping.data.gecko_says});
            return console.log("successful timer update");
            });

            //api data needs to be assigned to state to be usable, because react wants something to render and you cannot render a promise
     return tempPing;
    
        }

const ping = updatePing();

