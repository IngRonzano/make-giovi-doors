
function caricaDisegno() {
  const select = document.getElementById('disegni');
  const embed = document.getElementById('disegno');
  embed.src = select.value;
}
