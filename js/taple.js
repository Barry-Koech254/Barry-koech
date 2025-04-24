
      /*================= to display tablinks content ===============*/
      var tablinks = document.querySelectorAll(".tab-links");
      var tabcontents = document.querySelectorAll(".tab-contents");

      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        document
          .querySelector("[onclick=\"opentab('" + tabname + "')\"]")
          .classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }

      // Initially, display the "Skills" tab when the page loads
      opentab("skills");
    
/*================= to display the icons titles to the right ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".social-icons a");

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseover", (event) => {
      const title = event.target.getAttribute("data-title");
      if (title) {
        const tooltip = document.createElement("spans");
        tooltip.className = "tooltip";
        tooltip.textContent = title;
        event.target.appendChild(tooltip);
        tooltip.style.left = "5rem"; // Adjust the desired position
      }
    });

    icon.addEventListener("mouseout", (event) => {
      const tooltip = event.target.querySelector(".tooltip");
      if (tooltip) {
        tooltip.remove();
      }
    });
  });
});

// Logo image design

const logo = document.querySelector('.logo-img');
const floatingLogo = document.getElementById('floating-big-logo');

logo.addEventListener('mouseenter', () => {
  floatingLogo.style.display = 'block';
});

logo.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!floatingLogo.matches(':hover')) {
      floatingLogo.style.display = 'none';
    }
  }, 200);
});

floatingLogo.addEventListener('mouseleave', () => {
  floatingLogo.style.display = 'none';
});

