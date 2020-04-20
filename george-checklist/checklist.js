
function createCheckbox(appendTo, index, text, isChecked) {
    var outerp = document.createElement("P");
    appendTo.appendChild(outerp);
    var label = document.createElement("LABEL");
    outerp.appendChild(label);
    var input = document.createElement("INPUT");
    input.type = "checkbox";
    input.classList.add("filled-in");
    input.checked = isChecked;
    input.onclick = () => { onChange(index) };
    label.appendChild(input);
    var span = document.createElement("SPAN");
    span.innerHTML = text;
    label.appendChild(span);
}

var state = []

items.forEach((value, index, array) => { state.push(0) });

var statestr = getCookie("state");

if(statestr != "") {
    for(var i = 0; i < statestr.length; i++) {
        state[i] = parseInt(statestr.charAt(i));
    }
}

var holder = document.getElementById("holder");

for(var i = 0; i < items.length; i++) {
    createCheckbox(holder, i, items[i], state[i]);
}


function onChange(index) {
    if(state[index] === 0) {
        state[index] = 1;
    } else if(state[index] === 1) {
        state[index] = 0;
    } else {
        state[index] = 0;
    }

    setCookie("state", convert(state));
}


function reset() {
    var checkboxes = document.querySelectorAll("input");
    checkboxes.forEach((value, key, parent) => { value.checked = false });
    state.forEach((value, index, array) => { state[index] = 0 });
    setCookie("state", convert(state));
}