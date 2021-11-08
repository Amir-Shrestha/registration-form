function submitForm()
{

  //1.fetech data filled in form
  const params = {
    name : document.getElementById("name").value,
    address : document.getElementById("address").value,
    phone : document.getElementById("phone").value,
    about : document.getElementById("about").value,
    gender : genderCheck(),
    hobbies : hobbiesCheck(),
    level : educationCheck()
  }

  function genderCheck()
  {
    var getGender = document.querySelector('input[name="gender"]:checked');
    if(getGender != null) {
        return getGender.value;
    }
  }

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
  formValidate(params)
  document.getElementById("name_output").innerHTML=params.name;
  document.getElementById("address_output").innerHTML=params.address;
  document.getElementById("phone_output").innerHTML=params.phone;
  document.getElementById("gender_output").innerHTML=params.gender;
  document.getElementById("hobbiese_output").innerHTML=params.hobbies;
  document.getElementById("education_output").innerHTML=params.level;
  document.getElementById("about_output").innerHTML=params.about;

  return false;


}






//3.1 Form Validation Fucntion
function formValidate(params)
  {
    error = 0;
    for (const property in params)
    {
      // console.log(params[property].length)
      // console.log("123$.''[[]35".match(/^[a-zA-Z_\s]+$/))
      // console.log(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(params[property]))
      if (params[property] == "" || params[property] == undefined)
      {
        document.getElementById(property+'_err').innerHTML= property +" is required.";
        // error = 1;
      }
      else if( property=="name" && params[property].length<5 )
      {
        document.getElementById(property+'_err').innerHTML= 'Name should have atleast contain 5 charracters!';
        // error = 1;
      }
      else if( property=="name" && /[1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(params[property]) )
      {
        document.getElementById(property+'_err').innerHTML= 'Symbol and Number are not valid inputs.';
        // error = 1;
      }
      else if( property=="address" && params[property].length<5 )
      {
        document.getElementById(property+'_err').innerHTML= 'Address should have atleast contain 5 charracters!';
        // error = 1;
      }
      else
      {
        document.getElementById(property+'_err').innerHTML="";
      }
    }
    // if(error == 1)
    // {
    //   return false
    // }
    // else
    // {
    //   return true
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