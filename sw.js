importScripts('/workbox-sw.js');

workbox.precaching.precache([
  { url: '/index.html', revision: '1' },
  { url: '/about.html', revision: '1' },
  { url: '/student.html', revision: '1' },
  { url: '/js/jquery-3.3.1.min.js', revision: '1' },
])

workbox.precaching.addRoute()
