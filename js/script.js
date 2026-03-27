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