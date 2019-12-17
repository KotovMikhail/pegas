const CLASSES = {
    tabsJs: 'js-tabs',
    tabsItemJs: 'js-tabs-item',
    tabsContentJs: 'js-tabs-content',

    tabsItemActiveCss: 'tabs__item--active',
    tabsContentActiveCss: 'tabs__content--active',
};

function initializeTabs() {
    $(document).on('click', `.${CLASSES.tabsItemJs}`, itemClickHandler);

    function itemClickHandler(e) {
        const $item = $(this);

        const contentId = $item.data('content-id');

        const $tabs = $item.closest(`.${CLASSES.tabsJs}`);
        const $items = $tabs.find(`.${CLASSES.tabsItemJs}`);

        const $contents = $tabs.find(`.${CLASSES.tabsContentJs}`);
        const $content = $contents.filter(`[data-content-id="${contentId}"]`);

        $items.removeClass(`${CLASSES.tabsItemActiveCss}`);
        $contents.removeClass(`${CLASSES.tabsContentActiveCss}`);

        $item.addClass(`${CLASSES.tabsItemActiveCss}`);
        $content.addClass(`${CLASSES.tabsContentActiveCss}`);
    }
}

initializeTabs();
