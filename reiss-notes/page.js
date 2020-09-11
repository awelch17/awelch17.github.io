
var raw_text_enabled = false;

function toggleRawText() {
    var button = document.getElementById("raw-text-toggle");
    var raw_text = document.getElementById("raw-text");
    
    if(raw_text_enabled) {
        raw_text_enabled = false;
        button.innerHTML = "Show Raw Text";
        raw_text.style.display = "none";
    } else {
        raw_text_enabled = true;
        button.innerHTML = "Hide Raw Text";
        raw_text.style.display = "block";
    }
}