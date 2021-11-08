function submitForm() {
  const params = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    about: document.getElementById("about").value,
    gender: genderCheck(),
    hobbies: hobbiesCheck(),
    level: educationCheck(),
  };

  function genderCheck() {
    var getGender = document.querySelector('input[name="gender"]:checked');
    if (getGender != null) {
      return getGender.value;
    }
  }

  function hobbiesCheck() {
    var hobbies = "";
    var getHobbies = document.getElementsByName("hobbies");
    for (var hobby of getHobbies) {
      if (hobby.checked) hobbies += hobby.value + ", ";
    }
    return hobbies;
  }

  function educationCheck() {
    var education_select = document.getElementById("level"); //education_select var holds the <select> element
    var level = education_select.options[education_select.selectedIndex].text; //education var holds the value of the selected option tag
    var level = education_select.options[education_select.selectedIndex].value; //education var holds the value of the selected option tag
    return level;
  }

  //2.Form Validation
  let errorCheck = formValidate(params);

  //3. passed fetched form data to DetialForm
  document.getElementById("name_output").innerHTML = params.name;
  document.getElementById("address_output").innerHTML = params.address;
  document.getElementById("phone_output").innerHTML = params.phone;
  document.getElementById("gender_output").innerHTML = params.gender;
  document.getElementById("hobbiese_output").innerHTML = params.hobbies;
  document.getElementById("education_output").innerHTML = params.level;
  document.getElementById("about_output").innerHTML = params.about;

  // let error_para = document.getElementsByClassName("errorpara");
  // for(para in error_para)
  // {
  //   console.log(para[0])
  // }
  console.log(errorCheck)
  if(errorCheck == false)
  {
    document.getElementById("form-detial").style.display = "block";
  }

  return false;
}


//3.1 Form Validation Fucntion
function formValidate(params)
{
  let req_error = false;
  let min_error = false;
  let symbol_error = false;
  let phone_error = false;
  // console.log("Hi, I am form validation")
  for (const property in params)
  {
    // console.log("Hi, I am loop in form validation")
    //required error - empty field validation
    if (params[property] == "" || params[property] == undefined)
    {
      document.getElementById(property + "_err").innerHTML = property + " is required.";
      req_error = true;
    }
    else
    {
      // clear error paragraph
      document.getElementById(property + "_err").innerHTML = "";
      req_error = false;

      //minlength error - should contain atleast 5 character
      if ( (property == "name" || property == "address") &&  params[property].length < 5 )
      {
        if (property == "name")
        {
          document.getElementById(property + "_err").innerHTML = "Name should have atleast contain 5 charracters!";
          min_error = true;
        }
        else
        {
          document.getElementById(property + "_err").innerHTML = "Address should have atleast contain 5 charracters!";
          min_error = true;
        }
      }

      //number_&_specialcharater error - should not contain number_&_specialcharater.
      if ( property == "name" && /[1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(params[property]) )
      {
        document.getElementById(property + "_err_min").innerHTML = "Symbol and Number are not valid inputs.";
        symbol_error = true;
      }

      //minlength error - phone should contain atleast 10 character
      if ( property == "phone" &&  params[property].length < 10 )
      {
        document.getElementById(property + "_err").innerHTML = "Phone should have 10 numbers !";
        phone_error = true;
      }
    }
  }
  // console.log(req_error, min_error, symbol_error, phone_error)
  if(req_error == true || min_error == true || symbol_error == true || phone_error == true){
    return true;
  }
  else
  {
    return false;
  }

}

//Reset
function clearAll() {
  var error_para = document.getElementsByClassName("errorpara");
  for (var error of error_para) {
    error.innerHTML = " ";
  }
}
