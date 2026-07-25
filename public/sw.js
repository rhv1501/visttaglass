// Dummy service worker to unregister old localhost workers
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  self.registration.unregister()
    .then(function() {
      return self.clients.matchAll();
    })
    .then(function(clients) {
      // Unregister and refresh clients to clear the SW
      clients.forEach(client => client.navigate(client.url))
    });
});
