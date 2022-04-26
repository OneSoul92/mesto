const popupOpenBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');

popupOpenBtn.addEventListener('click', function (event) {
    event.preventDefault();
    togglePopup();
});

popupCloseBtn.addEventListener('click', function (event) {
    togglePopup();
});

//Вынесли функцию//
function togglePopup() {
    popup.classList.toggle('popup__opened');
}

// Находим форму в DOM
let formElement = document.querySelector('.popup__form-container'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input-info_name');  /// Воспользуйтесь инструментом .querySelector()
let occupationInput = document.querySelector('.popup__input-info_occupation'); // Воспользуйтесь инструментом .querySelector()

nameInput.value = "Жак-Ив Кусто";
occupationInput.value = "Исследователь океана";


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (event) {
    event.preventDefault();

    let profileName = document.querySelector('.profile__title');  /// Воспользуйтесь инструментом .querySelector()
    let profileInfo = document.querySelector('.profile__subtitle'); // Воспользуйтесь инструментом .querySelector()
    
    togglePopup();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = occupationInput.value; // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);