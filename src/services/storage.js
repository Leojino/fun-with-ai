export async function getStorage() {
    const response = window.localStorage.getItem("fwa-responses");
    return await JSON.parse(response);
}

export function setStorage(data) {

    window.localStorage.setItem("fwa-responses", JSON.stringify(data));

}


// export default class Storage {

//     constructor() {

//         this.store = {};

//         this.checkAndFetchLocalStorage();

//     }


//     checkAndFetchLocalStorage() {

//         const prev = window.localStorage.getItem("fwa-responses");

//         console.log(prev);


//     }

// }