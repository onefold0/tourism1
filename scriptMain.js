$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Dubai", "Mexico", "United States", "Australia", "China", "Gova", "Paris"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Mountain ", "Beach", "", "Water falls", "Park", "Island"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Mountain ", "Beach", "", "Water falls", "Park", "Island"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function signuppage() {
    window.location.href = "signUp.html";
    const namechage = document.querySelector(".signup");
    console.log(namechage.value);
}
function indexpage() {
    window.location.href = "index.html";
    alert("Please log in");
}


// localStorage get item
const url = JSON.parse(localStorage.getItem('url'));


// console.log(url);
url.forEach(itemm => {
    const name = JSON.parse(localStorage.getItem('name'));
    name.forEach(iteme => {
        const grturl = document.querySelector('.carousel');
        const div = document.createElement('div');
        div.className = "card";
        div.setAttribute("data-aos", "fade-right")
        div.innerHTML = `<div class="box">
    <img src=${itemm.image1} alt="">
    <div class="text">${iteme.namew}</div>
    </div>`

        grturl.appendChild(div);
        console.log(iteme.namew);
    });

});

// url.forEach(element => {
//     for (let i = 0; i < url.length; i++) {
//         let url = element[i];

//     }
//     let url = element;
// });

const url1 = JSON.parse(localStorage.getItem('url1'));


// console.log(url);
url1.forEach(item23 => {
    const name1 = JSON.parse(localStorage.getItem('name1'));
    name1.forEach(item12 => {
        const grturl1 = document.querySelector('.serv-content');
        const div = document.createElement('div');
        div.className = "card";
        div.setAttribute("data-aos", "fade-right")
        div.innerHTML = `<div class="box">
    <img src=${item23.image11} alt="">
    <div class="text">${item12.namew1}</div>
    </div>`

    grturl1.appendChild(div);
        console.log(iteme.namew);
    });

});


var btn = document.getElementById('submit');
btn.addEventListener('click',function(e){
  e.preventDefault()

  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var body = 'name:' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message; 
  Email.send({
Host : "smtp.elasticemail.com",
Username : "onefoldveera@gmail.com",
Password : "05F92EA06F2BD92A54EF063A820C06D6EC83",
From : 'example@example.com',
To : document.getElementById("email").value,
Subject : "New Signup!!!",
Body : "And this is the body"
}).then(
message => alert(message)
);
})
