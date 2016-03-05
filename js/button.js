//Wait for page to load
window.onload = function () {
    
    //Get a reference to the link with an id of "bored_button_link"
    var link = document.getElementById("bored_button_link");
    var factsFile;
    var facts = [null];
    
    var file = new XMLHttpRequest();
    file.open('GET', 'resources/facts.txt');
    
    file.onreadystatechange = function() {
        factsFile = file.responseText;
        getLinesFromTextFile(factsFile);
    }
    
    file.send();
    
    function setYoutubeVisible() {
        document.getElementById("youtube").style.visibility = "visible";
    }
    
    function setYoutubeHidden() {
        document.getElementById("youtube").style.visibility = "hidden";
    }
    
    //Called when the link is clicked
    link.onclick = function() {
        
        var numberOfCases = 2;
        var randomNumber = Math.floor((Math.random() * numberOfCases) + 1);
            
        setYoutubeHidden();
        
        switch (randomNumber)
        {
            default:
                document.getElementById("title-of-activity").innerText = "{Error} {OnClick}";
                document.getElementById("cool-fact").innerText = "Oh noes! something went wrong!";
                break;
            case 1:
                document.getElementById("title-of-activity").innerText = "Cool Fact";
                sayCoolFact();
                break;
            case 2:
                showYoutubeVideo();
                break;
        }
        
        return false;
    }
    
    function sayCoolFact()
    {
        var totalNumberOfFacts = 7;
        var numberOfFacts = Math.floor((Math.random() * totalNumberOfFacts) + 1);
        
        switch (numberOfFacts)
        {
            default:
                document.getElementById("title-of-activity").innerText = "{Error} {Cool Fact}";
                document.getElementById("cool-fact").innerText = "Oh noes! something went wrong! [Cool Fact]";
                break;
            case 1:
                document.getElementById("cool-fact").innerText = facts[1];
                break;
            case 2:
                document.getElementById("cool-fact").innerText = facts[2];
                break;
            case 3:
                document.getElementById("cool-fact").innerText = facts[3];
                break;
            case 4:
                document.getElementById("cool-fact").innerText = facts[4];
                break;
            case 5:
                document.getElementById("cool-fact").innerText = facts[5];
                break;
            case 6:
                document.getElementById("cool-fact").innerText = facts[6];
                break;
            case 7:
                document.getElementById("title-of-activity").innerText = "Cool Website";
                document.getElementById("cool-fact").innerHTML = "At <a style=\"color:aqua; margin: 0; padding: 0;\"" +
                "href=\"https://nthitz.github.io/turndownforwhatjs/\" id=\"cool-fact\" target=\"_blank\">" +
                "this site</a> you can make any website turn down.";
                break;
        }
        
        return false;
    }
    
    function showYoutubeVideo()
    {
        var totalNumberOfVideos = 1;
        var numberOfVideos = Math.floor((Math.random() * totalNumberOfVideos) + 1);
        
        var videoID;
        var videoTitle;
        var videoText;
        
        switch (numberOfVideos)
        {
            default:
                document.getElementById("title-of-activity").innerText = "{Error} {Youtube Video}";
                document.getElementById("cool-fact").innerText = "Oh noes! something went wrong! [Youtube Video]";
                videoTitle = "{Error} {Youtube Video}";
                videoText = "Oh noes! something went wrong! [Youtube Video]";
                videoID = "mKkLjJHwRec";
                break;
            case 1:
                videoTitle = "Funny Video";
                videoText = "Enjoy this funny video!";
                videoID = "OIwxPsp-dKY";
                break;
        }
        
        var videoURL = "https://www.youtube.com/embed/" + videoID;
        callYoutubeVideo(videoURL, videoTitle, videoText);
    }
    
    function callYoutubeVideo(url, title, text)
    {
        document.getElementById("title-of-activity").innerText = title;
        document.getElementById("cool-fact").innerText = text;
        document.getElementById("youtube").outerHTML = "<div style=\"width: 560px; height: 340px; margin: 25px auto;\" id=\"youtube\"><iframe width=\"560\" height=\"315\" src=" + 
        url + " frameborder=\"0\" allowfullscreen></iframe>";
        setYoutubeVisible();
    }
    
    function getLinesFromTextFile(file)
    {
        var lines = file.split("\n");
        
        for (var i = 0; i < lines.length; i++)
        {
            facts[i + 1] = lines[i];
        }
    }
}