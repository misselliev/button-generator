function getColor() {
  return "#" + Math.random().toString().substr(-6);
}

function getFont() {
  const fonts = ['Roboto', 'Lato', 'Oswald', 'Nunito', 'Dosis', 'Josefin Sans', 'Karla'];
  return "'" + fonts[Math.floor(Math.random() * fonts.length)] + "', sans-serif";
}

function getWidth() {
  return Math.floor(Math.random() * (500 - 200) + 200);
}

function getHeight() {
  return Math.floor(Math.random() * (100 - 50) + 50);
}

function getFontSize() {
  return Math.floor(Math.random() * (30 - 15) + 15);
}
function createBtn() {
  const btn = document.getElementById('show');
  const backgroundColor = getColor();
  const fontColor = getColor();
  const font = getFont();
  const fontSize = getFontSize() + "px";
  const btnWidth = getWidth() + "px";
  const btnHeight = getHeight() + "px";
  const btnBorder = getFontSize() + "px";
  btn.style.backgroundColor = backgroundColor;
  btn.style.color = fontColor;
  btn.style.fontFamily = font;
  btn.style.fontSize = fontSize;
  btn.style.width = btnWidth;
  btn.style.height = btnHeight;
  btn.style.borderRadius = btnBorder;
  btn.innerHTML = "Hi! I'm your button";

  getBtnStyle = () => {
    document.getElementById('code').innerHTML = "width: " + btnWidth + ", height: " + btnHeight + ", font-family: " + font + ", font-size: " + fontSize + ", border-radius: " + btnBorder + ", background-color: " + backgroundColor + ", color: " + fontColor;
  }

  getBtnStyle();
}

