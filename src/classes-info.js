const renderProficiencies = (poke) => {
    const panel = document.querySelector('#classes-info');
    const ul = `<ul id="proficiencies"></ul>`;
    panel.insertAdjacentHTML('beforeend', ul);
    const ulElement = document.querySelector('#proficiencies');
    poke.proficiencies.forEach(proficiencies => {
      ulElement.insertAdjacentHTML('beforeend', `<li> ${proficiencies.name}</a></li>`);
    })
    ulElement.insertAdjacentHTML('beforebegin', `<h1>Proficiencies</h1>`);
  }

  const renderSaves = (poke) => {
    const panel = document.querySelector('#classes-info');
    const ul = `<ul id="saves"></ul>`;
    panel.insertAdjacentHTML('beforeend', ul);
    const ulElement = document.querySelector('#saves');
    poke.saving_throws.forEach(saving_throws => {
      ulElement.insertAdjacentHTML('beforeend', `<li>${saving_throws.name}</li>`);      
    });
    ulElement.insertAdjacentHTML('beforebegin', `<h1>Saves</h1>`)
  }

//   const renderTypes = (poke) => {
//     const panel = document.querySelector('#classes-info');
//     const ul = `<ul id="types"></ul>`;
//     panel.insertAdjacentHTML('beforeend', ul);
//     const ulElement = document.querySelector('#types');
//     poke.types.forEach(type => {
//       ulElement.insertAdjacentHTML('beforeend', `<li>${type.slot}: ${type.type.name}</li>`);
//     });
//   }

//   const renderStats = (poke) => {
//       const panel = document.querySelector('#classes-info')
//       const ul = `<ul id="stats"></ul>`
//       panel.insertAdjacentHTML('beforeend', ul)
//       const ulElement = document.querySelector('#stats')
//       poke.stats.forEach(stat => {
//           ulElement.insertAdjacentHTML('beforeend', `<li>${stat.stat.name}: ${stat.base_stat}</li>`)
//       })
//   }


  const renderPokemon = (poke) => {
    console.log(poke)
    const panel = document.querySelector('#classes-info');
    const hitDie = poke.hit_die
    const pokeInfo = `
      <h1>${poke.index}: ${poke.name}</h1>
      <h1>Hit Die: D${hitDie}</h1>`;
    panel.insertAdjacentHTML('beforeend', pokeInfo);
    renderProficiencies(poke);
    renderSaves(poke);
    // renderMoves(poke);
  }
  
  const getId = () => {
    const queryParams = window.location.search;
    const id = queryParams.substr(1);
    return id;
  }
  
  const fetchInfo = () => {
    const id = getId();
    const url = `http://www.dnd5eapi.co/api/classes/${id}/`;
    fetch(url)
      .then(resp => resp.json())
      .then(json => renderPokemon(json))
      .catch(error => console.error(error));
  }
  
  fetchInfo();