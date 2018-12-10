(function ticTacToe() {
  const createElement = (tag, parrentElem, elemClass) => {
    const createdElem = document.createElement(tag);
    parrentElem.appendChild(createdElem);
    createdElem.classList.add(elemClass);
    return createdElem;
  };

  const checkLibrary = (words, lib) => {
    const showArr = [];
    const regex = new RegExp(`^${words}`, 'i');
    lib.forEach((libItem) => {
      if (regex.test(libItem)) {
        showArr.push(libItem);
      }
    });
    return showArr;
  };

  const showHints = (library, dropList) => {
    dropList.innerHTML = '';
    library.forEach((hint) => {
      const dropItem = createElement('li', dropList, 'chips__drop-item');
      dropItem.innerHTML = hint;
    });
  };

  const setChip = (event, input, chipsContainer, chipsList) => {
    const chip = createElement('div', chipsContainer, 'chips__chip');
    const chipText = createElement('span', chip);
    event.keyCode === 13 ? chipText.innerHTML = input.value : chipText.innerHTML = event.target.innerHTML;
    const removeChip = createElement('img', chip, 'chips__remove-chip');
    removeChip.setAttribute('src', 'images/remove.png');
    input.value = '';
    chipsList.innerHTML = '';
  };

  const inputEventListener = (event, library, dropList, input, chipsContainer, chipsList) => {
    showHints(checkLibrary(event.target.value, library), dropList);
    if (event.keyCode === 13) {
      setChip(event, input, chipsContainer, chipsList);
    }
  };

  const chipsEventListener = (event, chipsContainer, library, dropList, input, chipsList) => {
    if (/drop-item/.test(event.target.className)) {
      setChip(event, input, chipsContainer, chipsList);
    } else if (/chips__remove-chip/.test(event.target.className)) {
      event.target.parentNode.remove();
    } else if (/chips__input/.test(event.target.className)) {
      showHints(library, dropList);
    }
  };

  const chipsInit = () => {
    const library = ['apple', 'lemon', 'Lime', 'Orange', 'starawberry'];
    const chips = document.querySelector('.chips');
    const chipsContainer = createElement('div', chips, 'chips__container');
    const input = createElement('input', chips, 'chips__input');
    const dropList = createElement('ul', chips, 'chips__list');
    const chipsList = document.querySelector('.chips__list');

    input.addEventListener('keyup', (event) => {
      inputEventListener(event, library, dropList, input, chipsContainer, chipsList);
    });
    chips.addEventListener('click', (event) => {
      chipsEventListener(event, chipsContainer, library, dropList, input, chipsList);
    });
  };

  chipsInit();
}());
