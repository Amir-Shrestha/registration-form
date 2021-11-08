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
    console.log("hihi")
    // console.log(getHobbies)
    for (var hobby of getHobbies) {
      if (hobby.checked)
      hobbies += hobby.value+", ";
    }
    // console.log(document.getElementById("other_hobbies").value)
    if(document.getElementById("other_hobbies").value != null){
      hobbies += document.getElementById("other_hobbies").value
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



