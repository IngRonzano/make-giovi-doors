document.getElementById('config-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const model = document.getElementById('model').value;
  const motor = document.getElementById('motor').value;
  const width = parseInt(document.getElementById('width').value);
  const height = parseInt(document.getElementById('height').value);
  const ral = document.getElementById('ral').value;

  let montanti = 110;
  let traversa = 260;
  if (model === "master-roll") {
    montanti = width > 4000 ? 200 : 150;
    traversa = 320;
  } else if (model === "master-pack") {
    if (width > 8500 || height > 8000) {
      montanti = 300; traversa = 350;
    } else if (width > 5000 || height > 5000) {
      montanti = 220; traversa = 300;
    } else {
      montanti = 150; traversa = 250;
    }
  }

  const maxWidth = width + montanti * 2;
  const maxHeight = model === "master-pack" ? height + 1000 : height + 500;
  const lunghezzaMontante = maxHeight - traversa;

  const svgPath = `svg/${model}/${motor}.svg`;

  fetch(svgPath)
    .then(res => res.text())
    .then(svgText => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      
      svgDoc.getElementById("larghezza_max").textContent = maxWidth;
      svgDoc.getElementById("altezza_max").textContent = maxHeight;
      svgDoc.getElementById("dim_montanti").textContent = montanti;
      svgDoc.getElementById("ral").textContent = ral;
      svgDoc.getElementById("lunghezza_montante").textContent = lunghezzaMontante;

      document.getElementById("svg-container").innerHTML = '';
      document.getElementById("svg-container").appendChild(svgDoc.documentElement);
    })
    .catch(err => {
      document.getElementById("svg-container").innerHTML = "<p style='color:red;'>Errore: disegno non trovato o non valido</p>";
    });
});
