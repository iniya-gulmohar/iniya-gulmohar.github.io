document.getElementById("about")?.addEventListener("click", function() {
  this.classList.toggle("expanded");
});

document.querySelector('a[href="#about"]')?.addEventListener("click", function() {
  setTimeout(() => document.getElementById("about")?.classList.add("expanded"), 200);
});

document.querySelector('a[href="#footer"]')?.addEventListener("click", function() {
  setTimeout(() => {
    const el = document.getElementById("footer-copyright");
    el?.classList.add("highlighted");
    setTimeout(() => el?.classList.remove("highlighted"), 1500);
  }, 200);
});
