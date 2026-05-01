// ALL YOU JS GOES HERE

//Menu button to open and close the semester selector
const menuButton = document.querySelector('.menu_button');
const semester = document.querySelector('.semester_list');

function toggleSemester() {
    semester.classList.toggle('show');
    console.log('semester show up');
}

function toggleMenu() {
    menuButton.classList.toggle('change');
    console.log('menubutton clicked');
    toggleSemester();
}

//Event listener to close the semester selector when clicking
const semesterList = document.querySelectorAll('.semesterlink');

function closeSemester() {
    semester.classList.remove('show');
    menuButton.classList.remove('change');
    console.log('semester closed');
}

//loop through each semester link and add event listener to close the semester selector when clicking

semesterList.forEach(link => {
    link.addEventListener('click', closeSemester);
});


//Color setting function
//primary color changer
const setPrimaryColor = (color) => {
    document.documentElement.style.setProperty('--primary-color', color);
};

//secondary color changer
const setSecondaryColor = (color) => {
    document.documentElement.style.setProperty('--secondary-color', color);
};

//Tertiary color changer
const setTertiaryColor = (color) => {
    document.documentElement.style.setProperty('--tertiary-color', color);
};

//Section color changer
const setSectionColorEven = (color) => {
    document.documentElement.style.setProperty('--section-color-even', color);
};

const setSectionColorOdd = (color) => {
    document.documentElement.style.setProperty('--section-color-odd', color);
};

//Primary text color changer
const setPrimaryTextColor = (color) => {
    document.documentElement.style.setProperty('--primary-text-color', color);
};

//symbol color changer
const setSymbolColor = (color) => {
    document.documentElement.style.setProperty('--symbol-color', color);
};

let isDarkMode = false;

//variable for light and dark mode toggle
let PrimaryColorDark = "#473536";
let SecondaryColorDark = "#0a0708";
let TertiaryColorDark = "#747c71";
let SectionColorDarkEven = "#473536";
let SectionColorDarkOdd = "#0a0708";
let PrimaryTextColorDark = "#f0f0f0";
let SymbolColorDark = "#d2d2c8";

let PrimaryColorLight = "#ffbf91";
let SecondaryColorLight = "#ff8731";
let TertiaryColorLight = "#ffb7ac";
let SectionColorLightEven = "#fff1e2";
let SectionColorLightOdd = "#f0f0f0";
let PrimaryTextColorLight = "#0e0d0d";
let SymbolColorLight = "#ff6b00";


//Light and dark mode toggle
function lightDarkMode() {
    if (!isDarkMode) {
        setPrimaryColor(PrimaryColorDark);
        setSecondaryColor(SecondaryColorDark);
        setTertiaryColor(TertiaryColorDark);
        setSectionColorEven(SectionColorDarkEven);
        setSectionColorOdd(SectionColorDarkOdd);
        setPrimaryTextColor(PrimaryTextColorDark);
        setSymbolColor(SymbolColorDark);
        console.log('dark background set');
        isDarkMode = true;
    }

    else {
        setPrimaryColor(PrimaryColorLight);
        setSecondaryColor(SecondaryColorLight);
        setTertiaryColor(TertiaryColorLight);
        setSectionColorEven(SectionColorLightEven);
        setSectionColorOdd(SectionColorLightOdd);
        setPrimaryTextColor(PrimaryTextColorLight);
        setSymbolColor(SymbolColorLight);
        isDarkMode = false;
        console.log('light background set');
    }
}

//Javascript to show and hide light and dark mode button
const dayToNightButton = document.querySelector('.day_to_night');
const nightToDayButton = document.querySelector('.night_to_day');

function toggleSunMoon() {
    dayToNightButton.classList.toggle('dayshow');
    nightToDayButton.classList.toggle('nighthide');
    console.log('sun and moon toggled');
}

//change light/dark mode according to time
const currentHour = new Date();

if (currentHour.getHours() >= 18 || currentHour.getHours() < 6) {
    toggleSunMoon();
    lightDarkMode();
    console.log('time change');


}

//scroll event for the light/dark mode button

//recording current scroll position, but divide by 2 to make the button appear after scrolling half of the screen height
const ScrollPos = window.scrollY / 2;

window.addEventListener('scroll', () => {


    if (window.scrollY > ScrollPos) {
        dayToNightButton.classList.add('buttonfixed');
        nightToDayButton.classList.add('buttonfixed');
    }
    else {
        dayToNightButton.classList.remove('buttonfixed');
        nightToDayButton.classList.remove('buttonfixed');
    }
});

//Gist FAQ section
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector("#accordion-icon");

    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector("#accordion-icon");

            c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
            ic.classList.toggle("ri-add-line", i !== index || !isOpen);
            ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
        });
    });
});

gsap.registerPlugin(CustomEase, CustomWiggle, Physics2DPlugin);
CustomWiggle.create("wiggle", { wiggles: 8, type: "anticipate" });

const symbol = document.querySelector(".cta_symbol");
const images = document.querySelectorAll(".flair img");

function expand(){
    gsap.killTweensOf(symbol);
    gsap.to(symbol, {
    duration: 0.3,
    rotation: 8,
    x: 8,
    y: 8,
    scale: 1.5,
    transformOrigin: "center center",
    ease: "power2.out"
  });
}

function collapse(){
    gsap.killTweensOf(symbol);

    // reset symbol
    gsap.set(symbol, {
        duration: 0.3,
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        transformOrigin: "center center",
        ease: "power2.out"
    });
}

function boom() {
  
  const angleSpread = Math.PI * 2;
  const distance = 350;

  // stop previous animations
  gsap.killTweensOf(images);
  gsap.killTweensOf(symbol);


    // pop + wiggle, then return to hover state or normal state
  gsap.fromTo(
    symbol,
    {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1
    },
    {
      duration: 1.5,
      rotation: 8,
      x: 8,
      y: 8,
      scale: 0.7,
      transformOrigin: "center center",
      ease: "wiggle",
      onComplete: () => {
        if (symbol.matches(":hover")) {
          expand();
        } else {
          collapse();
        }
      }
    }
  );

  gsap.set(".flair", { opacity: 1 });

  images.forEach((img) => {
    // reset each particle to a clean starting point
    gsap.set(img, {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 0,
      rotation: 0
    });

    const angle = Math.random() * angleSpread;
    const speed = gsap.utils.mapRange(0, 500, 0.3, 1.5, distance);
    const velocity = gsap.utils.random(500, 1000) * speed;

    gsap.timeline()
      .to(img, {
        scale: 1,
        duration: 0.15
      })
      .to(img, {
        physics2D: {
          angle: angle * 180 / Math.PI,
          velocity: velocity,
          gravity: 800
        },
        rotation: gsap.utils.random(-180, 180),
        duration: 1.5
      }, 0)
      .to(img, {
        opacity: 0,
        scale: gsap.utils.random(0.6, 1),
        duration: 0.25,
        ease: "power1.out",
        onComplete: () => {
          gsap.set(img, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0,
            rotation: 0
          });
        }
      }, 1.1);
  });
  
}

symbol.addEventListener("mouseenter", expand);
symbol.addEventListener("mouseleave", collapse);
symbol.addEventListener("click", boom);