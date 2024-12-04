const tripsKey = "trips"; // Avain localStoragessa

function loadTrips() {
  const trips = JSON.parse(localStorage.getItem(tripsKey)) || [];
  const tableBody = document.querySelector("#trip-table tbody");
  tableBody.innerHTML = "";

  trips.forEach((trip, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${trip.title}</td>
      <td>${trip.location}</td>
      <td>${trip.date}</td>
      <td>
        <button onclick="editTrip(${index})">Muokkaa</button>
        <button onclick="deleteTrip(${index})">Poista</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

document.querySelector("#add-trip-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const newTrip = {
    title: document.querySelector("#title").value,
    location: document.querySelector("#location").value,
    lat: parseFloat(document.querySelector("#lat").value),
    lng: parseFloat(document.querySelector("#lng").value),
    description: document.querySelector("#description").value,
    date: document.querySelector("#date").value,
    image: document.querySelector("#image").value,
    pdf: document.querySelector("#pdf").value,
  };

  const trips = JSON.parse(localStorage.getItem(tripsKey)) || [];
  trips.push(newTrip);
  localStorage.setItem(tripsKey, JSON.stringify(trips));
  loadTrips();
  e.target.reset();
});

// Tämän ehkä pitäisi poistaa matka?
function deleteTrip(index) {
  const trips = JSON.parse(localStorage.getItem(tripsKey)) || [];
  trips.splice(index, 1);
  localStorage.setItem(tripsKey, JSON.stringify(trips));
  loadTrips();
}

function editTrip(index) {
  alert("Muokkaustoiminto on työn alla!");
}

loadTrips();
