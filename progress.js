/** This method will executed when user load the page display loader indicator and
 *  after 6 sec it will be close automatically and please wait... message will also disappear  */

function closeProgress() {
  var progress = document.getElementById("loaderPara");
  var text = document.getElementById("waitmsg");
  text.textContent = "";

  progress.style.display = "none";

  window.location.href = "index.html"; // this line will navigate user to home page.
}

setTimeout(closeProgress, 6000);
