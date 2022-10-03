/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var header = document.getElementById("header");
    if (header.className === "header-closed") {
      header.className = "header-open";
    } else {
      header.className = "header-closed";
    }
  }