//smoothScroll
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  //Disable Right Click
  function disableRightClick(event) {
      event.preventDefault();
    }
    document.addEventListener("contextmenu", disableRightClick);
//scroll color change
    document.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector('.header');

        function handleScroll() {
            if (window.scrollY > 0) {
                header.classList.add('colored');
                header.classList.remove('transparent');
            } else {
                header.classList.add('transparent');
                header.classList.remove('colored');
            }
        }

        // Initial check on page load
        handleScroll();

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);
    });
    document.addEventListener("keydown", function(event) {
        // Check if Ctrl and F12 are pressed
        if (event.key === "F12") {
            // Prevent the default behavior
            event.preventDefault();
            // Optionally, you can display a message to inform the user
            console.log("F12 is disabled.");
        }
    });