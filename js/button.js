/* Needed for browser resizing */
var resizeUrl;
var youtubeVisible = false;
/* Needed for cool facts */
var numOfFacts;
var facts = [null];
/* Need for youtube video */
var numOfVideos;
var videoFile = [null];
var videoWidth = 560;
/* Youtube video functions */

function setYoutubeVisible() {
    document.getElementById("youtube").style.visibility = "visible";
    document.getElementById("youtube").style.display = "flex";
    youtubeVisible = true;
}

function setYoutubeHidden() {
    document.getElementById("youtube").style.visibility = "hidden";
    document.getElementById("youtube").style.display = "none";
    youtubeVisible = false;
}

function showYoutubeVideo() {
    var randomNumber = Math.floor(Math.random() * numOfVideos);
    
    var videoTitle;
    var videoText;
    var videoID;
    
    if (randomNumber >= 0 && randomNumber <= numOfVideos)
    {
        videoTitle = videoFile.videos[randomNumber].title;
        videoText = videoFile.videos[randomNumber].text;
        videoID = videoFile.videos[randomNumber].id;
    } else {
        videoTitle = "{Error} [Youtube Video] Could not load youtube videos";
        videoText = "Oh noes! Something went wrong!";
        videoID = "D3-vBBQKOYU";
    }
    
    var videoUrl = "https://www.youtube.com/embed/" + videoID;
    resizeUrl = videoUrl;
    
    callYoutubeVideo(videoUrl, videoTitle, videoText);
}

function callYoutubeVideo(videoUrl, videoTitle, videoText)
{
    document.getElementById("title-of-activity").innerText = videoTitle;
    document.getElementById("cool-fact").innerText = videoText;
    
    sizeYoutubeVideo();
    
    document.getElementById("youtube").outerHTML = "<div style=\"width: " + videoWidth + "px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"" + videoWidth + "\" height=\"315\" src=" + resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
    
    setYoutubeVisible();
}

function sayCoolFact() {
    var min = 1;
    var randomNumber = Math.floor(Math.random() * (numOfFacts)) + min;
    
    if (randomNumber > 0 && randomNumber <= numOfFacts)
    {
        document.getElementById("cool-fact").innerText = facts[randomNumber];
    } else {
        document.getElementById("title-of-activity").innerText = "{Error} [Cool Fact] Could not load facts.";
        document.getElementById("cool-fact").innerText = "Fact: Something went wrong while loading facts!";
    }
}

function sizeYoutubeVideo() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w > 800)
    {
        videoWidth = 560;
    } else if (w <= 560 && w >= 500)
    {
        videoWidth = 500;
    } else if (w <= 500 && w >= 450)
    {
        videoWidth = 450;
    } else if (w <= 450 && w >= 400)
    {
        videoWidth = 400;
    } else if (w <= 400 && w >= 350)
    {
        videoWidth = 350;
    } else if (w <= 350)
    {
        videoWidth = 325;
    }
}

window.onload = function() {
    var link = document.getElementById("bored_button_link");
    
    jQuery.get('resources/facts.txt', function(data) {
        var lines = data.split("\n");
    
        var i = 0;
        for (i = 0; i < lines.length; i += 1)
        {
            facts[i + 1] = lines[i];
        }
        
        numOfFacts = lines.length;
    });
    
    jQuery.getJSON('resources/videos.json', function(data) {
        videoFile = data;
        numOfVideos = data.videos.length;
    });
    
    
    link.onclick = function() {
        var numOfActivities = 2;
        
        var min= 1;
        var randomNumber = Math.floor(Math.random() * (numOfActivities)) + min;
        
        setYoutubeHidden();
        
        switch(randomNumber) {
            case 1:
                document.getElementById("title-of-activity").innerText = "Cool Fact";
                sayCoolFact();
                break;
            case 2:
                showYoutubeVideo();
                break;
            /* case 3:
                document.getElementById("title-of-activity") = "Cool Website";
                document.getElementById("cool-fact").innerHTML = "At <a style=\"color:aqua; margin: 0; padding: 0 5px;\"" +
                "href=\"https://nthitz.github.io/turndownforwhatjs/\" id=\"cool-fact\" target=\"_blank\">" +
                "this site</a> you can make any website turn down for what.";
                break; */
            default:
                document.getElementById("title-of-activity").innerText = "{Error} [Button Click]";
                document.getElementById("cool-fact").innerText = "Something went wrong! Please report this error using the feedback button below!";
                break;
        }
    };
};

window.onresize = function() {
    sizeYoutubeVideo();
    
    document.getElementById("youtube").outerHTML = "<div style=\"width: " + videoWidth + "px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"" + videoWidth + "\" height=\"315\" src=" + resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
    
    if (youtubeVisible)
    {
        setYoutubeVisible();
    }
};