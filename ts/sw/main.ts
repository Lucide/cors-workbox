import {precacheAndRoute, cleanupOutdatedCaches} from 'workbox-precaching';
import {registerRoute, setCatchHandler} from "workbox-routing";
import {StaleWhileRevalidate} from "workbox-strategies";

declare var self: ServiceWorkerGlobalScope;
export {};

precacheAndRoute(self.__WB_MANIFEST);

cleanupOutdatedCaches();

registerRoute(
    ({url}) => {
        return url.origin == "https://fonts.googleapis.com"
            || url.origin == "https://cdn.jsdelivr.net"
    },
    new StaleWhileRevalidate({
        cacheName: "cdn",
        plugins: [
            {
                fetchDidFail: async function ({event}) {
                    console.log("fetchDidFail");
                }
            }
        ]
    })
);

setCatchHandler(async () => {
    return Response.error();
});

