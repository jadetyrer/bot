//var org = document.getElementById("helper").getAttribute("organisation");
//var library = document.getElementById("helper").getAttribute("library");
//var category = document.getElementById("helper").getAttribute("category");
//var colour = document.getElementById("helper").getAttribute("colour");
//var website = document.getElementById("helper").getAttribute("website");

const script = document.createElement('script');
// use local file
// script.src = 'script.js';
var org = document.getElementById("helper").getAttribute("organisation");
var library = document.getElementById("helper").getAttribute("library");
var category = document.getElementById("helper").getAttribute("category");
var colour = document.getElementById("helper").getAttribute("colour");
var website = document.getElementById("helper").getAttribute("website");


script.src = website;
script.async = true;
// make code in script to be treated as JavaScript module
// script.type = 'module';




function resizeIFrameToFitContent(iFrame) {

    iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;

    //var width = iFrame.contentWindow.document.body.scrollWidth;
    //var height = iFrame.contentWindow.document.body.scrollHeight;
}

//window.addEventListener('DOMContentLoaded', function (e) {

//    var iFrame = document.getElementById('iFrame1');
//    resizeIFrameToFitContent(iFrame);

//});

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

//var width = "";
//var height = "";

// Listen to message from child window
eventer(messageEvent, function (e) {
    var key = e.message ? "message" : "data";
    var data = e[key];

    var iframe = document.getElementById('my-iframe');
    //iframe.style.width = data;
    iframe.style.width = data.substring(0, 5);
    iframe.style.height = data.substring(5);

}, false);

script.onload = () => {
    console.log('Script loaded successfuly');
    //const box = document.getElementById('box');

    //box.innerHTML += ('<div style="position: fixed; background-color: transparent; z-index: 9999999;bottom:0px;right:0px;"><iframe id="my-iframe" allowtransparency = "true" style = "max-width: 100vw; background-color: transparent; background: none;" src = "https://localhost:52329/helpbot/1a99ce5c-b223-463c-a3fd-774493828d9f/3ed8a14d-1ef4-473d-90c0-4261eecbfc97"></iframe></div>')

    var existingFrame = document.getElementById('my-iframe');

    if (existingFrame == null) {
        const iframe = document.createElement("iframe");
        iframe.style.position = 'fixed'
        iframe.style.bottom = '0px'
        iframe.style.right = '0px'
        iframe.id = 'my-iframe';
        iframe.style.width = '100px';
        iframe.style.height = '100px';
        iframe.style.maxWidth = '100vw';
        iframe.style.marginRight = '10px';
        iframe.src = `https://localhost:52329/helpbot/${org}/${library}/${category}/${colour}`;
        document.body.appendChild(iframe);
    }
};
script.onerror = () => {
    console.log('Error occurred while loading script');
};
document.body.appendChild(script);
