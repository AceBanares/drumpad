window.addEventListener("keydown", playSound);

function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);

  if (!sound) return;
  
  if (!key.classList.contains("press")) {
    key.classList.add("press");
  } else {
    key.classList.remove("press");
  }

  sound.currentTime = 0;
  sound.play();
}

const keys = [...document.querySelectorAll(".sound")];

keys.map(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  e.target.classList.remove("press");
}
