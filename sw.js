// AcadeX service worker: network-first (so updates show up immediately), cache fallback (so it works offline)
const V = 'acadex-v1';
const ASSETS = ['./', 'index.html', 'manifest.json', 'xlsx.mini.min.js',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok && res.status === 200) { const copy = res.clone(); caches.open(V).then(c => c.put(req, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('index.html')))
  );
});
