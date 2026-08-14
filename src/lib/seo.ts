/**
 * Sets the meta description and canonical URL for the current route.
 * SPA-safe: creates the tags if missing, updates them on each page.
 */
export function setPageSeo(description: string): void {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', description);

  const url = 'https://acumencareeracademy.com' + window.location.pathname;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}
