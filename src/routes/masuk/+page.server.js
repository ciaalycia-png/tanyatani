import { fail, redirect } from '@sveltejs/kit';
export const actions = { default: async ({ request, locals }) => {
  const f = await request.formData(); const email = String(f.get('email'));
  const { error } = await locals.supabase.auth.signInWithPassword({ email, password: String(f.get('password')) });
  if (error) return fail(400, { pesan: 'Email atau kata sandi salah, atau email belum dikonfirmasi.', email });
  redirect(303, '/');
} };
