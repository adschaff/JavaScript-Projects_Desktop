function validateForm() {
    let x = document.forms["Test_Form"]["email"].value;
    if (x == "") {
      alert("EMAIL IS REQUIRED");
      return false;
    }
  }