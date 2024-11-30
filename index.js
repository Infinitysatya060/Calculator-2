let display = document.getElementById("inptbox");
let buttons = document.querySelectorAll("button");
let buttonArray = Array.from(buttons);

let string = "";
let memory = 0;
buttonArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    }

    else if (e.target.innerHTML == "DL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    }

    else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = "=" + string;
    }

      else {
        string += e.target.innerHTML;
        display.value = string;
      }

    })
  });


//keyboard input
document.addEventListener("keydown", (event) =>{
  if((event.key >=0 && event.key <= 9) || event.key=="."){
    string += event.key;
    display.value = string;
  }
  else if(event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
    if(string && !isNaN(string.slice(-1))){
      string += event.key;
    }
  }
  else if( event.key == 'Enter'){
    try{
      string = eval(string);
      display.value = "=" + string;
    }
    catch{
      display.value = "Error";
    }
  }
  else if(event.key == "Backspace"){
    string = string.substring(0,string.length-1);
    display.value= string;
  }
  else if(event.key == "Escape"){
    string  = "";
    display.value = string;
  }

  
});
