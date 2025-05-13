
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <label>Larghezza (mm):</label>
    <input id="width" type="number" placeholder="Es. 3600" />
    
    <label>Altezza (mm):</label>
    <input id="height" type="number" placeholder="Es. 4000" />
    
    <label>Tipo di misura:</label>
    <select id="misura">
      <option value="utili">Utili</option>
      <option value="max">Max</option>
    </select>
    
    <label>Modello:</label>
    <select id="modello">
      <option>ACTIVE ROLL</option>
      <option>MASTER ROLL</option>
      <option>MASTER PACK</option>
    </select>

    <label>Posizione motore:</label>
    <select>
      <option>Laterale Destro</option>
      <option>Laterale Sinistro</option>
      <option>Frontale Destro</option>
      <option>Frontale Sinistro</option>
    </select>

    <label>Telo:</label>
    <select>
      <option>STANDARD 930gr/mq</option>
      <option>COIBENTATO 3mm</option>
      <option>COIBENTATO SUPERTECK 8mm</option>
    </select>

    <label>Colore RAL:</label>
    <input type="text" placeholder="Es. RAL 7035" />

    <h3>Riepilogo:</h3>
    <div id="output"></div>
    <button onclick="genera()">Genera configurazione</button>
  `;
});

function genera() {
  const w = document.getElementById("width").value;
  const h = document.getElementById("height").value;
  const tipo = document.getElementById("misura").value;
  const modello = document.getElementById("modello").value;
  document.getElementById("output").innerText = 
    `Modello: ${modello}\nLarghezza: ${w} mm\nAltezza: ${h} mm\nTipo: ${tipo}`;
}
