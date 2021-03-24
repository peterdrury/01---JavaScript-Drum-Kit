let keys = Array.from(document.querySelectorAll(".key"));

keys.map((e) => {
  e.addEventListener("transitionend", () => {
    e.classList.remove("playing");
  });
});

document.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //stop function from running  all together
  audio.currentTime = 0; //Rewind to start
  audio.play();
  key.classList.add("playing");
});
