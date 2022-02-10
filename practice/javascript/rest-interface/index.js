
const formatOutput = function (jsonData) {
    console.log(jsonData)
    console.log(jsonData.Strings.length)

    strings = jsonData.Strings
    let results = "<div class='FinalOutput'>"

    for (each in strings) {
        results += "<p class='item'><b>" + each + "</b>. " + strings[each] + "</p>"
    }

    results += "</div>"
    document.getElementById("Results").innerHTML = results

}

const getAPIData = function () {
    const url = "https://ciprand.p3p.repl.co/api?len=20&count=10";

    fetch(url).then(async function (response) {
        // await copyDataToPrev();
        if (response.status != 200) {
            console.log("--- A RESPONSE OTHER THAN 200 WAS SENT BACK ---")
        } 
        else {
            return response.json()
        }
    }).then(function(json_response){
        if (json_response != null) {
            return formatOutput(json_response)
        }
    })
}

getAPIData()