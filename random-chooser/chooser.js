
document.getElementById("qfair").checked = false;
document.getElementById("text-input").value = "";

var qfairEnabled = false;

var qfairCount = 0;
var qfairData = {};

function generateQFD() {
    var data = document.getElementById("text-input").value;
    var splitstr = data.split(",");
    
    qfairData = {};
    
    for(var item in splitstr) {
        qfairData[splitstr[item]] = 0;
    }
    
    qfairCount = 0;
    
    document.getElementById("qfair-basis-count").innerHTML = "Fair Selection Basis Count: 0";
}


function fairSelectionToggled() {
    if(qfairEnabled) {
        qfairEnabled = false;
        document.getElementById("qfair-info").style.display = "none";
    } else {
        qfairEnabled = true;
        document.getElementById("qfair-info").style.display = "block";
        generateQFD();
    }
}

function onTextInputChange() {
    var newtext = document.getElementById("text-input").value;
    
    document.getElementById("choose-btn").classList.remove("disabled");
    
    if(newtext.length < 1) {
        document.getElementById("choose-btn").classList.add("disabled");
    }
    
    if(qfairEnabled) {
        generateQFD();
    }
}

function resetQFairBasis() {
    generateQFD();
}

function choose() {
    if(qfairEnabled) {
        var lowest = qfairData[Object.keys(qfairData)[0]];
        
        for(var key in qfairData) {
            if(qfairData[key] < lowest) {
                lowest = qfairData[key];
            }
        }
        
        var eligible = [];
        
        for(var key in qfairData) {
            if(qfairData[key] <= lowest) {
                eligible.push(key);
            }
        }
        
        var choice = eligible[Math.floor(Math.random() * eligible.length)];
        qfairData[choice] += 1;
        qfairCount += 1;
        
        document.getElementById("qfair-basis-count").innerHTML = "Fair Selection Basis Count: " + qfairCount.toString();
        
        document.getElementById("result").innerHTML = choice;
    } else {
        var data = document.getElementById("text-input").value;
        var splitstr = data.split(",");
        
        var item = splitstr[Math.floor(Math.random() * splitstr.length)];
        
        document.getElementById("result").innerHTML = item;
    }
}