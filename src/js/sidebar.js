fetch("http://127.0.0.1:5500/src/db/colors.json")
  .then((res) => res.json())
  .then((data) => {
    const colorList = document.getElementById("color-list");

    data.forEach((color) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <a href="#">
          <div class="color_sec">
            <div class="clr_box" style="background-color: ${color.value};"></div>
            <h2>${color.name}</h2>
          </div>
        </a>
        <h3>${color.count}</h3>
      `;

      colorList.appendChild(li);
    });
  })
  .catch((err) => {
    console.error("Error", err);
  });
