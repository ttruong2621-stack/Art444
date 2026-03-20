// ALL YOU JS GOES HERE

const menuButton = document.querySelector('.menu_button').classList;
const semester = document.querySelector('.semester_list').classList;
  


function toggleSemester() {
    semester.toggle('semester_vertical');
    console.log('semester show up');
}

function toggleMenu() {
    menuButton.toggle('change'); 
    console.log('menubutton clicked');
    toggleSemester();
}