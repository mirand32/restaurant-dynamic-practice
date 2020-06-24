const createDiv = (item, price) =>{
    const element = document.createElement("div")
    element.classList.add("menu-item")
    element.innerHTML=`${item}:$${price}`
    content.appendChild(element)
}

const content=document.querySelector("#content")
createDiv("dumplings", 3.00)
createDiv("chicken", 4.00)

const menu = {
    "starters":[
        {img,name,description,price}
    ],
    "mains":[],
    "desserts":[],
    "drinks":[]
}