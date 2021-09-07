export class Card {
  constructor(kard, sicirs, onkard) {
    this._kard = kard;
    this._sicirs = sicirs;
    this._onkard = onkard;
  }



  generateCard() {
    this._getTemplate();

    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._likeButton = this._element.querySelector('.element__like-button');

    this._setEventListeners();

    this._elementTitle.textContent = this._kard.name;
    this._elementImage.src = this._kard.link;
    this._elementImage.alt = this._kard.name;

    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._sicirs)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', this._removeElement);
    this._likeButton.addEventListener('click', this._togglelike);

    this._elementImage.addEventListener('click', this._onkard);
  }


  _removeElement = (evt) => {
    evt.target.closest('.element').remove();
  }

  _togglelike = (evt) => {
    evt.target.classList.toggle('element__like-button_active');
  }
};