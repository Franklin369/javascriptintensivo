function Togglemenu() {
  const menuToggle = document.querySelector(".menuToggle");
  menuToggle.classList.toggle("active");
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}
function ImgSlider(parametros){
    document.getElementById("slider").src=parametros;
}
