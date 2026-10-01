<script>
  import { tgl } from '$lib/data.js';
  let { data, form } = $props(); const q = $derived(data.q);
</script>
<svelte:head><title>{q.judul} · Tanya Tani</title></svelte:head>
<main class="wadah">
  <article class="kartu"><h1>{q.judul}</h1>
    <div class="meta">{#if q.kategori}<span class="lencana">{q.kategori}</span>{/if}
      {#if q.komoditas}<span>Komoditas: {q.komoditas}</span>{/if}{#if q.wilayah}<span>{q.wilayah}</span>{/if}
      <span>{q.nama_tani || q.penulis} · {tgl(q.created_at)}</span></div>
    {#if q.foto_url}<img class="foto" src={q.foto_url} alt="Foto pendukung pertanyaan: {q.judul}">{/if}
    <p class="isi">{q.deskripsi}</p></article>
  <h2 style="margin-top:2rem">{data.jawaban.length} jawaban</h2>
  {#each data.jawaban as j}<div class="jawaban"><p class="isi">{j.isi}</p><div class="meta">{j.penulis} · {tgl(j.created_at)}</div></div>{/each}
  <section class="kartu" style="margin-top:1.5rem"><h2>Jawaban Anda</h2>
    {#if data.user}
      {#if form?.pesan}<p class="galat" role="alert">{form.pesan}</p>{/if}
      <form method="POST"><label>Tulis jawaban<textarea name="isi" rows="5" required></textarea></label><button class="tombol">Kirim jawaban</button></form>
    {:else}<p><a href="/masuk">Masuk</a> atau <a href="/daftar">daftar</a> untuk menjawab.</p>{/if}</section>
</main>
