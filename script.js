async function loadPlayers() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error("Error al cargar datos");
    
    const players = await response.json();
    const container = document.getElementById('players-list');
    
    // Limpiar y mostrar jugadores
    container.innerHTML = players.map(player => `
      <div class="player-card">
        <h3>${player.nick}</h3>
        <p><strong>Región:</strong> ${player.region}</p>
        <p><strong>Puntos:</strong> ${player.puntos}</p>
        <p><strong>Netherpot:</strong> ${player.netherpot}</p>
        <p><strong>Crystal:</strong> ${player.crystal}</p>
        <p><strong>Sword:</strong> ${player.sword}</p>
        <p><strong>UHC:</strong> ${player.uhc}</p>
        <p><strong>Mace:</strong> ${player.mace}</p>
      </div>
    `).join('');
    
  } catch (error) {
    console.error("Error crítico:", error);
    const container = document.getElementById('players-list');
    container.innerHTML = `<p class="error">❌ Error al cargar los jugadores. Verifica la consola.</p>`;
  }
}

// Actualizar cada 2 segundos y cargar al inicio
setInterval(loadPlayers, 2000);
loadPlayers();