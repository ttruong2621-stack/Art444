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


//Light and dark mode toggle
function lightDarkMode() {
    setPrimaryColor();
    setSecondaryColor();
    setTertiaryColor();
    setSectionColor();
    setPrimaryTextColor();
    console.log('dark background set');
}