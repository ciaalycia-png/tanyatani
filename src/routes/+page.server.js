export const load = async ({ locals, url }) => {
  const cari = (url.searchParams.get('q') ?? '').replace(/[,()%]/g, ' ').trim();
  const kat = url.searchParams.get('kategori') ?? '';
  let q = locals.supabase.from('questions')
    .select('id,judul,deskripsi,penulis,nama_tani,wilayah,komoditas,kategori,created_at,answers(count)')
    .order('created_at', { ascending: false }).limit(50);
  if (cari) q = q.or(`judul.ilike.%${cari}%,deskripsi.ilike.%${cari}%`);
  if (kat) q = q.eq('kategori', kat);
  const { data } = await q;
  return { pertanyaan: data ?? [], cari, kat };
};
