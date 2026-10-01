import { fail, redirect } from '@sveltejs/kit';
export const actions = { default: async ({ request, locals }) => {
  const f = await request.formData(); const email = String(f.get('email')); const nama = String(f.get('nama')).trim();
  const password = String(f.get('password'));
  if (password.length < 6) return fail(400, { pesan: 'Kata sandi minimal 6 karakter.', email, nama });
  const { data, error } = await locals.supabase.auth.signUp({ email, password, options: { data: { nama } } });
  if (error) return fail(400, { pesan: error.message, email, nama });
  if (data.session) redirect(303, '/');
  return { sukses: 'Pendaftaran berhasil. Cek email Anda untuk konfirmasi, lalu masuk.' };
} };
