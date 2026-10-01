import { error, fail, redirect } from '@sveltejs/kit';
import { namaUser } from '$lib/data.js';
export const load = async ({ locals, params }) => {
  const { data: q } = await locals.supabase.from('questions').select('*').eq('id', params.id).maybeSingle();
  if (!q) error(404, 'Pertanyaan tidak ditemukan');
  const { data: jawaban } = await locals.supabase.from('answers').select('*').eq('question_id', params.id).order('created_at');
  return { q, jawaban: jawaban ?? [] };
};
export const actions = { default: async ({ request, locals, params }) => {
  const u = await locals.getUser(); if (!u) redirect(303, '/masuk');
  const isi = String((await request.formData()).get('isi') ?? '').trim();
  if (!isi) return fail(400, { pesan: 'Jawaban tidak boleh kosong.' });
  const { error: e } = await locals.supabase.from('answers').insert({ question_id: params.id, isi, user_id: u.id, penulis: namaUser(u) });
  if (e) return fail(500, { pesan: 'Gagal mengirim jawaban: ' + e.message });
  return { ok: true };
} };
