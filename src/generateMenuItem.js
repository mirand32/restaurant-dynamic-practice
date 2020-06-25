function generateMenuItem(section){
    let html=""
    section.forEach((item) => {
      html += `
            <div class="menu-item">
                <img class="menu-item--img" src="../assets/${item.img}.jpg" alt="">
                <div>
                    <h3 class="menu-item--name">${item.name}</h3>
                    <p class="menu-item--blurb">${item.description}</p>
                    <h5 class="menu-item--price">$${item.price}</h5>
                </div>

            </div>
        `;
    });
    return html
}

export default generateMenuItem