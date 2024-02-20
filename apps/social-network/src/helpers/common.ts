export function matchViewport(viewport: number) {
  return typeof window !== 'undefined' ? window.innerWidth <= viewport : false;
}

export function getViewport() {
  return typeof window !== 'undefined' ? window.innerWidth : 0;
}

export function getPaginationParams(page = 1, limit = 5) {
  const searchParams = new URLSearchParams();
  searchParams.set('page', page.toString());
  searchParams.set('limit', limit.toString());

  return searchParams;
}
