const menuButton = document.getElementById("menu-button");
const menuButtonIcon = menuButton.querySelector("i");

const sidebarContainer = document.getElementById("sidebar-container");
const sidebar = document.querySelector(".sidebar");

menuButton.onclick = () => {
  const isOpen = menuButtonIcon.classList.contains("fa-bars-staggered");
  const icons = document.querySelectorAll(".icon");
  const iconTitles = document.querySelectorAll(".icon > span");

  if (isOpen) {
    // Closing
    menuButtonIcon.classList.replace("fa-bars-staggered", "fa-bars");

    sidebarContainer.style.width = "5%";

    iconTitles.forEach((title) => {
      title.style.display = isOpen ? "none" : "inline";
    });

    setTimeout(() => {
      icons.forEach((icon) => {
        icon.style.margin = "0 auto";
      });
    }, 300);
  } else {
    // Opening
    menuButtonIcon.classList.replace("fa-bars", "fa-bars-staggered");

    sidebarContainer.style.width = "15%";
    icons.forEach((icon) => {
      icon.style.margin = "0";
    });

    setTimeout(() => {
      iconTitles.forEach((title) => {
        title.style.display = isOpen ? "none" : "inline";
      });
    }, 300);
  }
};

// const iconButtons = document.querySelectorAll(".icon:not(:nth-child(1))");

// iconButtons.forEach((button) => {
//   button.onclick = () => {
//     if (!button.classList.contains("selected")) {
//       iconButtons.forEach((innerButtons) => {
//         if (innerButtons.classList.contains("selected"))
//           innerButtons.classList.remove("selected");
//       });

//       button.classList.add("selected");
//     }
//   };
// });

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);

