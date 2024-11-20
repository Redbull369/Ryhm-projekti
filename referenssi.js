const references = [
    {
        name: "Asiakas 1",
        job: "Ammatti 1",
        text: "Täyteteksti tähän. Tämä on ensimmäinen referenssi.",
        image: "Referenssi1_AnjaKirjuri.jpg"
    },
    {
        name: "Asiakas 2",
        job: "Ammatti 2",
        text: "Täyteteksti tähän. Tämä on toinen referenssi.",
        image: "Referenssi2_KalleKoodari.jpg"
    },
    {
        name: "Asiakas 3",
        job: "Ammatti 3",
        text: "Täyteteksti tähän. Tämä on kolmas referenssi.",
        image: "Referenssi3_LenniLekuri.jpg"
    },
    {
        name: "Asiakas 4",
        job: "Ammatti 4",
        text: "Täyteteksti tähän. Tämä on neljäs referenssi.",
        image: "Refrenssi4_KalleKukkanen.jpg"
    },
    {
        name: "Asiakas 5",
        job: "Ammatti 5",
        text: "Täyteteksti tähän. Tämä on viides referenssi.",
        image: "Referenssi5_TimoTaksi.jpg"
    }
];

let currentIndex = 0;

function showReference(index) {
    const referenceDiv = document.getElementById("reference");
    const content = `
        <div class="reference-content active">
            <img class="reference-image" src="${references[index].image}" alt="Reference image">
            <h3 class="reference-name">${references[index].name}</h3>
            <p class="reference-job">${references[index].job}</p>
            <p class="reference-text">"${references[index].text}"</p>
        </div>
    `;
    referenceDiv.innerHTML = content;
}

function cycleReferences() {
    currentIndex = (currentIndex + 1) % references.length; // Loop back to the first reference
    showReference(currentIndex);
}

// Initial reference display
showReference(currentIndex);

// Set interval for automatic cycling
setInterval(cycleReferences, 5000);