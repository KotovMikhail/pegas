'use strict';

var qs = function qs(sel) {
    return document.querySelector(sel);
};
var qsa = function qsa(sel) {
    return document.querySelectorAll(sel);
};
var APP = {
    name: 'HTML Starter'
};

$(function () {
    svg4everybody();
});

var btnBurger = document.querySelector('.js-btn-burger');
var body = document.body;

var MenuClose = function MenuClose() {
    body.classList.remove('menu-opened');
};

var onEscMenuClose = function onEscMenuClose(evt) {
    if (evt.keyCode === 27 && body.classList.contains('menu-opened')) {
        MenuClose();
    }
};

var onClickDocumentMenuClose = function onClickDocumentMenuClose(evt) {
    if (body.classList.contains('menu-opened') && evt.target.classList.contains('site-header__overlay')) {
        MenuClose();
    }
};

btnBurger.addEventListener('click', function (event) {
    body.classList.toggle('menu-opened');
    document.addEventListener('keydown', onEscMenuClose);
    document.addEventListener('click', onClickDocumentMenuClose);
});

// отслеживает размер окна

var mql = window.matchMedia('screen and (min-width: 768px)');

var setupForWidth = function setupForWidth(media) {
    if (media.matches && body.classList.contains('menu-opened')) {
        body.classList.remove('menu-opened');
    }
};

mql.addListener(setupForWidth); // Добавим прослушку на смену результата

setupForWidth(mql); // Вызовем  функцию

var CLASSES = {
    tabsJs: 'js-tabs',
    tabsItemJs: 'js-tabs-item',
    tabsContentJs: 'js-tabs-content',

    tabsItemActiveCss: 'tabs__item--active',
    tabsContentActiveCss: 'tabs__content--active'
};

function initializeTabs() {
    $(document).on('click', '.' + CLASSES.tabsItemJs, itemClickHandler);

    function itemClickHandler(e) {
        var $item = $(this);

        var contentId = $item.data('content-id');

        var $tabs = $item.closest('.' + CLASSES.tabsJs);
        var $items = $tabs.find('.' + CLASSES.tabsItemJs);

        var $contents = $tabs.find('.' + CLASSES.tabsContentJs);
        var $content = $contents.filter('[data-content-id="' + contentId + '"]');

        $items.removeClass('' + CLASSES.tabsItemActiveCss);
        $contents.removeClass('' + CLASSES.tabsContentActiveCss);

        $item.addClass('' + CLASSES.tabsItemActiveCss);
        $content.addClass('' + CLASSES.tabsContentActiveCss);
    }
}

initializeTabs();

var links = document.querySelectorAll('.data__link');

var modalClose = function modalClose() {
    body.classList.remove('modal-opened');
    document.removeEventListener('keydown', onEscModalClose);
    document.removeEventListener('click', onClickDocumentModalClose);
    onLinkModalShow(links);
};

var onBtnClickModalClose = function onBtnClickModalClose(evt) {
    modalClose();
};

var onLinkModalShow = function onLinkModalShow(items) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {

        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;


            item.addEventListener('click', function (evt) {
                evt.preventDefault();
                var btnModalClose = document.querySelector('.modal__btn-close');
                body.classList.add('modal-opened');
                btnModalClose.addEventListener('click', onBtnClickModalClose);
                document.addEventListener('keydown', onEscModalClose);
                document.addEventListener('click', onClickDocumentModalClose);
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var onEscModalClose = function onEscModalClose(evt) {
    if (evt.keyCode === 27 && body.classList.contains('modal-opened')) {
        modalClose();
    }
};

var onClickDocumentModalClose = function onClickDocumentModalClose(evt) {
    if (evt.target.classList.contains('modal__wrapper')) {
        modalClose();
    }
};

onLinkModalShow(links);
//# sourceMappingURL=main.js.map
