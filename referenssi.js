const references = [
  {
    name: "Anja Kirjuri, 45-vuotta",
    job: "Taloushallinnon ammattilainen",
    text: `Parasta Annen liikuntamatkoissa on ehdottomasti työhyvinvoinnin kasvu. Liikuntamatkat
               tuovat erinomaisen tasapainon toimisto ja näyttöpäätteellä tehtävään työhön.
                Näyttöpäätetyöskentelyssä minulle tulee helposti erilaisia hartia tai niskavaivoja.
                Annen matkoihin on helppo heittäytyä mukaan ja elimistö voi hyvin liikuntamatkan jälkeen.
                Työhön tulee uutta puhtia, kun ihminen voi hyvin! <br>

                Liikuntamatka: Itävalta 19.–26.5.2018`,

    image: "Referenssi1_AnjaKirjuri.jpg",
  },
  {
    name: "Kalle Koodari, 38-vuotta",
    job: "Ohjelmoija",
    text: `Löysin Annen liikuntamatkat tyttöystäväni kanssa. Matkoissa parasta on helppous ja hyvin
                toimiva kokonaisuus. Olemme käyttäneet Annen fysioterapiapalveluita aikaisemmin, liikuntamatkoilla
                kaikki on järjestetty ja stressi helpottuu! <br>

                Liikuntamatka: Slovenia 2.–9.10.2019`,

    image: "Referenssi2_KalleKoodari.jpg",
  },
  {
    name: "Lenni Lekuri, 58-vuotta",
    job: "Lääkäri",
    text: `Lääkärinä tiedän, että ihmisen terveyteen tarvitaan kokonaisvaltaista hyvinvointia.
                Suosittelen Anne Setälän liikuntamatkoja kaikille, jotka haluavat lisätä hyvinvointiaan! <br>

                Liikuntamatka: Itävalta 19.–26.5.2018 ja Slovenia 2.–9.10.2019
`,
    image: "Referenssi3_LenniLekuri.jpg",
  },
  {
    name: "Kalle Kukkanen, 45-vuotta",
    job: "Puutarhuri",
    text: `Annen liikuntamatkojen kohteet ovat aina hyvin valittuja ja kohteissa saa hyviä ideoita
                myös omaan työhön. Puutarhurina teen työtä käsilläni ja fysiikka on aina kovilla. Työni
                ajoittuvat puutarhan aina kevät, kesä ja syystoimiin. Liikuntamatkoista onkin tullut minulle
                jo tapa päättää kesän sesonkikausi oman hyvinvoinnin äärelle. <br>

                Liikuntamatka: Itävalta 19.–26.5.2018 `,

    image: "Refrenssi4_KalleKukkanen.jpg",
  },
  {
    name: "Timo Taksi, 50-vuotta",
    job: "Taksiyrittäjä",
    text: `Ostin itselleni ensimmäisen liikuntamatkan 50vuotislahjaksi. Taksiyrittäjänä teen pitkää
                päivää ja auton ratissa istuminen vaatii tasapainoksi liikuntaa ja hyvinvointia. Hyvinvointimatkan
                jälkeen huomasin olevani paljon virkeämpi ja työhyvinvointi lisääntyi selvästi. Lähden varmasti
                Annen matkaan uudestaan! <br>

                Liikuntamatka: Islanti 19.-25.5.202`,

    image: "Referenssi5_TimoTaksi.jpg",
  },
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
  currentIndex = (currentIndex + 1) % references.length;
  showReference(currentIndex);
}

showReference(currentIndex);

setInterval(cycleReferences, 5000);
