// add listener to id search to call search function when enter is pressed non-deprecated method
document.getElementById("search").addEventListener("keyup", function(e) {
    if (e.code === "Enter") {
        search();
    }
});