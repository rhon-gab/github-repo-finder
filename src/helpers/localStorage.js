export function setLocalStorageItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item))
}

export function getLocalStorageItem(name) {
    try {
        return JSON.parse(localStorage.getItem(name))
    } catch (err) {
        console.log("Can't get localStorage item : ", name)
    }
}
