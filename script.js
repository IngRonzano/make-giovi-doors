
document.getElementById('config-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const model = document.getElementById('model').value;
    const width = parseInt(document.getElementById('width').value, 10);
    const height = parseInt(document.getElementById('height').value, 10);
    const motor = document.getElementById('motor').value;

    let montanti = 110;
    let traversa = 500;
    if (model === 'master-roll') {
        montanti = width > 4000 ? 200 : 150;
        traversa = 320;
    } else if (model === 'master-pack') {
        if (width > 8500 || height > 8000) {
            montanti = 300; traversa = 350;
        } else if (width > 5000 || height > 5000) {
            montanti = 220; traversa = 300;
        } else {
            montanti = 150; traversa = 250;
        }
    }

    const maxWidth = width + montanti * 2;
    const maxHeight = height + traversa;
    const lunghezzaMontante = maxHeight - traversa;

    const svgPath = `svg/${model}/${motor}.svg`;
    fetch(svgPath)
        .then(res => res.text())
        .then(svg => {
            svg = svg.replace('{{LARGHEZZA_MAX}}', maxWidth)
                     .replace('{{ALTEZZA_MAX}}', maxHeight)
                     .replace('{{DIM_MONTANTI}}', montanti)
                     .replace('{{LUNGHEZZA_MONTANTE}}', lunghezzaMontante);
            document.getElementById('svg-container').innerHTML = svg;
        });

    const outputHTML = `
        <h2>Configurazione Generata</h2>
        <table>
            <tr><th>CAMPO</th><th>VALORE</th><th>CODICE AZIENDALE</th></tr>
            <tr><td>Modello</td><td>${model}</td><td contenteditable></td></tr>
            <tr><td>Motore</td><td>${motor}</td><td contenteditable></td></tr>
            <tr><td>Larghezza MAX</td><td>${maxWidth} mm</td><td contenteditable></td></tr>
            <tr><td>Altezza MAX</td><td>${maxHeight} mm</td><td contenteditable></td></tr>
            <tr><td>Lunghezza Montante</td><td>${lunghezzaMontante} mm</td><td contenteditable></td></tr>
        </table>
    `;
    document.getElementById('output').innerHTML = outputHTML;
});
