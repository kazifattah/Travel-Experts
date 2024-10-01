// creating variables then putting them in arrays to easily access elements by id

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const city = document.getElementById("city");
const province = document.getElementById("province");
const postal = document.getElementById("postal");

const fieldsArray=[fname, lname, email, phone, address, city, province, postal];

const fname1 = document.getElementById("fname1");
const lname1 = document.getElementById("lname1");
const email1 = document.getElementById("email1");
const phone1 = document.getElementById("phone1");
const address1 = document.getElementById("address1");
const city1 = document.getElementById("city1");
const province1 = document.getElementById("province1");
const postal1 = document.getElementById("postal1");

const explainerArray= [fname1, lname1, email1, phone1, address1, city1, province1, postal1];


// a for-loop to unhide/hide explanations
// for each field in the form when focused/blurred respectively

for (let i=0; i<fieldsArray.length; i++)
{

    fieldsArray[i].addEventListener("focus", function(){
        explainerArray[i].style.display="block";
    });
    
    fieldsArray[i].addEventListener("blur", function(){
        explainerArray[i].style.display="none";
    });
};


// function to confirm or cancel form submission and form reset
// to call this function I have an onsubmit and onreset event listener
// inside the form tag of the html

function confirmMessage(event){
    if (confirm("Are you sure?") == true){
        event();
    }
    else {
        event.preventDefault();
    };
};
  
  
  