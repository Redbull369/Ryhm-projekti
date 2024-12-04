document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([61.4447, 21.7795], 13); // nämä koordinaatit on Kanahaukantie 12, 28220 Pori

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Korjattu matka kuvat. ÄLKÄÄ muokatko!!
  var matkakohteet = [
    {
      vuosi: 2018,
      maa: "Itävalta",
      sijainti: "Möserer See, Telfs",
      lat: 47.31563577430922,
      lng: 11.143810842962813,
      kuvaus: "Matkakohde Itävallassa Möserer See -järven ympäristössä.",
      paivamaara: "2018",
      kuva: "./assets/Matkat/MatkatKuvia/PixabaySlovenia.jpg",
      pdfLinkki: "./assets/Matkat/Esite_MennytLiikuntamatka_2018_Itavalta.pdf",
      tuleva: false,
    },
    {
      vuosi: 2019,
      maa: "Slovenia",
      sijainti: "Hotel San Martin, Šmartno, Kojsko",
      lat: 46.00624383835545,
      lng: 13.556297995949581,
      kuvaus: "Matkakohde Sloveniassa.",
      paivamaara: "2019",
      kuva: "./assets/Matkat/MatkatKuvia/PixabayIslanti_2.jpg",
      pdfLinkki: "./assets/Matkat/Esite_MennytLiikuntamatka_2019_Slovenia.pdf",
      tuleva: false,
    },
    {
      vuosi: 2022,
      maa: "Islanti",
      sijainti: "Blueberry Hills Villa, Reykjavik",
      lat: 64.11414474918355,
      lng: -21.63168724562287,
      kuvaus: "Matkakohde Islannissa Blueberry Hills Villassa.",
      paivamaara: "2022",
      kuva: "./assets/Matkat/MatkatKuvia/PixabayIslanti_1.jpg",
      pdfLinkki: "./assets/Matkat/Esite_MennytLiikuntamatka_2022_Islanti.pdf",
      tuleva: false,
    },
    {
      vuosi: 2022,
      maa: "Italia",
      sijainti: "Gardajärvi",
      lat: 45.62441651545789,
      lng: 10.633384740456691,
      kuvaus: "Matkakohde Italiassa Gardajärven ympäristössä.",
      paivamaara: "19.09-25.09.2022",
      kuva: "./assets/Matkat/MatkatKuvia/PixabayItavalta.jpg",
      pdfLinkki: "./assets/Matkat/Esite_TulevaLiikuntamatka_2022_Garda.pdf",
      tuleva: true,
    },
    {
      vuosi: 2023,
      maa: "Norja",
      sijainti: "Lofootit",
      lat: 68.03697264528303,
      lng: 13.662842098796732,
      kuvaus: "Matkakohde Norjassa Lofootit-saaristossa.",
      paivamaara: "19.05-26.05.2023",
      kuva: "./assets/Matkat/MatkatKuvia/PixabayLofootit.jpg",
      pdfLinkki: "./assets/Matkat/Esite_TulevaLiikuntamatka_2023_Lofootit.pdf",
      tuleva: true,
    },
  ];

  matkakohteet.forEach(function (kohde) {
    var marker = L.marker([kohde.lat, kohde.lng]).addTo(map);

    // Markkerin sisältö
    var popupContent = `
        <h3>${kohde.sijainti}, ${kohde.maa} (${kohde.vuosi})</h3>
        <p><strong>Päivämäärä:</strong> ${kohde.paivamaara}</p>
        <p>${kohde.kuvaus}</p>
        <img src="${kohde.kuva}" alt="Kuva" style="width: 100px; height: auto;">
        <br>
        <a href="${kohde.pdfLinkki}" target="_blank">Lue lisää (PDF)</a>
    `;

    marker.bindPopup(popupContent);

    // tämän pitäisi löytää matkat localstoragesta?
    const trips = JSON.parse(localStorage.getItem("trips")) || [];
    trips.forEach((trip) => {
      const marker = L.marker([trip.lat, trip.lng]).addTo(map);
      marker.bindPopup(`
        <h3>${trip.title}</h3>
        <p>${trip.description}</p>
        <p><strong>Päivämäärä:</strong> ${trip.date}</p>
        <img src="${trip.image}" alt="${trip.title}" style="width:100%; max-height:150px;">
        <a href="${trip.pdf}" target="_blank">Lue lisää (PDF)</a>
      `);
    });
  });
});
