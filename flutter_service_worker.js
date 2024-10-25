'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "fa5b24605f0573802190ad5ed5ecde53",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "59bd11f2ae9ea4828e3bbccd91e2dc27",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "902e626158d539ba3d612ad11d2e571a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67f3dba2b49d7b0ae4bd838962ebda0a",
".git/logs/refs/heads/main": "67f3dba2b49d7b0ae4bd838962ebda0a",
".git/logs/refs/remotes/origin/HEAD": "f44f60b0132e1fb21f53845c5b1b565e",
".git/logs/refs/remotes/origin/main": "76b31f5d897c51ef0b971358ceb5c69a",
".git/objects/04/8b9e05236a3c9bbfb1017cdea57fd60536d7fd": "41c09bd32ea5855d9d510f21a7ec26dd",
".git/objects/0d/fd1521bfa3f3fb4be554daf2182bd1ba3545a6": "1b41a23efff190b38c080c87a050ca54",
".git/objects/1b/78c2dc081c2fdb7d64e414655149e990c66b7b": "11eae85b73981a9465e9cff7a58768ed",
".git/objects/20/1e0fcfd1764223f1f0fc5243d0e2aedd6ecdc5": "3e77ae9af2a3f497ae1b07206240a43f",
".git/objects/24/1575cad1586d69323274f10eba14d0d990dea3": "932c7ae8994e0aa579396e664e6f9ddf",
".git/objects/2f/c1bd1db83efde255bded4daa15bcd6c1a5687b": "3cbd74710e610f214b6c0b8e7e619784",
".git/objects/30/70d3a64ab55343307b8664da9d6245e9be08f9": "35e2af2429bb3134a4d4ea1c88d91678",
".git/objects/4a/b3050c05894658bd07f143670fb0b335bbeb83": "d84d2ff72a43119e36b345edc687d7c3",
".git/objects/4e/eb2982895f7d840ccd62b34bfb212c28a09d84": "2af953f41dad7c83cb114637a30448d4",
".git/objects/4f/efda7c05b56762494dcdfac0514f48c226206a": "ff3a945b2dbeda035baf7c575bf5ff8d",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "5ce9522ff411edefc18fdeed657ab11f",
".git/objects/74/594944ae5782a78defb8d32863d60f9223ae7a": "d0fe78c6558fbc0f7462b6c8bb639bc4",
".git/objects/8b/656be3919d5bae266cfd6f6a9450f88a64085b": "fe4ff2624b3199774b9290764bfd256c",
".git/objects/97/d713ed50c2d145a2692761006ca76f33b0a599": "99781417d771eba6577889327551c51e",
".git/objects/9f/d12fcd5a44f801e7e75b4c486acf31d1055dd8": "8c0e45a09d18a54cdade0a792a181e81",
".git/objects/b0/08a4292099279ec2ec0dc88443d91782f0769a": "e70f66e6b3b2123ddd0078705644ff08",
".git/objects/de/4360bd59e3e0aaf74c3a12bf99b1d0763c9e4b": "f9302eb10e99e063d5b24d9f540666b2",
".git/objects/f0/186c0c4bbe7cc0ee189d2afe33309566476492": "2ff11a71da5f8f76682930b4ca11eac5",
".git/objects/pack/pack-0f422a799c61a0605df5b72718128e0e77111b1f.idx": "b51b714b4b6190757d02b7e1e8a4ae69",
".git/objects/pack/pack-0f422a799c61a0605df5b72718128e0e77111b1f.pack": "a688ac94652711eb304c1278afa79314",
".git/objects/pack/pack-0f422a799c61a0605df5b72718128e0e77111b1f.rev": "98bd9e7c93ca23e11274aa0fd475a50c",
".git/packed-refs": "ca27507ec915fb4bf30593fb1854681b",
".git/refs/heads/main": "2597185dd1b069576e2f17128a8e358a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2597185dd1b069576e2f17128a8e358a",
".idea/encodings.xml": "2b73a41f305a1d00fed308299f057f8a",
".idea/misc.xml": "fe04a1fa1b2574a989fe20786811310f",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "52309cb9c39acd18405af3f5b894551e",
".idea/workspace.xml": "a10f1b5720062af2ac6918257f1e5287",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "42f5a0b7f8a7d1cca8812ee77ea7f0c5",
"assets/NOTICES": "901b696da90cacf46f8a42f8cec0e0fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "61ba051c6810bf114901c8ef8e99ff6b",
"index.html": "8f0c7e628968e35384d62fceced90095",
"/": "8f0c7e628968e35384d62fceced90095",
"main.dart.js": "28129f3574d6ce77d49e3e1e97661236",
"manifest.json": "11a95927d470c9dce2307600834e73c2",
"splash/img/logo.png": "e1bf4aa3e514e4f1e658b41531b8a15d",
"splash/style.css": "ec57ae77995740d56558c508759b461e",
"version.json": "24afb3e460d44534f8afb08e094bd5aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
