const renderSpell = (poke) => {
    console.log(poke)
    const panel = document.querySelector('#spells-info');
    const desc = poke.desc
    const range = poke.range
    const duration = poke.duration
    const pokeInfo = `
      <h1>${poke.index}: ${poke.name}</h1>`;
    panel.insertAdjacentHTML('beforeend', pokeInfo)
    panel.insertAdjacentHTML('beforeend', `<h2>Desc</h2>`);
    panel.insertAdjacentHTML('beforeend', `<li>${desc}</li>`);
    panel.insertAdjacentHTML('beforeend', `<h2>Range</h2>`);
    panel.insertAdjacentHTML('beforeend', `${range}`);
    panel.insertAdjacentHTML('beforeend', `<h2>Duration</h2>`);
    panel.insertAdjacentHTML('beforeend', `${duration}`);
  }
  
  const getId = () => {
    const queryParams = window.location.search;
    const id = queryParams.substr(1);
    return id;
  }
  
  const fetchInfo = () => {
    const id = getId();
    const url = `http://www.dnd5eapi.co/api/spells/${id}/`;
    fetch(url)
      .then(resp => resp.json())
      .then(json => renderSpell(json))
      .catch(error => console.error(error));
  }
  
  fetchInfo();