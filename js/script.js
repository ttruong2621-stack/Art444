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
let SectionColorLightEven = "#ffbf91";
let SectionColorLightOdd = "#f0f0f0";
let PrimaryTextColorLight = "#0e0d0d";
let SymbolColorLight = "#ff6b00";


//Light and dark mode toggle
function lightDarkMode() {
    if(!isDarkMode){
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
        
    else{
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

function toggleSunMoon(){
    dayToNightButton.classList.toggle('dayshow');
    nightToDayButton.classList.toggle('nighthide');
    console.log('sun and moon toggled');
}

//change light/dark mode according to time
const currentHour = new Date();

if (currentHour.getHours() >= 18){
    toggleSunMoon();
    lightDarkMode();  
    console.log('time change');
      
        
}

//scroll event for the light/dark mode button

//recording current scroll position, but divide by 2 to make the button appear after scrolling half of the screen height
const ScrollPos= window.scrollY / 2;

window.addEventListener('scroll', () => {


    if(window.scrollY > ScrollPos){
        dayToNightButton.classList.add('buttonfixed');
        nightToDayButton.classList.add('buttonfixed');
    }
    else{
        dayToNightButton.classList.remove('buttonfixed');
        nightToDayButton.classList.remove('buttonfixed');
    }
});

