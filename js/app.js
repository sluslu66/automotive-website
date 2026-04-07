function welcome() {
  alert("Welcome to Automotive World!");
}

let carData = [];

// load cars
if (document.getElementById("cars")) {
  fetch("data/cars.json")
    .then(res => res.json())
    .then(data => {
      carData = data;
      renderCars(data);
    });
}

function renderCars(data) {
  let html = "";
  data.forEach(car => {
    html += `<div class="card">
      <h3>${car.name}</h3>
      <p>${car.brand}</p>
    </div>`;
  });
  document.getElementById("cars").innerHTML = html;
}

// filter
function filterCars() {
  let keyword = document.getElementById("search").value.toLowerCase();
  let filtered = carData.filter(c => c.name.toLowerCase().includes(keyword));
  renderCars(filtered);
}

// navbar
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });
