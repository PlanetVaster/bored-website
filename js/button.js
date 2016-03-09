/* node browser: true */ /* global $ */
/* jslint browser: true */

var resizeUrl;
var youtubeVisible;

//Wait for page to load
window.onload = function () {
    
    "use strict";
    
    //Get a reference to the link with an id of "bored_button_link"
    var link = document.getElementById("bored_button_link");
    var factsFile;
    var facts = [null];
    var numOfFacts;
    var videosInfo = [null];
    
    var localFactsFile = new XMLHttpRequest();
    var localYoutubeFile = new XMLHttpRequest();
    
    localYoutubeFile.overrideMimeType("application/json");
    
    localFactsFile.open('GET', 'resources/facts.txt', true);
    localYoutubeFile.open('GET', 'resources/videos.json', true);
    
    localFactsFile.onreadystatechange = function() {
        factsFile = localFactsFile.responseText;
        getLinesFromTextFile(factsFile);
    };
    
    localYoutubeFile.onreadystatechange = function() {
        videosInfo = JSON.parse(localYoutubeFile.responseText);
    };
    
    localFactsFile.send();
    localYoutubeFile.send();
    
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
    
    //Called when the link is clicked
    link.onclick = function() {
        
        var numberOfCases = 3;
        var min = 1;
        var randomNumber = Math.floor(Math.random() * (numberOfCases)) + min;
            
        setYoutubeHidden();
        
        switch (randomNumber)
        {
            case 1:
                document.getElementById("title-of-activity").innerText = "Cool Fact";
                sayCoolFact();
                break;
            case 2:
                showYoutubeVideo();
                break;
            case 3:
                document.getElementById("title-of-activity").innerText = "Cool Website";
                document.getElementById("cool-fact").innerHTML = "At <a style=\"color:aqua; margin: 0; padding: 0 5px;\"" +
                "href=\"https://nthitz.github.io/turndownforwhatjs/\" id=\"cool-fact\" target=\"_blank\">" +
                "this site</a> you can make any website turn down for what.";
                break;
            default:
                document.getElementById("title-of-activity").innerText = "{Error} {OnClick}";
                document.getElementById("cool-fact").innerText = "Oh noes! something went wrong!";
                break;
        }
        
        return false;
    };
    
    function sayCoolFact()
    {
        var min = 1;
        var randomNumber = Math.floor(Math.random() * (numOfFacts)) + min;
        
        if (randomNumber > 0 && randomNumber <= numOfFacts)
        {
            document.getElementById("cool-fact").innerText = facts[randomNumber];
        } else {
            document.getElementById("title-of-activity").innerText = "{Error} {Cool Fact}";
            document.getElementById("cool-fact").innerText = "Oh noes! something went wrong! [Cool Fact]";
        }
        
        return false;
    }
    
    function showYoutubeVideo()
    {
        var totalNumberOfVideos = videosInfo.videos.length;
        var randomNumber = Math.floor(Math.random() * (totalNumberOfVideos));
        
        var videoID;
        var videoTitle;
        var videoText;
        
        if (randomNumber >= 0 && randomNumber <= totalNumberOfVideos)
        {
            videoTitle = videosInfo.videos[randomNumber].title;
            videoText = videosInfo.videos[randomNumber].text;
            videoID = videosInfo.videos[randomNumber].id;
            if (videoTitle == null || videoText == null || videoID == null)
            {
                document.getElementById("title-of-activity").innerText = "{Error} {Youtube Video}";
                document.getElementById("cool-fact").innerText = "Oh noes! something went wrong! [Youtube Video]";
                videoTitle = "{Error} {Youtube Video}";
                videoText = "Oh noes! something went wrong! [Youtube Video]";
                videoID = "mKkLjJHwRec";
            }
        } else {
            document.getElementById("title-of-activity").innerText = "{Error} {Youtube Video}";
            document.getElementById("cool-fact").innerText = "Oh noes! something went wrong! [Youtube Video]";
            videoTitle = "{Error} {Youtube Video}";
            videoText = "Oh noes! something went wrong! [Youtube Video]";
            videoID = "mKkLjJHwRec";
        }
        
        var videoURL = "https://www.youtube.com/embed/" + videoID;
        
        resizeUrl = videoURL;
        
        callYoutubeVideo(videoURL, videoTitle, videoText);
        return false;
    }
    
    function callYoutubeVideo(url, title, text)
    {
        document.getElementById("title-of-activity").innerText = title;
        document.getElementById("cool-fact").innerText = text;
        
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w > 800)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 560px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"560\" height=\"315\" src=" + 
            url + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 560 && w >= 500)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 500px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"500\" height=\"315\" src=" + 
            url + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 500 && w >= 450)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 450px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"450\" height=\"315\" src=" + 
            url + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 450 && w >= 400)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 400px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"400\" height=\"315\" src=" + 
            url + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 400 && w >= 350)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 350px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"350\" height=\"315\" src=" + 
            url + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 350)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 325px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"325\" height=\"315\" src=" + 
            url + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        }  
        
        setYoutubeVisible();
        return false;
    }
    
    function getLinesFromTextFile(file)
    {
        var lines = file.split("\n");
        
        var i = 0;
        for (i = 0; i < lines.length; i += 1)
        {
            facts[i + 1] = lines[i];
        }
        
        numOfFacts = lines.length;
        
        return false;
    }
    
return false;
};

window.onresize = function () {
        
        "use strict";
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
        if (w > 800)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 560px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"560\" height=\"315\" src=" + 
            resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 560 && w >= 500)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 500px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"500\" height=\"315\" src=" + 
            resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 500 && w >= 450)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 450px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"450\" height=\"315\" src=" + 
            resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 450 && w >= 400)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 400px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"400\" height=\"315\" src=" + 
            resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 400 && w >= 350)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 350px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"350\" height=\"315\" src=" + 
            resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        } else if (w <= 350)
        {
            document.getElementById("youtube").outerHTML = "<div style=\"width: 325px; height: 340px; margin: 20px auto;\" id=\"youtube\"><iframe width=\"325\" height=\"315\" src=" + 
            resizeUrl + " frameborder=\"0\" id=\"youtube-iframe\" allowfullscreen></iframe>";
        }
        if (youtubeVisible)
        {
            document.getElementById("youtube").style.visibility = "visible";
            document.getElementById("youtube").style.display = "flex";
        }
};