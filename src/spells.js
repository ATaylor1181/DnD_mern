const renderSpells = (spells) => {
    const list = document.querySelector('#spells');
    spells.forEach((spell, index) => {
      const panel = `
        <div class="grid-item">
          <a href="spells-info.html?${index + 1}">
          <br>
          ${spell.name}
          </a>
        </div>
      `;
      list.insertAdjacentHTML('beforeend', panel)
    })
  }
  
  const url = 'http://www.dnd5eapi.co/api/spells';
  fetch(url)
    .then((resp) => resp.json())
    .then(json => {
      const actualSpells = json.results.slice(0, 319);
      renderSpells(actualSpells);
    })
    .catch((error) => console.error(error))
  