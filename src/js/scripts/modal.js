let links = document.querySelectorAll(`.data__link`);

const modalClose = function () {
    body.classList.remove(`modal-opened`)
    document.removeEventListener(`keydown`, onEscModalClose)
    document.removeEventListener(`click`, onClickDocumentModalClose)
    onLinkModalShow(links)
}

const onBtnClickModalClose = function (evt)  {
    modalClose()
}

const onLinkModalHandler = function (elem) {
    elem.addEventListener(`click`, function (evt) {
        evt.preventDefault()
        let btnModalClose = document.querySelector(`.modal__btn-close`);
        body.classList.add(`modal-opened`)
        btnModalClose.addEventListener(`click`, onBtnClickModalClose)
        document.addEventListener(`keydown`, onEscModalClose)
        document.addEventListener(`click`, onClickDocumentModalClose)
    })
}

const onLinkModalShow = function (items) {
    for(let i = 0; i < items.length; i++) {
        onLinkModalHandler(items[i])
    }
}

const onEscModalClose = function (evt) {
    if (evt.keyCode === 27 && body.classList.contains(`modal-opened`)) {
        modalClose()
    }
};

const onClickDocumentModalClose =function  (evt) {
    if(evt.target.classList.contains(`modal__wrapper`)) {
        modalClose()
    }
}

onLinkModalShow(links);
