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
const setSectionColor = (color) => {
    document.documentElement.style.setProperty('--section-color', color);
};

//Primary text color changer
const setPrimaryTextColor = (color) => {
    document.documentElement.style.setProperty('--primary-text-color', color);
};

//symbol color changer
const setSymbolColor = (color) => {
    document.documentElement.style.setProperty('--symbol-color', color);
};

//variable for light and dark mode toggle
let PrimaryColorDark = "#000000";
let SecondaryColorDark;
let TertiaryColorDark = "#403d3d";
let SectionColorDark;
let PrimaryTextColorDark = "#fca538";
let SymbolColorDark = "#fca538";

let PrimaryColorLight;
let SecondaryColorLight;
let TertiaryColorLight;
let SectionColorLight;
let PrimaryTextColorLight;
let SymbolColorLight;


//Light and dark mode toggle
function lightDarkMode() {
    setPrimaryColor(PrimaryColorDark);
    setSecondaryColor();
    setTertiaryColor(TertiaryColorDark);
    setSectionColor();
    setPrimaryTextColor(PrimaryTextColorDark);
    setSymbolColor(SymbolColorDark);
    console.log('dark background set');
}