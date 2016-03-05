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
    
    //Called when the link is clicked
    link.onclick = function() {
        var randomNumber = Math.floor((Math.random() * 2) + 1);
        
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
                document.getElementById("title-of-activity").innerText = "Place Holder";
                document.getElementById("cool-fact").innerText = "Place Holder for cool youtube videos";
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
    
    function getLinesFromTextFile(file)
    {
        var lines = file.split("\n");
        
        for (var i = 0; i < lines.length; i++)
        {
            facts[i + 1] = lines[i];
        }
    }
}