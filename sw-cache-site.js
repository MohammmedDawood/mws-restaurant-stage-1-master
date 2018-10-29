const cacheName = 'v1';


// Call inastall Event
self.addEventListener('install', (e) => {
    console.log('service worker installed');
});

//call Activate Event
self.addEventListener('activate', (e) => {
    console.log('service worker activated');
    // remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// call fetch event
self.addEventListener('fetch', e => {
    console.log('service worker fetching');
    e.respondWith(
        fetch(e.request)
        .then(
            res => {
                // make a copy  of the response
                const resClone = res.clone();
                // open cache
                caches
                    .open(cacheName)
                    .then(cache => {
                        // Add response to cache
                        cache.put(e.request, resClone);
                    });
                return res;
            }
        ).catch(err => caches.match(e.request).then(res => res))
    );
});