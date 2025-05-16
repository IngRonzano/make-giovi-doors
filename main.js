document.addEventListener("DOMContentLoaded",()=> {
const c = document.getElementById("configuratore");
c.innerHTML = `
<label>Modello:</label>
<select id="modello" onchange="aggiornaDisegno()">
<option value="active">ACTIVE ROLL</option>
<option value="master">MASTER ROLL</option></select>
<label>Posizione Motore:</label>
<select id="motore" onchange="aggiornaDisegno()">
<option value="frontale-destro">Frontale Destro</option>
<option value="frontale-sinistro">Frontale Sinistro</option>
<option value="laterale-destro">Laterale Destro</option>
<option value="laterale-sinistro">Laterale Sinistro</option></select>
<label>Larghezza (mm):</label><input type="number" id="larghezza" value="3600" />
<label>Altezza (mm):</label><input type="number" id="altezza" value="4000" />
<button onclick="genera()">Genera</button>`;});

function aggiornaDisegno() {
const m = document.getElementById("modello").value;
const pos = document.getElementById("motore").value;
const path = m + "-" + pos + ".svg";
document.getElementById("disegno-tecnico").innerHTML = `<embed src="${path}" type="image/svg+xml" />`;
}

function genera() {
const l = parseInt(document.getElementById("larghezza").value);
const a = parseInt(document.getElementById("altezza").value);
const tab = document.getElementById("tabella-tecnica");
tab.innerHTML = `
<tr><td>LARGHEZZA</td><td>${l} mm</td><td><input /></td></tr>
<tr><td>ALTEZZA</td><td>${a} mm</td><td><input /></td></tr>
<tr><td>DIM_MONTANTI</td><td>${l>4000?'220x300':'150x250'} mm</td><td><input /></td></tr>
<tr><td>TRAVERSA</td><td>${a>3000?'320x320':'260x260'} mm</td><td><input /></td></tr>
<tr><td>RAL</td><td>RAL 7035</td><td><input /></td></tr>
<tr><td>TIPO TELO</td><td>STANDARD 930gr</td><td><input /></td></tr>
<tr><td>LOGO</td><td>GIOVI</td><td><input /></td></tr>
<tr><td>POSIZIONE LOGO</td><td>BASSO CENTRALE</td><td><input /></td></tr>
<tr><td>ALIMENTAZIONE</td><td>400V</td><td><input /></td></tr>
<tr><td>CLASSE VENTO</td><td>3</td><td><input /></td></tr>
<tr><td>RULLO AVV.</td><td>Yes</td><td><input /></td></tr>
<tr><td>QUADRO</td><td>Standard</td><td><input /></td></tr>`;
aggiornaDisegno();}