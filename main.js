document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h1>MAKE GIOVI DOORS – Versione completa</h1>
    <p>Inserisci le dimensioni della porta:</p>
    <input type='number' placeholder='Larghezza (mm)' /><br/>
    <input type='number' placeholder='Altezza (mm)' /><br/>
    <p>Seleziona modello:</p>
    <select>
      <option>ACTIVE ROLL</option>
      <option>MASTER ROLL</option>
      <option>MASTER PACK</option>
    </select>
    <p>Funzioni logiche simulate per dimostrazione UI completa.</p>
  `;
});