function events_dialog(input) {
  const container = document.getElementById("events-dialogue-container");
  const text = document.getElementById("events-dialogue-text");
  const box = document.getElementById("events-dialogue-box")

  container.style.display = "flex";
  container.style.opacity = "1"

  setTimeout(() =>
    box.style.transform = "translateY(0vh)", 500);

  text.innerHTML = input.desc;
  document.body.style.overflow = "hidden"
}

function close_events() {
  const container = document.getElementById("events-dialogue-container");
  const text = document.getElementById("events-dialogue-text");
  const box = document.getElementById("events-dialogue-box")

  container.style.opacity = "0";
  container.style.backdropFilterY = "blur(0px)";

  setTimeout(() => {
    const width = document.documentElement.clientWidth
    box.style.transform = width > 600 ? "translateY(-100vh)" : "";
    container.style.display = "none";
  }, 100);

  document.body.style.overflowY = "scroll"
}
