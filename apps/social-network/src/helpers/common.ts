export function matchViewport(viewport: number) {
  return typeof window !== 'undefined' ? window.innerWidth <= viewport : false;
}

export function getViewport() {
  return typeof window !== 'undefined' ? window.innerWidth : 0;
}
