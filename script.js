
document.getElementById('config-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const model = document.getElementById('model').value;
    const width = parseInt(document.getElementById('width').value, 10);
    const height = parseInt(document.getElementById('height').value, 10);
    const motor = document.getElementById('motor').value;

    const maxWidth = model === 'active-roll' ? width + 220 : width + (width > 4000 ? 400 : 300);
    const maxHeight = model === 'active-roll' || model === 'master-roll' ? height + 500 : height;

    document.getElementById('output').innerHTML = `
        <h2>Configurazione Generata</h2>
        <p><strong>Modello:</strong> ${model}</p>
        <p><strong>Larghezza Utile:</strong> ${width} mm</p>
        <p><strong>Altezza Utile:</strong> ${height} mm</p>
        <p><strong>Motore:</strong> ${motor}</p>
        <p><strong>Larghezza MAX:</strong> ${maxWidth} mm</p>
        <p><strong>Altezza MAX:</strong> ${maxHeight} mm</p>
    `;
});
