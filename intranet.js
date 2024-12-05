const tripsKey = "trips"; // Avain localStoragessa
let editIndex = null;

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

  const trips = JSON.parse(localStorage.getItem(tripsKey)) || [];

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

  if (editIndex !== null) {
    trips[editIndex] = newTrip;
    editIndex = null;
  } else {
    trips.push(newTrip);
  }

  localStorage.setItem(tripsKey, JSON.stringify(trips));
  loadTrips();
  e.target.reset();
});

function deleteTrip(index) {
  const trips = JSON.parse(localStorage.getItem(tripsKey)) || [];
  trips.splice(index, 1);
  localStorage.setItem(tripsKey, JSON.stringify(trips));
  loadTrips();
}

function editTrip(index) {
  const trips = JSON.parse(localStorage.getItem(tripsKey)) || [];
  const trip = trips[index];

  document.querySelector("#title").value = trip.title;
  document.querySelector("#location").value = trip.location;
  document.querySelector("#lat").value = trip.lat;
  document.querySelector("#lng").value = trip.lng;
  document.querySelector("#description").value = trip.description;
  document.querySelector("#date").value = trip.date;
  document.querySelector("#image").value = trip.image;
  document.querySelector("#pdf").value = trip.pdf;

  editIndex = index;

  document.querySelector("#add-trip-form").scrollIntoView();
}

loadTrips();
