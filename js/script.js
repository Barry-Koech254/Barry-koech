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

  let progressBar = document.getElementById('progress-bar');
  
  // Calculate the height of the page and how much has been scrolled
  let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPosition = window.scrollY;

  // Calculate the width of the progress bar as a percentage
  let scrollPercentage = (scrollPosition / pageHeight) * 100;
  
  // Set the progress bar width
  progressBar.style.width = scrollPercentage + '%';

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

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*================= typed js ===============*/
const typed = new Typed('.multible-text', {
    strings: ['Software Engineer','Web Developer','Frontend Developer', 'Networking Technician', 'Backend Developer', 'Backend Intergrator', 'YouTuber' ],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 2000,
    loop: true
});

/*================= Send message js =============*/
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "barrykoech254@gmail.com",
        Password: ".....",
        To: "barrykoech254@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body:
            "Name: " +
            document.getElementById("name").value +
            "<br> Email: " +
            document.getElementById("email").value +
            "<br> Mobile Number: " +
            document.getElementById("phone").value +
            "<br> Subject: " +
            document.getElementById("subject").value +
            "<br> Message: " +
            document.getElementById("message").value,
        }).then((message) =>
          alert("Your Message Sent Successfully")
        );
      }

      /*================= Read more =============
      function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
        var paragraph = document.getElementById("paragragh");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          paragraph.style.display = "inline";
          btnText.innerHTML = "Read More"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read Less"; 
          moreText.style.display = "inline";
          paragraph.style.display = "none";
        }
      }
      */

      function clickingShow(event) {
        var human = window.confirm("Please confirm you are human!");
     
        if (human) {
          window.alert("Welcome! to our website");
          return true;  // Allows the link to be followed
        } else {
          window.alert("You cannot visit here unless you are a human.");
          event.preventDefault();  // Prevents the link from being followed
          return false; // Ensures no further action is taken
        }
     }

//      // Get the currentyear
// const year = new Date().getFullYear();
  
// // Set the year in the footer
// document.getElementById("year").textContent = year;

// // Get the last modified date of the document
// const lastModified = new Date(document.lastModified);

// // Format the date (for example: October 7, 2024, 08:45 AM)
// const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
// const formattedDate = lastModified.toLocaleDateString('en-US', options);

// // Set the last updated date in the footer
// document.getElementById("last-updated").textContent = formattedDate;

// List of emojis
const emojis = ["💖", "💥", "🥰", "🐇", "🌹", "✨", "🦄", "💞"];
let currentIndex = 0;

// Function to change the emoji every 500 milliseconds (0.5 seconds)
setInterval(() => {
    // Update the emoji content
    document.getElementById("emoji").innerHTML = emojis[currentIndex];
    // Move to the next emoji in the list, loop back if needed
    currentIndex = (currentIndex + 1) % emojis.length;
}, 1000);  // Change emoji every 500 milliseconds


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

