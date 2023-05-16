function w_by_name(city,idChanger,dc) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b14024757cc485a7a5afb00aca5f4a58`)
  .then(response => response.json())
  .then(data => {

    temp = data["main"]["temp"] - 273.15
    temp_fix= parseFloat(temp.toFixed(1)); ;
    if (dc == true){
      document.getElementById(idChanger).textContent = temp_fix +"  "+ data["name"];
        if (temp >= 30) {
          document.getElementById("userOutputIcon").src = "icons8-sun-48.png";
        }
        else{
          document.getElementById("userOutputIcon").src = "icons8-cold-48.png";
        }
      
      
    }else{
      document.getElementById(idChanger).textContent = temp_fix;

      if (city == "Jerusalem") {
        if (temp >= 30) {
          document.getElementById("jeruIcon").src = "icons8-sun-48.png";
        }
        else{
          document.getElementById("jeruIcon").src = "icons8-cold-48.png";
        }
      }

      if (city == "Tel Aviv") {
        if (temp >= 30) {
          document.getElementById("tel-avivIcon").src = "icons8-sun-48.png";
        }
        else{
          document.getElementById("tel-avivIcon").src = "icons8-cold-48.png";
        }
      }

      if (city == "New York") {
        if (temp >= 30) {
          document.getElementById("new-yorkIcon").src = "icons8-sun-48.png";
        }
        else{
          document.getElementById("new-yorkIcon").src = "icons8-cold-48.png";
        }
      }

    }
    
    console.log(data["name"])

  })
  .catch(error => {

    console.error('Error:', error);
  });
}

function display_citys() {
  w_by_name("Jerusalem","jeru")
  w_by_name("Tel Aviv","tel-aviv")
  w_by_name("New York","new-york")
}

function showButton() {
  document.getElementById("recommendedButton").classList.remove("hidden")
}
function hideButton() {
  document.getElementById("recommendedButton").classList.add("hidden")
}

function sendingUserInput() {
    userInput = document.getElementById("cityInput")
    w_by_name(userInput.value,"userOutput",true)
    showButton()
}

function autoRefresh() {
  display_citys()
  setInterval(display_citys,60000);
}

//On Start.. + Auto Refresh 
autoRefresh()

