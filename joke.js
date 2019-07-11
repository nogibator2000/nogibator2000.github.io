const curtains = Array.from(document.getElementsByClassName("face-bar"));
window.addEventListener("click", function(){
    curtains.forEach(bar => {
      bar.classList.add("shut");
             bar.classList.remove("open");
    window.setTimeout(function() {
    window.setTimeout(function() {
  location = location;},600);
    },1400);
    });

});
curtains.forEach(bar => {
      bar.classList.add("open");
             bar.classList.remove("shut");
    });