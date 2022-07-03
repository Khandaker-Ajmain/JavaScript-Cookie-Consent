let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  ////Create date object
  //var date = new Date();
  //date.setTime(date.getTime()+(5*60*1000));
  //var expires = "; expires="+date.toGMTString();
  //document.cookie = 'myCookieName'+"="+'mycookie'+expires+"; path=/";
  
  document.cookie = `myCookieName=mycookie; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};
//Check if cookie exists when page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};
