function createList(title) {
    const lists = getLists();
    const newList = {
        id: Date.now(),
        title: title,
        items: []
    };
    lists.push(newList);
    saveLists(lists);
}

function deleteList(id) {
    let lists = getLists();
    lists = lists.filter(list => list.id !== id);
    saveLists(lists);
}

function addItem(listId, text) {
    const lists = getLists();
    const list = lists.find(l => l.id === listId);
    if (list) {
        list.items.push({
            id: Date.now(),
            text: text
        });
        saveLists(lists);
    }
}

function removeItem(listId, itemId) {
    const lists = getLists();
    const list = lists.find(l => l.id === listId);
    if (list) {
        list.items = list.items.filter(item => item.id !== itemId);
        saveLists(lists);
    }
}
