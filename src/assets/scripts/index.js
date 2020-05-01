import '../styles/main.scss';

//----Menu----//
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navSlide = () => {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
  });
};

navSlide();

// Contact Form Red Border

$(function () {
  $('#myform').submit(function () {
    var valid = 0;
    $(this)
      .find('input[type=text], textarea[name=message]')
      .each(function () {
        if ($(this).val() != '') {
          valid++;
          $(this).css('border-color', 'initial');
        } else {
          $(this).css('border-color', 'red');
        }
      });

    if (valid > 0) {
      return true;
    } else {
      return false;
    }
  });
});

//---- Observer ----//
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -200px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

//---- Image Slide In ----//

document.querySelectorAll('.appearanim01').forEach((slider) => {
  appearOnScroll.observe(slider);
});

//---- Fade In ----//

document.querySelectorAll('.fadeinanim01').forEach((fade01) => {
  appearOnScroll.observe(fade01);
});

//----Menu Scroll----//
const scrollBehavior02 = 'smooth';

document.getElementById(
  'nav-link-about-me'
).onclick = function scrollAboutMe() {
  document
    .getElementById('title06')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

document.getElementById('nav-link-focus').onclick = function scrollWork() {
  document
    .getElementById('title03')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

document.getElementById('nav-link-contact').onclick = function scrollContact() {
  document
    .getElementById('title05')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

function scrollBehaviorMenu() {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('burger-active');
}

//----Arrow Click Scroll----//

document.getElementById('scroll-arrow').onclick = function scrollNext01() {
  document
    .getElementById('title03')
    .scrollIntoView({ behavior: scrollBehavior02 });
};
