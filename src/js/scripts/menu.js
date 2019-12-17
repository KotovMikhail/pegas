const btnBurger = document.querySelector(`.js-btn-burger`)
const body = document.body;

const MenuClose = function () {
    body.classList.remove(`menu-opened`);
}

const onEscMenuClose = (evt) => {
    if (evt.keyCode === 27 && body.classList.contains(`menu-opened`)) {
        MenuClose()
    }
};

const onClickDocumentMenuClose = function (evt) {
    if (body.classList.contains(`menu-opened`) && evt.target.classList.contains(`site-header__overlay`)) {
        MenuClose()
    }
};

btnBurger.addEventListener(`click`, function (event) {
    body.classList.toggle(`menu-opened`)
    document.addEventListener(`keydown`, onEscMenuClose)
    document.addEventListener(`click`, onClickDocumentMenuClose)
})

// отслеживает размер окна

let mql = window.matchMedia(`screen and (min-width: 768px)`);

const setupForWidth = function (media) {
    if (media.matches && body.classList.contains(`menu-opened`)) {
        body.classList.remove(`menu-opened`);
    }
};

mql.addListener(setupForWidth); // Добавим прослушку на смену результата

setupForWidth(mql); // Вызовем  функцию
