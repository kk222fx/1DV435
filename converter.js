

function convert() {
var euroRate = (0.11);
var dollarRate = (0.15);

    var string = document.querySelector("#kronor").value;

    if (isNaN(string)) {
        alert("Måste siffror!");
        return;
    }

    var kronor = parseFloat(string);
    var euro = euroRate * kronor;
    var dollar = dollarRate * kronor;

    document.querySelector("#euro").value = euro.toFixed(2);
    document.querySelector("#dollar").value = dollar.toFixed(2);

    addHistory(kronor, euro, dollar);
}

function addHistory(kronor, euro, dollar) {
    var t = document.querySelector("#tableBody");
    t.insertBefore(
        createHistoryRecord(kronor, euro, dollar),
        t.firstChild
    );
}

function createHistoryRecord(kronor, euro, dollar) {
    var tr = document.createElement("tr");
    tr.appendChild(createValueCell(kronor.toFixed(2) + " kr"));
    tr.appendChild(createValueCell(euro.toFixed(2) + " €"));
    tr.appendChild(createValueCell(dollar.toFixed(2) + " $"));
    return tr;
}

function createValueCell(value) {
    var td = document.createElement("td");
    td.innerHTML = value;
    return td;
}