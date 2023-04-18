/* const navLinks = document.querySelectorAll("#user-interaction");
console.log(navLinks);
const hoveredLink = document.querySelector("#hovered-user");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    const name = link.getAttribute("data-name");
    if (name) {
      hoveredLink.textContent = link.textContent;
    }
  });
  link.addEventListener("mouseout", () => {
    hoveredLink.textContent = " ";
  });
});
 */

/* Navbar */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  //   console.log(scrollY);
  if (scrollY >= 110) {
    header.classList.add("bg-zinc-100");
  } else {
    header.classList.remove("bg-zinc-100");
  }
});

