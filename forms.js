// Inputs and textarea
var elements = document.querySelectorAll('input, textarea');

function checkValidity() {};

for (i=0; i<elements.length; i++) {
  (function(element) {
    var id = element.getAttribute('id');
   element.value = sessionStorage.getItem(id); 
    element.oninput = function() {
      sessionStorage.setItem(id, element.value);
      checkValidity();
    };
  })(elements[i]);
}
// Dropdown selection
document.getElementById("prof").onchange = function() {
    sessionStorage['prof'] = document.getElementById("prof").value;
   }
   window.onload= function(){
       if(sessionStorage['prof'])
           document.getElementById("prof").value = sessionStorage['prof'];
   }

// Name on header
document.getElementById("data").innerHTML= sessionStorage.getItem("name");