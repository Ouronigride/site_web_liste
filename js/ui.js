let currentListId = null;

function renderLists() {
    const container = document.getElementById("listsContainer");
    container.innerHTML = "";

    const lists = getLists();

    lists.forEach(list => {
        const card = document.createElement("div");
        card.className = "list-card";
        card.innerHTML = `
            <h3>${list.title}</h3>
            <button class="delete-btn">X</button>
        `;

        card.querySelector(".delete-btn").addEventListener("click", (e) => {
    e.stopPropagation(); // empêche l'ouverture de la liste
    const confirmed = confirm(`Voulez-vous vraiment supprimer la liste "${list.title}" ?`);
    if (confirmed) {
        deleteList(list.id);
        renderLists();
    }
});


        card.addEventListener("click", () => {
            openList(list.id);
        });

        container.appendChild(card);
    });
}

function openList(id) {
    currentListId = id;
    const lists = getLists();
    const list = lists.find(l => l.id === id);

    document.getElementById("listTitle").textContent = list.title;
    document.getElementById("listsContainer").classList.add("hidden");
    document.querySelector(".create-list").classList.add("hidden");
    document.getElementById("listDetail").classList.remove("hidden");

    renderItems();
}

function renderItems() {
    const container = document.getElementById("itemsContainer");
    container.innerHTML = "";

    const lists = getLists();
    const list = lists.find(l => l.id === currentListId);

    list.items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.text}
            <button class="remove-item">Supprimer</button>
        `;

        li.querySelector(".remove-item").addEventListener("click", () => {
            removeItem(currentListId, item.id);
            renderItems();
        });

        container.appendChild(li);
    });
}

function goBack() {
    currentListId = null;
    document.getElementById("listDetail").classList.add("hidden");
    document.getElementById("listsContainer").classList.remove("hidden");
    document.querySelector(".create-list").classList.remove("hidden");
}
