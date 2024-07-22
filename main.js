document.querySelector(".header .links .icon").onclick = () => {
  document.querySelector(".header .links ul").classList.toggle("active");
};

document.querySelectorAll(".header .links ul li").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".header .links ul").classList.remove("active");
  });
});
