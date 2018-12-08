(function ticTacToe() {
  const chips = document.querySelector('.chips');
  const library = ['apple', 'lemon', 'Lime', 'Orange', 'starawberry'];

  const createElement = (tag, parrentElem, elemClass) => {
    const createdElem = document.createElement(tag);
    parrentElem.appendChild(createdElem);
    createdElem.classList.add(elemClass);
    return createdElem;
  };

  const checkLibrary = (words, lib) => {
    const showArr = [];
    let regex = new RegExp(`^${words}`, 'i');
    lib.forEach((libItem) => {
      if (regex.test(libItem)) {
        showArr.push(libItem);
      }
    });
    return showArr;
  };

  const showHints = (hintsArr) => {
    const dropList = document.querySelector('.chips__list');
    dropList.innerHTML = '';
    hintsArr.forEach((hint) => {
      const dropItem = createElement('li', dropList, 'chips__drop-item');
      dropItem.innerHTML = hint;
    });
  };

  const inputEventListener = (event) => {
    showHints(checkLibrary(event.target.value, library));
  };

  const chipsEventListener = (event) => {
    const chipsContainer = document.querySelector('.chips__container');
    const chipsList = document.querySelector('.chips__list');
    const input = document.querySelector('.chips__input');
    if (/drop-item/.test(event.target.className)) {
      input.value = '';
      const chip = createElement('div', chipsContainer, 'chips__chip');
      const chipText = createElement('span', chip);
      chipText.innerHTML = event.target.innerHTML;
      const removeChip = createElement('img', chip, 'chips__remove-chip');
      removeChip.setAttribute('src', 'images/remove.png');
      chipsList.innerHTML = '';
    } else if (/chips__remove-chip/.test(event.target.className)) {
      event.target.parentNode.remove();
    } else if (/chips__input/.test(event.target.className)) {
      showHints(library);
    }
  };

  const chipsInit = () => {
    const chipsContainer = createElement('div', chips, 'chips__container');
    const input = createElement('input', chips, 'chips__input');
    const dropList = createElement('ul', chips, 'chips__list');
    input.addEventListener('keyup', inputEventListener);
    chips.addEventListener('click', chipsEventListener);
  };

  chipsInit();
}());
