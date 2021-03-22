function insertNewRecord(data: any) {
    var table = document.getElementById("shoppinglist");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 

    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML = data.product;                 // value placed 

    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML = data.price;                 // value placed
}

var rtrstr = sessionStorage.getItem("cartdata")
var rtrarray = JSON.parse(rtrstr);
var total = 0;
for (var j = 0; j < rtrarray.length; j++) {
    console.log("hello", rtrarray[j]);
    total += parseInt(rtrarray[j].price);
    this.insertNewRecord(rtrarray[j]);
}

console.log('price', total);
document.getElementById("total").innerHTML = "The total is : " + total;

// var totalObj = {
//     clientname: '',
//     projectname: 'Total',
//     budget: total
// }

// insertNewRecord(totalObj);
