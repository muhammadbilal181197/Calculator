let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (items of buttons) {
  items.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    switch (buttonText) {
      case 'x':
          buttonText= "*"
        screenValue += buttonText;
        screen.value = screenValue;
        break;
      case 'AC':
        screenValue = "";
        screen.value = screenValue;
        break;
      case '=':
        screen.value=eval(screenValue)
        screenValue=screen.value;
        break;
     
      default:
          screenValue +=buttonText;
          screen.value =screenValue;
        break;
    }
  });
}

