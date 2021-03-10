
const MAX_ENTRIES = 10;

function generateEntry(i) {
    var holder = document.getElementById("holder");
    
    var div = document.createElement("DIV");
    div.classList.add("entry-pair");
    holder.appendChild(div);
    
    var ci = document.createElement("INPUT");
    ci.type = "text";
    ci.classList.add("entry-box");
    ci.id = "ci" + i.toString();
    ci.oninput = ser;
    div.appendChild(ci);
    
    var li = document.createElement("INPUT");
    li.type = "text";
    li.classList.add("entry-box");
    li.classList.add("bigger");
    li.id = "li" + i.toString();
    li.oninput = ser;
    div.appendChild(li);
    
    var b = document.createElement("A");
    b.classList.add("go-button");
    b.classList.add("waves-effect");
    b.classList.add("waves-light");
    b.classList.add("btn");
    b.innerHTML = "Go";
    b.onclick = () => {
        var url = document.getElementById("li" + i.toString()).value;
        
        window.location.assign(url);
    };
    div.appendChild(b);
}


function ser() {
    var obj = {
        "entries": []
    }
    
    for (var i = 0; i < MAX_ENTRIES; i++) {
        var entry = [
            document.getElementById("ci" + i.toString()).value,
            document.getElementById("li" + i.toString()).value
        ]
        
        obj.entries.push(entry);
    }
    
    var val = JSON.stringify(obj);
    
    setCookie("state", val);
}

function de() {
    var asstr = getCookie("state");
    
    if (asstr != "") {
        var asobj = JSON.parse(asstr);
        
        for (var i = 0; i < MAX_ENTRIES; i++) {
            var ep = asobj.entries[i];
            
            document.getElementById("ci" + i.toString()).value = ep[0];
            document.getElementById("li" + i.toString()).value = ep[1];
        }
    }
}


for (var i = 0; i < MAX_ENTRIES; i++) {
    generateEntry(i);
}

de();
