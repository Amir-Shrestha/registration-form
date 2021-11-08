function displayFormData()
{

  //1.fetech data filled in form
  var naam = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var about = document.getElementById("about").value;
  var gender = genderCheck();
  var hobbies = hobbiesCheck();
  var level = educationCheck();

  function genderCheck()
  {
    var getGender = document.querySelector('input[name="gender"]:checked');
    if(getGender != null) {
        return getGender.value;
    }
  }

  // function genderCheck()
  // {
  //   var getGender = document.getElementsByName("gender");
  //   if(getGender != null) {
  //       // return typeof(getGender);
  //       // return getGender;
  //       // return getGender[0];
  //       // return typeof(getGender[0]);
  //       return getGender[0].value;
  //       // return typeof(getGender).value;
  //   }
  // }

  function hobbiesCheck()
  {
    var hobbies = ""
    var getHobbies = document.getElementsByName("hobbies");
    for (var hobby of getHobbies) {
      if (hobby.checked)
      hobbies += hobby.value+", ";
    }
    return hobbies
  }

  function educationCheck()
  {
    var education_select = document.getElementById("level"); //education_select var holds the <select> element
    var level = education_select.options[education_select.selectedIndex].text; //education var holds the value of the selected option tag
    var level = education_select.options[education_select.selectedIndex].value; //education var holds the value of the selected option tag
    return level;
  }


  //2.Form Validation
  formValidate(naam, address, phone, about, gender, hobbies, level);


  //3. passed fetched form data to DetialForm
  document.getElementById("name_output").innerHTML=naam;
  document.getElementById("address_output").innerHTML=address;
  document.getElementById("phone_output").innerHTML=phone;
  document.getElementById("gender_output").innerHTML=gender;
  document.getElementById("hobbiese_output").innerHTML=hobbies;
  document.getElementById("education_output").innerHTML=level;
  document.getElementById("about_output").innerHTML=about;
  return false;
}






//3.1 Form Validation Fucntion
function formValidate(naam, address, phone, about, gender, hobbies, level)
  {
    // var message = {name_error:"Name is required.", address_error:"Address is required.", phone_error:"Phone number is required.", about_error:"About Yourself is required.", gender_error:"Gender is required.", hobbies_error:"Hobbies number is required.", level_error:"Level number is required.", };
    var messages = ["Name is required.", "Address is required.", "Phone number is required.", "About Yourself is required.", "Gender is required.", "Hobbies number is required.", "Level number is required."];
    var conditions = [naam == "", address == "", phone == "", about == "", gender == undefined, hobbies == "", level == ""]
    var error_paragrapghs = ["name_err", "address_err", "phone_err", "about_err", "gender_err", "hobbies_err", "level_err"]
    // error = 0;

    for (let i = 0; i < 7; i++) {
      if (conditions[i])
      {
        document.getElementById(error_paragrapghs[i]).innerHTML=messages[i];
        // error = 1;
      }
      else{
        document.getElementById(error_paragrapghs[i]).innerHTML="";
      }
    }

    // if (naam == "" || address == "" || phone == "" || about == "" || gender == ""|| hobbies == "" || level == ""){
    //   error = 1;
    //   return false;
    // }
  }

//Reset
function clearAll()
{
  var error_para = document.getElementsByClassName("errorpara");
  for (var error of error_para) {
    error.innerHTML = " ";
  }
}