window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID', {
  linker: {
    domains: ['nicewebapp.com'],
  },
});

gtag('config', 'UA-161926743-1', {
  page_title: 'nicewebapp.com',
  page_location: 'https://nicewebapp.com',
  page_path: '/',
});
