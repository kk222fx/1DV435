

function hideTable()
{
    
    var tbl = document.getElementById("snyggtable");
    if(tbl.className == "snyggtable")
    {
        tbl.className = "snyggtable-hide";
    }else
    {
        tbl.className = "snyggtable";
    }
}
function convert()
{
    alert("hej");
    var euro = 9;
    var dollar = 6;
    var value = document.getElementById("tbx1").value;
    if(value !== "")
    {
        alert("Ange en siffra!");
    }else
    {
        Number sek = (Number)value;
        Number e = (sek/euro);
        Number u = (sek/dollar);
        //alert("Dollar: " + u +" och Euro: " + e);
    }
    
    
}
