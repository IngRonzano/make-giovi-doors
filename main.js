
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <label>Larghezza (mm):</label>
    <input id="width" type="number" value="3600" />

    <label>Altezza (mm):</label>
    <input id="height" type="number" value="4000" />

    <label>Tipo di misura:</label>
    <select id="misura">
      <option value="utili">Utili</option>
      <option value="max">Max</option>
    </select>

    <label>Modello:</label>
    <select id="modello" onchange="aggiornaDisegno()">
      <option value="active">ACTIVE ROLL</option>
      <option value="master-roll">MASTER ROLL</option>
      <option value="master-pack">MASTER PACK</option>
    </select>

    <button onclick="generaTabella()">Genera Configurazione</button>
  `;
});

function aggiornaDisegno() {
  const modello = document.getElementById("modello").value;
  const imgBox = document.getElementById("disegno-tecnico");
  imgBox.innerHTML = `<img src="${modello}.jpg" alt="Disegno tecnico ${modello}">`;
}

function generaTabella() {
  const w = document.getElementById("width").value;
  const h = document.getElementById("height").value;
  const misura = document.getElementById("misura").value;
  const modello = document.getElementById("modello").value;

  const tabella = document.getElementById("tabella-tecnica");
  tabella.innerHTML = `
    <tr><td>MODELLO</td><td>${modello}</td><td><input/></td></tr>
    <tr><td>LARGHEZZA (${misura})</td><td>${w} mm</td><td><input/></td></tr>
    <tr><td>ALTEZZA (${misura})</td><td>${h} mm</td><td><input/></td></tr>
    <tr><td>MONTANTI</td><td>Auto</td><td><input/></td></tr>
    <tr><td>TRAVERSA</td><td>Auto</td><td><input/></td></tr>
  `;
}
