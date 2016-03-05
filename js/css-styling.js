//Wait for page to load
window.onload = function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    document.getElementById("bored_button").style.marginLeft = ((w / 2) - 75) + "px";
}

window.onresize = function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    document.getElementById("bored_button").style.marginLeft = ((w / 2) - 75) + "px";
}