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

const onLinkModalShow = function (items) {

    for( let item of items) {

        item.addEventListener(`click`, function (evt) {
            evt.preventDefault()
            let btnModalClose = document.querySelector(`.modal__btn-close`);
            body.classList.add(`modal-opened`)
            btnModalClose.addEventListener(`click`, onBtnClickModalClose)
            document.addEventListener(`keydown`, onEscModalClose)
            document.addEventListener(`click`, onClickDocumentModalClose)
        })
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
