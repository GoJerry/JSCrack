// ==UserScript==
// @name         携程websocket
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://hotels.ctrip.com/hotel/beijing1
// @grant        none
// ==/UserScript==
(function() {
    var mess = document.getElementById("mess");
    if(window.WebSocket){
        ws = new WebSocket('ws://127.0.0.1:8014/');
        window.ws =ws
        ws.onopen = function(e){
            // console.log("连接服务器成功");
            ws.send("Browser");
        }
        ws.onclose = function(e){
            console.log("服务器关闭");
        }
        ws.onerror = function(){
            console.log("连接出错");
        }

        ws.onmessage = function(e){
            var data = e.data;
            var execJS = document.getElementById("execJS");
            if (execJS){
                document.body.removeChild(execJS);
            }
            execJS = document.createElement("script");
            execJS.id = "execJS";
            execJS.innerHTML = data;
            document.body.appendChild(execJS);
        }

    }
    // Your code here...
})();