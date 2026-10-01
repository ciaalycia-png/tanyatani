import { error } from '@sveltejs/kit';
import { ARTIKEL } from '$lib/artikel.js';
export const load = ({ params }) => {
  const a = ARTIKEL.find((x) => x.slug === params.slug);
  if (!a) error(404, 'Artikel tidak ditemukan');
  return { a };
};
