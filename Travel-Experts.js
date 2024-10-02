// all the arrays used for this website

// creating the image array and populating it with vacation pics
const imgArray = [createIMG("./images/vacation1.jpg"), 
    createIMG("./images/vacation2.jpg"),
    createIMG("./images/vacation3.jpg"),
    createIMG("./images/vacation4.jpg")
];

// creating variables containing paragraphs related to the vacation pics
const p1 = "Enjoy a relaxing time at the beaches of Maldives. You and your family can have a fun time surfing, snorkeling and enjoying the sun if you choose this package.";
const p2 = "Do you like the mountains? Come to Alberta, Canada and experience the beauty of the Rockies this summer.";
const p3 = "Experience the beautiful canals in Venice, Italy and go for a romantic ride on a gondola for your European vacation";
const p4 = "Witness the lush rainforest of the Amazon in your trip to Brazil. See what beauty the wilderness of South America has to offer";

const arrayP = [p1, p2, p3, p4];

// creating an array and populating it with paragraphs
const descriptArray = [createParagraph(p1),
  createParagraph(p2),
  createParagraph(p3),
  createParagraph(p4)
];


const url1="https://visitmaldives.com/en";
const url2="https://www.travelalberta.com/";
const url3="https://www.visitvenezia.eu/en";
const url4="https://www.amazoniabr.org/tavel-in-the-amazon/";

// creating the array containing the urls for the images
urlArray=[url1, url2, url3, url4];

// all the functions used for this website

// function to create image object

function createIMG(imageLocation) {
  let x = document.createElement("IMG");
  x.setAttribute("src", imageLocation);
  x.setAttribute("width", "400");
  x.setAttribute("height", "auto");
  return x;
};

// function to create p element for descriptions
function createParagraph(content) {
let x = document.createElement("p");
let node = document.createTextNode(content);
x.appendChild(node);
return x;

};


// function to dynamically add the picture into the html document
 
function addPictureElement(arrayIndex) {
  // create a variable to find the correct div element
    
  let selectDiv = document.getElementById(`div${arrayIndex+1}`);
  
    // add the image to the div element
  selectDiv.appendChild(imgArray[arrayIndex]);
  
};

// function to dynamically add the paragraphs to the html document
// similar to the addPictureElement function

function addParagraph(arrayIndex) {
  let selectDiv = document.getElementById(`div${arrayIndex+1}`);
  selectDiv.appendChild(descriptArray[arrayIndex]);
};


// a for loop to execute the functions 4 times for each image and paragraph
// when the body of the html document loads

//the line to load the paragraphs have been commented out
for (let i=0; i<imgArray.length; i++) {

  document.body.onload = addPictureElement(i);
  // document.body.onload = addParagraph(i);
};


// Below is the code to add Event Listener for a mouseover event and mouseout event
// to make the description for each picture appear and disappear

// I tried using a for loop to execute this code for efficiency
// but for some reason it didn't work
// so I just manually typed it 4 times.
// I have also included the for loop below but commented it out

//update: the for-loop worked :)

// document.getElementById(`div1`).addEventListener("mouseover", function () {
//   document.getElementById(`info1`).innerHTML = arrayP[0];
// document.getElementById(`info1`).style.display="block";});

// document.getElementById(`div1`).addEventListener("mouseout", function() {
//   document.getElementById(`info1`).innerHTML = null;
//   document.getElementById(`info1`).style.display="none";});

// document.getElementById(`div2`).addEventListener("mouseover", function () {
//   document.getElementById(`info2`).innerHTML = arrayP[1];
//   document.getElementById(`info2`).style.display="block";});
  
// document.getElementById(`div2`).addEventListener("mouseout", function() {
//   document.getElementById(`info2`).innerHTML = null;
//   document.getElementById(`info2`).style.display="none";});

// document.getElementById(`div3`).addEventListener("mouseover", function () {
//   document.getElementById(`info3`).innerHTML = arrayP[2];
//   document.getElementById(`info3`).style.display="block";});
    
// document.getElementById(`div3`).addEventListener("mouseout", function() {
//   document.getElementById(`info3`).innerHTML = null;
//   document.getElementById(`info3`).style.display="none";});

// document.getElementById(`div4`).addEventListener("mouseover", function () {
//   document.getElementById(`info4`).innerHTML = arrayP[3];
//   document.getElementById(`info4`).style.display="block";});
      
// document.getElementById(`div4`).addEventListener("mouseout", function() {
//   document.getElementById(`info4`).innerHTML = null;
//   document.getElementById(`info4`).style.display="none";});





// for-loop to add event listners for mouseover and mouseout
// to view/hide paragraphs related to the images

for (let j=1; j<imgArray.length+1; j++) {
  document.getElementById(`div${j}`).addEventListener("mouseover", function () {
    document.getElementById(`info${j}`).innerHTML = arrayP[j-1];
  document.getElementById(`info${j}`).style.display="block";});
  
  document.getElementById(`div${j}`).addEventListener("mouseout", function() {
    document.getElementById(`info${j}`).innerHTML = null;
    document.getElementById(`info${j}`).style.display="none";});


};




// for loop to open new window every time a picture is clicked

for (let i=0; i<imgArray.length; i++) {

  // creating an event listener for mouseclick on to the pictures

  document.getElementById(`div${i+1}`).addEventListener("click", function(){ 
  
  //function to open window
  
  const myWindow = window.open("redirect.html", "width=200", "height=400");
  
  // click handler on new window to redirect to url connected to the images
  myWindow.addEventListener("click", function(){
    const newWindow = window.open(urlArray[i]);
  });
  
  // timeout function to close new window after 5 seconds
  setTimeout(function() {myWindow.close()}, 5000);

  
});

};









