const scrollButton = document.getElementById("scroll-button");
scrollButton.addEventListener("click", () => {
  // Animasi scroll ke bawah
  document.documentElement.style.scrollBehavior = "smooth";
  window.scrollBy(0, window.innerHeight);

  // Tandai tombol mouse sebagai "clicked"
  scrollButton.classList.add("clicked");
});
