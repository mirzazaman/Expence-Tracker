// select first input

let select = document.getElementById('input1');

// select Second input
let description = document.getElementById('input2');

// select Third input

let price = document.getElementById('input3');

// Let's Start Now
function addlist(){

    // get value from input1

    let input1 = select.value;
    select.value = "Choose Category";

    // get value from input2
    
    let input2 = description.value.trim();
    description.value = "";
    
    // get value from input3

    let input3 = price.value.trim();
    price.value = "";

    // Take value If contained

    if(input1 === "Choose Category" || input2 === "" || input3 === ""){
        return;
    }

    // console.log(input1, input2, input3);

    //  get table element
    let container = document.getElementById('container');

    // created table row element
    let list = document.createElement('tr');

    // row is now Child of "Table"
    container.appendChild(list);

    // created Type part
    let type = document.createElement('td');
    type.innerText = input1;

    // created Description part
    let detail = document.createElement('td');
    detail.innerText = input2;

    // created Price Part
    let amount = document.createElement('td');
    amount.innerText = input3;

    // created Delete Part
    let delet = document.createElement("td");

    // created delete button
    let del = document.createElement('button');
    del.innerText = "Del";
    del.setAttribute("id", "deleteBtn");
    del.setAttribute("onClick", "del(this)");
    delet.appendChild(del);


    // Childs Appended into parent
    list.appendChild(type);
    list.appendChild(detail);
    list.appendChild(amount);
    list.appendChild(delet)

}

// Function to remove list

function del(d){

    d.parentNode.parentNode.remove();
}