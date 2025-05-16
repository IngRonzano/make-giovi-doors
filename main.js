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
<label>Tipo telo:</label>
<select id="telo"><option value="STANDARD 930gr">STANDARD 930gr</option><option value="COIBENTATO 3mm">COIBENTATO 3mm</option><option value="SUPERTECK 8mm">SUPERTECK 8mm</option></select>
<label>Colore RAL:</label><input type="text" id="ral" value="RAL 7035" />
<label>Logo:</label>
<select id="logo"><option value="GIOVI">GIOVI</option><option value="CLIENTE">CLIENTE</option><option value="NO LOGO">NO LOGO</option></select>
<label>Posizione Logo:</label>
<select id="posizione_logo"><option>BASSO SINISTRA</option><option>BASSO CENTRALE</option><option>BASSO DESTRA</option></select>
<label>Alimentazione:</label>
<select id="alimentazione"><option>230V</option><option selected>400V</option><option>KIT SOMMER</option></select>
<label>Classe vento:</label>
<select id="classe_vento"><option>2</option><option>3</option><option>4</option></select>
<label>Lato bello telo:</label>
<select id="lato_bello"><option>LATO STRUTTURA</option><option>LATO OPPOSTO STRUTTURA</option></select>
<label>Rullo avvolgitore:</label><input type="text" id="rullo" value="Standard" />
<label>Quadro:</label><input type="text" id="quadro" value="Standard" />
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
const montanti = l > 4000 ? '220x300' : '150x250';
const traversa = a > 3000 ? '320x320' : '260x260';
const tab = document.getElementById("tabella-tecnica");
tab.innerHTML = `
<tr><td>LARGHEZZA</td><td>${l} mm</td><td><input /></td></tr>
<tr><td>ALTEZZA</td><td>${a} mm</td><td><input /></td></tr>
<tr><td>DIM_MONTANTI</td><td>${montanti} mm</td><td><input /></td></tr>
<tr><td>TRAVERSA</td><td>${traversa} mm</td><td><input /></td></tr>
<tr><td>RAL</td><td>${document.getElementById("ral").value}</td><td><input /></td></tr>
<tr><td>TIPO TELO</td><td>${document.getElementById("telo").value}</td><td><input /></td></tr>
<tr><td>LOGO</td><td>${document.getElementById("logo").value}</td><td><input /></td></tr>
<tr><td>POSIZIONE LOGO</td><td>${document.getElementById("posizione_logo").value}</td><td><input /></td></tr>
<tr><td>ALIMENTAZIONE</td><td>${document.getElementById("alimentazione").value}</td><td><input /></td></tr>
<tr><td>CLASSE VENTO</td><td>${document.getElementById("classe_vento").value}</td><td><input /></td></tr>
<tr><td>LATO BELLO</td><td>${document.getElementById("lato_bello").value}</td><td><input /></td></tr>
<tr><td>RULLO AVV.</td><td>${document.getElementById("rullo").value}</td><td><input /></td></tr>
<tr><td>QUADRO</td><td>${document.getElementById("quadro").value}</td><td><input /></td></tr>`;
aggiornaDisegno();}