//Wait for page to load
window.onload = function() {
    
    //Get a reference to the link with an id of "bored_button_link"
    var link = document.getElementById("bored_button_link");
    
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
        var totalNumberOfFacts = 6;
        var numberOfFacts = Math.floor((Math.random() * totalNumberOfFacts) + 1);
        
        switch (numberOfFacts)
        {
            default:
                document.getElementById("title-of-activity").innerHTML = "{Error} {Cool Fact}";
                document.getElementById("cool-fact").innerText = "Oh noes! something went wrong! [Cool Fact]";
                break;
            case 1:
                document.getElementById("cool-fact").innerText = "In 2006 an Australian man tried to sell New Zealand on eBay. The price reached " + 
                "$3,000 before eBay shut it down!";
                break;
            case 2:
                document.getElementById("cool-fact").innerText = "In Japan, letting a sumo wrestler make your baby cry is considered good luck.";
                break;
            case 3:
                document.getElementById("cool-fact").innerText = "It would take at least 480 bananas to die of potassium overdose.";
                break;
            case 4:
                document.getElementById("cool-fact").innerText = "Nutella was invented during WWII, when an Italian pastry maker mixed hazelnuts " +
                "into chocolate to extend his chocolate ration.";
                break;
            case 5:
                document.getElementById("cool-fact").innerText = "The present population is expected to rise to 8 billion by 2020, 10 billion by 2050, and 15 " +
                "billion by 2080!";
                break;
            case 6:
                document.getElementById("cool-fact").innerHTML = "At <a style=\"color:aqua; margin: 0; padding: 0;\"" +
                "href=\"https://nthitz.github.io/turndownforwhatjs/\" id=\"cool-fact\" target=\"_blank\">" +
                "this site</a> you can make any website turn down.";
                
                break;
        }
        
        return false;
    }
}