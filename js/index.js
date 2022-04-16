
var google = "https://www.google.com/search?q=";
var ddg = "https://duckduckgo.com/?q=";
var eng = google;

function search() {
    var engine = document.getElementById("engine").innerHTML;
    var search = document.getElementById("search").value;
    eng = google;
    if (engine == "Google") {
        eng = google;
    } else {
        eng = ddg;
    }
    var url = eng + search;

    // detect if the value of search is a url using regex
    var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    if (urlRegex.test(search)) {
        window.location.href = search;
    } else {
        window.location.href = url;
    }
}

function switchEngine() {
    console.log("engine clicked");
    var engine = document.getElementById("engine").value;
    if (eng == google) {
        eng = ddg;
        engine = "DuckDuckGo";
    } else if (eng == ddg) {
        eng = google;
        engine = "Google";
    }
    console.log(engine);
    // if the eng variable is set to google, set the engine variable to google
    // if the eng variable is set to ddg, set the engine variable to ddg
    document.getElementById("engine").innerHTML = engine;

}