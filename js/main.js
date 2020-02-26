function validate() {
  var x = document.forms["registration"]["user_name"].value;
  if (x == "" || x == null) {
    alert("Plese fill out the form!");
    return false;
  } else {
    document.getElementById("output").innerHTML = "<h2>Congrats, you've registered!</h2>";
  }
}