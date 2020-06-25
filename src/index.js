// imports
import menu from "./menu"
import generateMenuItem from "./generateMenuItem"
import "./main.scss";
// create variable for where content is placed
const content=document.querySelector("#content")

// update page on click
function updatePage(){
    // get id of button from navbar
    const id = this.attributes.for.value;
    // use id to find appropriate object of menu items
    const sectionArray=(menu[id])
    // set content to newly generated menu items
    content.innerHTML=generateMenuItem(sectionArray)
}

content.innerHTML=generateMenuItem(menu.starters)
// Make nav buttons clickable to generate content
const menuButtons = document.querySelectorAll(".nav--item")
menuButtons.forEach(button=>button.addEventListener("click", updatePage))