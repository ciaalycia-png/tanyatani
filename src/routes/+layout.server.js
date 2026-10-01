import { namaUser } from '$lib/data.js';
export const load = async ({ locals }) => {
  const u = await locals.getUser();
  return { user: u ? { id: u.id, nama: namaUser(u) } : null };
};
