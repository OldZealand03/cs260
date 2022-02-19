 /* TASKS TO WORK ON
 
 Make sure it looks good on a phone! (responsive design)
 Maybe we add iconic pictures of Kanye to the mix? More sunsets and night skies?

 */

 let images = [
     "url('images/background3.png')",
     "url('images/background4.png')",
     "url('images/background5.png')",
     "url('images/background6.png')",
     "url('images/background7.png')",
     "url('images/background8.png')",
     "url('images/background9.png')",
     "url('images/background11.png')",
     "url('images/background13.png')",
     "url('images/background15.png')",
     "url('images/background16.png')",
     "url('images/background18.png')",
 ]


function insertQuote() {
    url = "https://api.kanye.rest/";

    let results = "<br><br><br><i>\"";

    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            changeImage();
            console.log(json);
            quote = json.quote;
            results += quote;
            results += "\"</i><br><br>-Kanye West<br><br>";
            document.getElementById('quote').style.fontFamily = "Arial";
            document.getElementById('quote').innerHTML = results;
        });
}

function changeImage() {
    var number = Math.floor(Math.random()*images.length);
    document.body.style.backgroundImage = images[number];
}

insertQuote();