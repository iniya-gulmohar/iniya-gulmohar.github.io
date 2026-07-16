document.getElementById("about")?.addEventListener("click", function() {
  this.classList.toggle("expanded");
});

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#about") {
    document.getElementById("about")?.classList.add("expanded");
  }
});
