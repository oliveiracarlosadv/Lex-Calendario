/* Lex Calendário (versão web) — funciona sem internet depois da primeira abertura. */
const VERSION = "v1.35.0";
const BASE = "/Lex-Calendario";
const FILES = ["/_next/static/K4xoxN9dOI1OFEOgDLQ0A/_buildManifest.js", "/_next/static/K4xoxN9dOI1OFEOgDLQ0A/_ssgManifest.js", "/_next/static/chunks/1225-4081e8abc16ad220.js", "/_next/static/chunks/1603-dd4325bf7d1034c6.js", "/_next/static/chunks/1613-cf8ee74768434d71.js", "/_next/static/chunks/1683-6bd4be1307b46133.js", "/_next/static/chunks/1e56933c-9830e898491f2de0.js", "/_next/static/chunks/2316.633fc9c94dabf8dd.js", "/_next/static/chunks/2826-a292921234723a49.js", "/_next/static/chunks/3813.7f899de5237ffae4.js", "/_next/static/chunks/4112-1d9e55fe37490ed2.js", "/_next/static/chunks/4707-138f823389490391.js", "/_next/static/chunks/4721-e32c2431df06ea28.js", "/_next/static/chunks/5116-287e74d4ba54be6d.js", "/_next/static/chunks/5318-125c8865f8c75aa2.js", "/_next/static/chunks/5517-94d114dd7c3c32de.js", "/_next/static/chunks/5649-00a98bf772ec80b9.js", "/_next/static/chunks/5823-6536e38356e45f59.js", "/_next/static/chunks/6447.0cce9485e697c139.js", "/_next/static/chunks/6645.4d2c2a9fcdff829f.js", "/_next/static/chunks/7458.279610dcddd0a354.js", "/_next/static/chunks/7734-e6a92ddc52f9b6e4.js", "/_next/static/chunks/7884.ac3c0619e9a9ae66.js", "/_next/static/chunks/7988-3dd39c3c1648f103.js", "/_next/static/chunks/8266-5270c379f9083683.js", "/_next/static/chunks/8466-f16973198556eb51.js", "/_next/static/chunks/8484-c98b5a3648564d13.js", "/_next/static/chunks/8604-33760d62798083d8.js", "/_next/static/chunks/8806-7887fe78ce7e4670.js", "/_next/static/chunks/898.c8e01cf9339b5b15.js", "/_next/static/chunks/922aa7f5-febf535d65587975.js", "/_next/static/chunks/9424.5e353af2cdbd91a3.js", "/_next/static/chunks/9843.6119ac615070733a.js", "/_next/static/chunks/9981-c8763091e78b7d65.js", "/_next/static/chunks/9adaa8cb-97e8fc2e202bf137.js", "/_next/static/chunks/a43231fd-ad6baf7606fe4629.js", "/_next/static/chunks/app/(app)/buscar-processos/page-390062cf0c099e72.js", "/_next/static/chunks/app/(app)/calendario/page-da7fb49b90da2388.js", "/_next/static/chunks/app/(app)/clientes/page-eec4da4317937cd6.js", "/_next/static/chunks/app/(app)/clientes/ver/page-722e446f9be0740a.js", "/_next/static/chunks/app/(app)/comunicacoes/page-57e4c03812ac0b8a.js", "/_next/static/chunks/app/(app)/configuracoes/[tab]/page-f0924b614f6898a1.js", "/_next/static/chunks/app/(app)/configuracoes/page-3ac17875152b569c.js", "/_next/static/chunks/app/(app)/error-c35125a48ea593e0.js", "/_next/static/chunks/app/(app)/eventos/ver/page-57798cc64951c3a9.js", "/_next/static/chunks/app/(app)/intimacoes/page-cc616cb610c6f8cc.js", "/_next/static/chunks/app/(app)/layout-e237498d2bc6403d.js", "/_next/static/chunks/app/(app)/lista/page-54481e69c57ce594.js", "/_next/static/chunks/app/(app)/monitoramento/page-cd50cd734b66da82.js", "/_next/static/chunks/app/(app)/notificacoes/page-3d2704ab07614899.js", "/_next/static/chunks/app/(app)/painel/page-43842a5cff548936.js", "/_next/static/chunks/app/(app)/parceiros/page-0c545730c266c72d.js", "/_next/static/chunks/app/(app)/processos/page-5f521555e4a59f6d.js", "/_next/static/chunks/app/(app)/processos/ver/page-a5e22d310f604281.js", "/_next/static/chunks/app/(app)/sobre/page-4308dba27792acf5.js", "/_next/static/chunks/app/inicio/page-851e312ad823d216.js", "/_next/static/chunks/app/layout-f87551b3eab03d57.js", "/_next/static/chunks/app/manifest.webmanifest/route-ffd7a4b865b8b4b0.js", "/_next/static/chunks/app/page-70bf8541e2cbb7e9.js", "/_next/static/chunks/b3625936-0a56e0ec88e7528b.js", "/_next/static/chunks/b43366b2-2d599d0ab46fd1bb.js", "/_next/static/chunks/framework-03cffc6ddd85982b.js", "/_next/static/chunks/main-a48f117eecc19e33.js", "/_next/static/chunks/main-app-db1a330947d35067.js", "/_next/static/chunks/pages/_app-1889f3b0ecf488d6.js", "/_next/static/chunks/pages/_error-4318263ac734def0.js", "/_next/static/chunks/polyfills-42372ed130431b0a.js", "/_next/static/chunks/webpack-8d913006f4e59292.js", "/_next/static/css/39640cf584b27911.css", "/_next/static/media/19cfc7226ec3afaa-s.woff2", "/_next/static/media/21350d82a1f187e9-s.woff2", "/_next/static/media/8e9860b6e62d6359-s.woff2", "/_next/static/media/ba9851c3c22cd980-s.woff2", "/_next/static/media/c5fe6dc8356a8c31-s.woff2", "/_next/static/media/df0a9ae256c0569c-s.woff2", "/_next/static/media/e4af272ccee01ff0-s.p.woff2", "/_next/static/media/initdb.84241436.wasm", "/_next/static/media/pg_trgm.tar.97841041.gz", "/_next/static/media/pgcrypto.tar.0955778e.gz", "/_next/static/media/pglite.358638d6.wasm", "/_next/static/media/pglite.adc77be7.data", "/_next/static/media/unaccent.tar.39a3bd44.gz", "/apple-icon.png", "/auth-google/", "/brand/app-icon.svg", "/brand/olive-branch-mono.svg", "/brand/olive-branch.svg", "/brand/olive-dark.png", "/brand/olive-green-sm.png", "/brand/olive-light.png", "/brand/olive-slate-sm.png", "/brand/olive-white.png", "/buscar-processos/", "/calendario/", "/clientes/", "/clientes/ver/", "/comunicacoes/", "/configuracoes/backup/", "/configuracoes/categorias/", "/configuracoes/equipe/", "/configuracoes/", "/configuracoes/integracoes/", "/configuracoes/perfil/", "/eventos/ver/", "/icon-180.png", "/icon-192.png", "/icon-512.png", "/icon.svg", "/", "/inicio/", "/intimacoes/", "/lista/", "/manifest.webmanifest", "/monitoramento/", "/notificacoes/", "/painel/", "/parceiros/", "/privacidade.html", "/processos/", "/processos/ver/", "/sobre/", "/termos.html"];
const CACHE = `lex-web-${VERSION}`;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      // Um arquivo que falhe não impede a instalação: ele entra no cache na primeira vez que for usado
      await Promise.all(FILES.map((f) => cache.add(new Request(BASE + f, { cache: "reload" })).catch(() => undefined)));
      await self.skipWaiting();
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("lex-web-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;

  // Páginas: tenta a versão mais nova; sem internet, usa a guardada
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok) void caches.open(CACHE).then((c) => c.put(url.pathname, res.clone()));
          return res.ok ? res : caches.match(url.pathname, { ignoreSearch: true }).then((hit) => hit ?? res);
        })
        .catch(() => caches.match(url.pathname, { ignoreSearch: true }).then((hit) => hit ?? caches.match(`${BASE}/calendario/`))),
    );
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then(
      (hit) =>
        hit ??
        fetch(request).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            void caches.open(CACHE).then((c) => c.put(request, copy));
          }
          return res;
        }),
    ),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(`${BASE}/calendario/`));
});
