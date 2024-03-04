/*================= toggle icons navbar ===============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*================= scroll sections actve links ===============*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if( top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id+"]").classList.add("active");
            });
        };
    });
    /*================= sticky navbar ===============*/
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    /*================= remove toggle icons and navbar when click navbar link (scroll) ===============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================= scroll reveal ===============*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero, .heading, skills h2, .card-four', { origin: 'top' });
ScrollReveal().reveal('.study-img, .contact form, .card-seven', { origin: 'bottom' });
ScrollReveal().reveal('.hero h1, .card-one, .card-six', { origin: 'left' });
ScrollReveal().reveal('.hero p, .card-two, .card-five', { origin: 'right' });


/*================= typed js ===============*/
const typed = new Typed('.multible-words', {
    strings: ['South Eastern Kenya University', 'St. Gabriels High School', 'Timoo Primary School'],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 2000,
    loop: true
});

/*================= skills js ===============*/


var flipCheck = 0;

function rotateCards() {
  if (flipCheck === 0) {
    document.getElementById("front-2").classList.add("showGreen");
    document.getElementById("back-2").classList.add("showRed");

    document.getElementById("front-1").classList.add("showGreen");
    document.getElementById("back-1").classList.add("showRed");

    flipCheck = 1;

    setTimeout(function () {
      document.getElementById("front-4").classList.add("showGreen");
      document.getElementById("back-4").classList.add("showRed");

      document.getElementById("front-3").classList.add("showGreen");
      document.getElementById("back-3").classList.add("showRed");

      document.getElementById("front-5").classList.add("showGreen");
      document.getElementById("back-5").classList.add("showRed");

      setTimeout(function () {
        document.getElementById("front-6").classList.add("showGreen");
        document.getElementById("back-6").classList.add("showRed");

        document.getElementById("front-7").classList.add("showGreen");
        document.getElementById("back-7").classList.add("showRed");
      }, 500);
    }, 500);
  } else {
    document.getElementById("front-2").classList.remove("showGreen");
    document.getElementById("back-2").classList.remove("showRed");

    document.getElementById("front-1").classList.remove("showGreen");
    document.getElementById("back-1").classList.remove("showRed");

    flipCheck = 0;

    setTimeout(function () {
      document.getElementById("front-3").classList.remove("showGreen");
      document.getElementById("back-3").classList.remove("showRed");

      document.getElementById("front-4").classList.remove("showGreen");
      document.getElementById("back-4").classList.remove("showRed");

      document.getElementById("front-5").classList.remove("showGreen");
      document.getElementById("back-5").classList.remove("showRed");

      setTimeout(function () {
        document.getElementById("front-7").classList.remove("showGreen");
        document.getElementById("back-7").classList.remove("showRed");

        document.getElementById("front-6").classList.remove("showGreen");
        document.getElementById("back-6").classList.remove("showRed");
      }, 500);
    }, 500);
  }
}

setInterval(rotateCards, 3000);

/*================= Epxperience onclick ====================

function opentab(tabId) {
  // Get all tab contents and tab links
  var tabContents = document.getElementsByClassName("tab-contents");
  var tabLinks = document.getElementsByClassName("tab-links");

  // Hide all tab contents and remove the active-link class from all tab links
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    tabLinks[i].classList.remove("active-link");
  }

  // Show the selected tab content and add the active-link class to the clicked tab link
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
  var clickedTabLink = document.querySelector(
    "p[onclick='opentab(\"" + tabId + "\")']"
  );
  if (clickedTabLink) {
    clickedTabLink.classList.add("active-link");
  }
}

// Initially, display the "Skills" tab when the page loads
opentab("skills");
*/
