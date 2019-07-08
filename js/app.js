/* On mouse over of a nav link add class 'active'
Then remove class 'active' on mouse off*/
$("header nav ul li a").hover(
    function(){ $(this).addClass('active') },
    function(){ $(this).removeClass('active') }
)

/* Toggle between showing and hiding the navigation menu 
links when the user clicks on the hamburger menu / bar icon */
let menu = document.getElementById("nav");
hamburger = () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

/* Hide and show nav links spending on view */
$(window).resize(function(){
    if ($(window).width() >= 870) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})

// Expand and collapse experience page sections
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(element) {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let car = $(this).children(":first");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      car.removeClass("arrow-down");
      car.addClass("arrow-left");
    } else {
      panel.style.display = "block";
      car.removeClass("arrow-left");
      car.addClass("arrow-down");
    }
  });
}

  