var hue = 0;
var speed = 0;
var imageMode = 0;
var autoRotate = 1;
var fps = 20;

var hueUpdateInterval;

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}

$(function () {
    $("#hue-slider").slider({
        min: 0,
        max: 360
    });
    $("#speed-slider").slider({
        min: 0,
        max: 10
    });
    setupInterval();
})

$("#hue-slider").on("slidechange", function () {
    hue = $('#hue-slider').slider("option", "value");
    $("#hue-label").text(hue);
    $("#hue-panel").css("filter", "hue-rotate(" + hue + "deg)")
});

$("#speed-slider").on("slidechange", function () {
    speed = $('#speed-slider').slider("option", "value");
    $("#speed-label").text(speed * fps);
})

function setupInterval() {
    clearInterval(hueUpdateInterval);
    hueUpdateInterval = setInterval(handleAutoRotate, 1000 / fps);
}

function handleAutoRotate() {
    if (speed > 0) {
        hue += speed;
        if (hue > 360) {
            hue = 0;
        }
        updateHue();
    }
}

function updateHue() {
    $("#hue-panel").css("filter", "hue-rotate(" + hue + "deg)")
    $("#hue-slider").slider('value', hue);
}