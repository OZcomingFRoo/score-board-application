self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("app-shell").then((cache) =>
            cache.addAll([
                "/",
                "/index.html",
                "/favicon.ico",
                "/css/app.css",
                "/js/app.js",
            ])
        )
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
