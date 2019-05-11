/* This function will change background color of web page on load of document.*/

function changeBackground() {
  var body = document.querySelector("html");
  body.style.background = "wheat";
}

/* This function will change background color of edit on the basis of content available in 
    edit text if it is available then background color will be red otherwise green */

function mouseover() {
  var edit = document.getElementById("editText");
  if (edit.value == "") {
    edit.style.background = "red";
  } else {
    edit.style.background = "green";
  }
}

/* This function will get executed when user exits from edit text without typing anything in 
   edit text basically on blur of edit text and dispaly error message just below the edit text stating that 
   This is required field and text color will be red  */

function checkInput() {
  var edit = document.getElementById("editText");
  var error = document.getElementById("error");
  if (edit.value == "") {
    console.log("Please");
    error.style.color = "red";
    error.textContent = "This is required field";
  } else {
    error.textContent = "";
  }
}

/* This function will change background color of edit text to 
   white color when user mouse out from edit text */

function omuseOut() {
  var edit = document.getElementById("editText");
  edit.style.background = "white";
}

/* This function will get executed when user click's on submit button, if user did not entered any 
   data then it will display This is required field in red color  */
function validate() {
  var edit = document.getElementById("editText");
  var error = document.getElementById("error");

  if (edit.value == "") {
    error.textContent = "This is required field";
  } else {
    error.textContent = "";
  }
}

/** This function will create a new paragraph when user clicks on Generate Paragraph */
function createPara() {
  var para = document.createElement("P");

  para.innerText = "This is dynamic generated paragraph";

  document.getElementById("dymanicdata").appendChild(para);
}

//  This will slide images after every 5 sec.
function rotate() {
  var myImage = document.getElementById("imga");
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "a.JPG") {
    myImage.setAttribute("src", "b.JPG");
  } else if (mySrc === "b.JPG") {
    myImage.setAttribute("src", "c.JPG");
  } else {
    myImage.setAttribute("src", "a.JPG");
  }
}

var bd = document.querySelector("body");
bd.onload = setInterval(rotate, 6000);
