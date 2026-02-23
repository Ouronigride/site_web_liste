document.addEventListener("DOMContentLoaded", () => {

    renderLists();

    document.getElementById("createListBtn").addEventListener("click", () => {
        const input = document.getElementById("newListTitle");
        const title = input.value.trim();

        if (title !== "") {
            createList(title);
            input.value = "";
            renderLists();
        }
    });

    document.getElementById("addItemBtn").addEventListener("click", () => {
        const input = document.getElementById("newItemInput");
        const text = input.value.trim();

        if (text !== "") {
            addItem(currentListId, text);
            input.value = "";
            renderItems();
        }
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        goBack();
    });

});
