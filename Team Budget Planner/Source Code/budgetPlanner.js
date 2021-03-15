function onFormSubmit() {
    //alert("Event generated...")
    readFormData();
    // insertNewRecord(data);
    resetData();
}

function onFormClear() {
    resetData();
}

function readFormData() {
    var obj = {}    // empty object
    obj.clientname = document.getElementById("clientname").value;
    obj.projectname = document.getElementById("projectname").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);

    var objArray = [];
    var existingData = sessionStorage.getItem("data");

    if(existingData) {
        objArray = JSON.parse(existingData);
        objArray.push(obj);
    } else {
        objArray.push(obj);
    }

    sessionStorage.setItem("data", JSON.stringify(objArray))

    return obj;
}

/*function insertNewRecord(data){
 var table = document.getElementById("budgetPlanner")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created 

 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=data.clientname;                 // value placed 

 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=data.projectname;                 // value placed

}*/

function resetData() {
    document.getElementById("clientname").value = "";
    document.getElementById("projectname").value = "";
    document.getElementById("budget").value = "";

}



