let currentSlide = 0;
let isTransitioning = false;

function changeSlide(slideNumber) {
  if (isTransitioning || slideNumber === currentSlide) return;

  isTransitioning = true;

  const quoteContainerInner = document.querySelector(".quote-container-inner");
  quoteContainerInner.classList.remove("fade-in");
  quoteContainerInner.classList.add("fade-out");

  setTimeout(() => {
    currentSlide = slideNumber;
    updateContent();
    quoteContainerInner.classList.remove("fade-out");
    quoteContainerInner.classList.add("fade-in");
    updateDots(); // Add this line to update dots after the slide change
  }, 300);

  setTimeout(() => {
    isTransitioning = false;
  }, 600); // Adjust this timeout based on your transition duration
}

function updateContent() {
  const quotes = [
    {
      heading: "Help inexperienced",
      description:
        "We are helping newbies. We will help, show and tell how RP works. No one will be left without attention.",
    },
    {
      heading: "High level RP",
      description:
        "Our administration is closely monitoring the proper level of Role Play.",
    },
    {
      heading: "Play as you like",
      description: "Large number of organizations: from medic to media worker.",
    },
  ];

  const currentQuote = quotes[currentSlide];
  const quoteHeading = document.querySelector(".quote-heading");
  const quoteDescription = document.querySelector(".quote-description");

  quoteHeading.textContent = currentQuote.heading;
  quoteDescription.textContent = currentQuote.description;
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

const dotButtons = document.querySelectorAll(".dot");
dotButtons.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(index);
  });
});

// Automatic slide change
setInterval(() => {
  changeSlide((currentSlide + 1) % 3);
}, 5000);


// Slider-conent
const sliderNavOne = document.querySelector(".slider-nav.one");
const sliderNavTwo = document.querySelector(".slider-nav.two");
const sliderContent = document.querySelector(".slider-content");
const sliderContents = document.querySelector(".slider-contents");

sliderNavOne.addEventListener("click", () => {
  sliderNavOne.classList.add("active");
  sliderNavTwo.classList.remove("active");

  sliderContents.classList.toggle('morph');

  sliderContent.innerHTML = `<div class="text-content" id="text-content">
  <p class="s-header" id="s-header">250+<br>DLC Cars</p>
  <p class="s-description" id="s-description">Cars for every taste and color await you. A huge variation of tuning, from the color and style of rims, to chip tuning.</p>
  </div>
  <div class="text-image-slider">
  <img src="./images/slider/slider-1.png" alt="250+ DLC Cars" />
  </div>`;
});

sliderNavTwo.addEventListener("click", () => {
  sliderNavOne.classList.remove("active");
  sliderNavTwo.classList.add("active");
  
  sliderContents.classList.toggle("morph");

  sliderContent.innerHTML = `<div class="text-content">
  <p class="s-header">Families</p>
  <p class="s-description">Create your own family and play however you want.You will enjoy a monthly family tournament among all players, business capture, family autopark and shared house.</p>
  </div>
  <div class="text-image-slider">
  <img src="./images/slider/slider-3.png" alt="250+ DLC Cars" />
  </div>`;
});



// tabs-link hide from browser searchbar
const links = document.querySelectorAll('.hide-href');
links.forEach((link) =>{
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState({}, '','');
  });
})
// tabs-hide-show
// li > a id
const tab_a_1 = document.getElementById('tab-ui-id-1');
const tab_a_2 = document.getElementById('tab-ui-id-2');
const tab_a_3 = document.getElementById('tab-ui-id-3');
const tab_a_4 = document.getElementById('tab-ui-id-4');
// li id
const tab_li_1 = document.getElementById('li-1');
const tab_li_2 = document.getElementById('li-2');
const tab_li_3 = document.getElementById('li-3');
const tab_li_4 = document.getElementById('li-4');
// tab-content-img
const tab_div_1 = document.getElementById('tab-id-1');
const tab_div_2 = document.getElementById('tab-id-2');
const tab_div_3 = document.getElementById('tab-id-3');
const tab_div_4 = document.getElementById('tab-id-4');


tab_li_1.addEventListener('click', () =>{
  tab_li_1.classList.add('active');
  tab_li_2.classList.remove('active');
  tab_li_3.classList.remove('active');
  tab_li_4.classList.remove('active');

  tab_a_1.classList.add('active');
  tab_a_2.classList.remove('active');
  tab_a_3.classList.remove('active');
  tab_a_4.classList.remove('active');

  tab_div_1.style.display="block";
  tab_div_2.style.display="none";
  tab_div_3.style.display="none";
  tab_div_4.style.display="none";
  
});

tab_li_2.addEventListener('click', () =>{
  tab_li_1.classList.remove('active');
  tab_li_2.classList.add('active');
  tab_li_3.classList.remove('active');
  tab_li_4.classList.remove('active');

  tab_a_1.classList.remove('active');
  tab_a_2.classList.add('active');
  tab_a_3.classList.remove('active');
  tab_a_4.classList.remove('active');

  tab_div_1.style.display="none";
  tab_div_2.style.display="block";
  tab_div_3.style.display="none";
  tab_div_4.style.display="none";
});

tab_li_3.addEventListener('click', () =>{
  tab_li_1.classList.remove('active');
  tab_li_2.classList.remove('active');
  tab_li_3.classList.add('active');
  tab_li_4.classList.remove('active');

  tab_a_1.classList.remove('active');
  tab_a_2.classList.remove('active');
  tab_a_3.classList.add('active');
  tab_a_4.classList.remove('active');

  tab_div_1.style.display="none";
  tab_div_2.style.display="none";
  tab_div_3.style.display="block";
  tab_div_4.style.display="none";
});

tab_li_4.addEventListener('click', () =>{
  tab_li_1.classList.remove('active');
  tab_li_2.classList.remove('active');
  tab_li_3.classList.remove('active');
  tab_li_4.classList.add('active');

  tab_a_1.classList.remove('active');
  tab_a_2.classList.remove('active');
  tab_a_3.classList.remove('active');
  tab_a_4.classList.add('active');

  tab_div_1.style.display="none";
  tab_div_2.style.display="none";
  tab_div_3.style.display="none";
  tab_div_4.style.display="block";
});

// register_button

const register_btn_1 = document.getElementById("btn_login");
const register_btn_2 = document.getElementById("start-game_1");
const register_btn_3 = document.getElementById("start-game_2");
const register_btn_4 = document.getElementById("start-game_3");