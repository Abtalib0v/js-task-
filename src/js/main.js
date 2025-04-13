var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 8, 
    spaceBetween: 20,
    breakpoints: {

        360: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 50,
        },
    },
    pagination: {

        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    }
    
});
// const API_URL = "https://dummyjson.com/products";
// const productContainer = document.querySelector(".item-container");

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => {
//     const products = data.products;
//     products.forEach((element) => {
//       productContainer.innerHTML += `
//     <div class="item">
//           <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg" alt="">
//           <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eveniet?</p>
//           <span class="price">$15</span>
//     </div>
//     `;
//     });
//   });