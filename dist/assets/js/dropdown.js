"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //////////// BUTTON - DROPDOWN, CATEGORIES
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  } // Close the dropdown if the user clicks outside of it


  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      console.log(e);
      var myDropdown = document.getElementById("myDropdown");

      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  };
});