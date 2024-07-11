const cacheName = "v1";
// Guardo en el cache los archivos de la aplicación
const cachedAssets = [
  "./",
  "./index.html",
  "./index.js",
  "./css/style.css",
  "./detalle.html",
  "./inicio.js",
  "./fetch.js",
  "./detalle.js",
  "./recursos.js",
  "./assets/png/android-icon-36x36.png",
  "./assets/png/android-icon-48x48.png",
  "./assets/png/android-icon-72x72.png",
  "./assets/png/android-icon-96x96.png",
  "./assets/png/android-icon-144x144.png",
  "./assets/png/android-icon-192x192.png",
  "./assets/flecha-correcta.png",
  "./assets/logo.png",
  "./manifest.json",

];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(cachedAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//Estrategia de caché (Cache first, falling back to network)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      // Go to the cache first
      return cache.match(event.request.url).then((cachedResponse) => {
        // Return a cached response if we have one
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise, hit the network
        return fetch(event.request).then((fetchedResponse) => {
          // Add the network response to the cache for later visits
          cache.put(event.request, fetchedResponse.clone());

          // Return the network response
          return fetchedResponse;
        });
      });
    })
  );
});
