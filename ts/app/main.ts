import {Workbox} from "workbox-window";

//START
if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");

    // wb.addEventListener("activated", (event) => {
    //     if (!event.isUpdate) {
    //         console.log("new service worker activated, reloading to cache everything");
    //         location.reload();
    //     }
    // });
    wb.register();
}