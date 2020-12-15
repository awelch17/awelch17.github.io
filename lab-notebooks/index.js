
var searched_string = null;
var filters = new Set();

function createSearchResult(index) {
    var outera = document.createElement("A");
    outera.href = "pages/" + sources[index]["location"];
    outera.id = "result" + index.toString();
    document.getElementById("search-results").appendChild(outera);
    
    var cardDiv = document.createElement("DIV");
    cardDiv.classList.add("card", "white", "hoverable");
    outera.appendChild(cardDiv);
    
    var cardContentDiv = document.createElement("DIV");
    cardContentDiv.classList.add("card-content");
    cardContentDiv.style.textAlign = "center";
    cardDiv.appendChild(cardContentDiv);
    
    var cardTitle = document.createElement("P");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = sources[index]["name"];
    cardContentDiv.appendChild(cardTitle);
}


function filterResults() {
    for(var i = 0; i < sources.length; i++) {
        if(searched_string !== null) {
            if(!(sources[i]["name"].toLowerCase().includes(searched_string))) {
                document.getElementById("result" + i.toString()).style.display = "none";
                continue;
            }
        }
        
        document.getElementById("result" + i.toString()).style.display = "block";
    }
}


function onSearchChange() {
    var newVal = document.getElementById("search").value;
    
    if(newVal === "") {
        searched_string = null;
    } else {
        searched_string = newVal.toLowerCase();
    }
    
    filterResults();
}


for(var i = 0; i < sources.length; i++) {
    createSearchResult(i);
}