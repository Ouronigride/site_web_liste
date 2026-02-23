const STORAGE_KEY = "my_lists";

function getLists() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveLists(lists) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
}
