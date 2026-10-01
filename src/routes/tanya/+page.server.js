import { fail, redirect } from '@sveltejs/kit';
import { namaUser } from '$lib/data.js';
export const load = async ({ locals }) => { if (!(await locals.getUser())) redirect(303, '/masuk'); };
export const actions = { default: async ({ request, locals }) => {
  const u = await locals.getUser(); if (!u) redirect(303, '/masuk');
  const f = await request.formData(); const t = (k) => String(f.get(k) ?? '').trim();
  const nilai = { judul: t('judul'), deskripsi: t('deskripsi'), nama_tani: t('nama_tani'), wilayah: t('wilayah'), komoditas: t('komoditas'), kategori: t('kategori') };
  if (!nilai.judul || !nilai.deskripsi) return fail(400, { pesan: 'Judul dan deskripsi wajib diisi.', nilai });
  let foto_url = null; const foto = f.get('foto');
  if (foto && foto.size > 0) {
    if (!foto.type.startsWith('image/') || foto.size > 4 * 1024 * 1024) return fail(400, { pesan: 'Foto harus berupa gambar maksimal 4 MB.', nilai });
    const path = `${u.id}/${Date.now()}-${foto.name.replace(/[^\w.-]/g, '_')}`;
    const { error } = await locals.supabase.storage.from('foto').upload(path, foto, { contentType: foto.type });
    if (error) return fail(500, { pesan: 'Gagal mengunggah foto: ' + error.message, nilai });
    foto_url = locals.supabase.storage.from('foto').getPublicUrl(path).data.publicUrl;
  }
  const { data, error } = await locals.supabase.from('questions').insert({ ...nilai, foto_url, user_id: u.id, penulis: namaUser(u) }).select('id').single();
  if (error) return fail(500, { pesan: 'Gagal menyimpan: ' + error.message, nilai });
  redirect(303, `/pertanyaan/${data.id}`);
} };
