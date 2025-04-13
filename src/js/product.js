fetch("http://127.0.0.1:5500/src/db/product.json")
  .then((res) => res.json())
  .then((data) => {
    const colorList = document.getElementById("pro");

    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add('cards');
      card.innerHTML = `
        <div class="cards_image">
          <img src="${item.image}" alt="">
        </div>
        <div class="cards_text">${item.title}</div>
        <div class="cards_price">${item.price}</div>
        <div class="cards_button_hover">
          <div class="cards_buttons"><i class="ri-heart-line"></i></div>
          <div class="cards_buttons"><i class="ri-repeat-line"></i></div>
          <div class="cards_buttons"><i class="ri-search-line"></i></div>
          <div class="cards_buttons"><i class="ri-shopping-cart-line"></i></div>
        </div>
      `;

      colorList.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Error", err);
  });