/**
* Opens the specified external website.
* @param {string} website - The URL of the website to open.
*/
export const loadWebsite = (website: string): void => {
  window.open(website, '_blank');
}