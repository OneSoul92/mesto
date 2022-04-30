const popupOpenBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__form-container'); 
let nameInput = document.querySelector('.popup__input-info_type_name');  
let occupationInput = document.querySelector('.popup__input-info_type_occupation');

let profileName = document.querySelector('.profile__title');  
let profileInfo = document.querySelector('.profile__subtitle'); 
 
// function togglePopup() {
//     popup.classList.toggle('popup__opened');
//     nameInput.value = profileName.textContent;
//     occupationInput.value = profileInfo.textContent;
// }

function togglePopup() {
    if (popup.classList.contains('popup__opened')){
        popup.classList.toggle('popup__opened')
    } else {
        nameInput.value = profileName.textContent;
        occupationInput.value = profileInfo.textContent;
        popup.classList.toggle('popup__opened');
    }
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = occupationInput.value;
    togglePopup();
};

popupOpenBtn.addEventListener('click', togglePopup);
popupCloseBtn.addEventListener('click', togglePopup);

formElement.addEventListener('submit', formSubmitHandler);