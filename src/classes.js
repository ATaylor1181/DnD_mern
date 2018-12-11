const renderClasses = (classes) => {
    const list = document.querySelector('#classes');
    classes.forEach((dclass, index) => {
      const panel = `
        <div class="grid-item">
          <a href="classes-info.html?${index + 1}">
          <br>
          ${dclass.name}
          </a>
        </div>
      `;
      list.insertAdjacentHTML('beforeend', panel)
    })
  }
  
  const url = 'http://www.dnd5eapi.co/api/classes';
  fetch(url)
    .then((resp) => resp.json())
    .then(json => {
      const actualClasses = json.results.slice(0, 12);
      renderClasses(actualClasses);
    })
    .catch((error) => console.error(error))
  