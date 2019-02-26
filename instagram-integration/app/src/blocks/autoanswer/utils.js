export function fillPosts($list, items, isAppendToList) {
    // const items = dataArray.meta;
    // const cList = $list;
    const addToList = (isAppendPrevMsg, $li, $list) => {
        if (isAppendPrevMsg) {
            $li.insertAfter($list.find('li:last-child'));
        } else {
            $li.appendTo($list);
        }
    };
    // let tpl = '';
    $list.empty();
    // todo: fix hard-code  img src="https://i.imgur.com/jNNT4LE.png"
    items.forEach((item, idx) => {
        const tpl = $(`<li class="col-4 list-group list-inline-item m-0 p-0" id="${item.id}">
            <img src="${item.url}" class="img-responsive p-2" alt="image" style="max-height: 200px;"/>
        </li>`);
        addToList(isAppendToList, tpl, $list); // toDo refactor me, less DOM manipulation
    });
}