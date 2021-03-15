function insertNewRecord(data) {
    var table = document.getElementById("budgetPlannerlist")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 

    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML = data.clientname;                 // value placed 

    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML = data.projectname;                 // value placed

    var cell3 = newRow.insertCell(2);          // cell created 
    cell3.innerHTML = data.budget;
}

var rtrstr = sessionStorage.getItem("data")
var rtrarray = JSON.parse(rtrstr);
var total = 0;
for (var j = 0; j < rtrarray.length; j++) {
    console.log("hello", rtrarray[j]);
    total += parseInt(rtrarray[j].budget);
    insertNewRecord(rtrarray[j]);
}

console.log('budget', total);
document.getElementById("total").innerHTML = "The total is : " + total;

// var totalObj = {
//     clientname: '',
//     projectname: 'Total',
//     budget: total
// }

// insertNewRecord(totalObj);
