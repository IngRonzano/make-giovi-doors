
document.getElementById('config-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const model = document.getElementById('model').value;
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

    const fields = ["model", "width", "height", "motor", "ral", "materiale", "logo", "logo_pos", "vento", "alimentazione", "lato_bello", "telo", "rullo", "quadro"];
    const labels = ["Modello", "Larghezza utile", "Altezza utile", "Motore", "RAL", "Materiale", "Logo", "Posizione Logo", "Classe vento", "Alimentazione", "Lato bello telo", "Tipo telo", "Rullo avvolgitore", "Quadro"];

    let output = "<table border='1'><tr><th>CAMPO</th><th>VALORE</th><th>CODICE AZIENDALE</th></tr>";
    fields.forEach((id, idx) => {
        output += `<tr><td>${labels[idx]}</td><td>${document.getElementById(id).value}</td><td contenteditable></td></tr>`;
    });
    output += `<tr><td>Larghezza MAX</td><td>${maxWidth} mm</td><td contenteditable></td></tr>`;
    output += `<tr><td>Altezza MAX</td><td>${maxHeight} mm</td><td contenteditable></td></tr>`;
    output += `<tr><td>Montanti</td><td>${montanti} mm</td><td contenteditable></td></tr>`;
    output += `<tr><td>Traversa</td><td>${traversa} mm</td><td contenteditable></td></tr>`;
    output += `<tr><td>Lunghezza montante</td><td>${lunghezzaMontante} mm</td><td contenteditable></td></tr>`;
    output += "</table>";
    document.getElementById('output').innerHTML = output;
});
const svgPath = `svg/${model}/${motor}.svg`;

fetch(svgPath)
  .then(res => res.text())
  .then(svg => {
    // Sostituisci i segnaposto con i valori reali
    svg = svg.replace(/{{LARGHEZZA_MAX}}/g, maxWidth)
             .replace(/{{ALTEZZA_MAX}}/g, maxHeight)
             .replace(/{{DIM_MONTANTI}}/g, montanti)
             .replace(/{{RAL}}/g, document.getElementById("ral").value)
             .replace(/{{LOGO}}/g, document.getElementById("logo").value)
             .replace(/{{ALIMENTAZIONE}}/g, document.getElementById("alimentazione").value)
             .replace(/{{LATO_BELLO}}/g, document.getElementById("lato_bello").value)
             .replace(/{{CLASSE_VENTO}}/g, document.getElementById("vento").value)
             .replace(/{{LUNGHEZZA_MONTANTE}}/g, lunghezzaMontante);

    document.getElementById("output").innerHTML += "<br><h2>Disegno</h2>" + svg;
  })
  .catch(error => {
    document.getElementById("output").innerHTML += "<p style='color:red;'>Errore nel caricamento del disegno SVG: " + svgPath + "</p>";
  });
