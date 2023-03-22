function check () {
   
  
    // (C2) NAME
    field = document.getElementById("fname");
    error = document.getElementById("errfirst");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "Name must be 2-4 characters\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    // (C3) NUMBER
    field = document.getElementById("lname");
    error = document.getElementById("errlast");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "Num must be between 1-12\r\n";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    // (C4) RESULT
    return valid;
  }