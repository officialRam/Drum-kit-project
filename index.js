var a = document.querySelectorAll(".drum");
for (var i = 0; i < a.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);
    
  });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(buttonHtml){
    switch (buttonHtml) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
        
          break;
        case "a":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
         
          break;
        case "s":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          
          break;
        case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          
          break;
        case "j":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          
          break;
        case "k":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          
          break;
        case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          
          break;
    }
}
function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   activeButton.style.color="white";
   setTimeout(function(){
    activeButton.classList.remove("pressed");
    activeButton.style.removeProperty("color");
   }, 100);
}
