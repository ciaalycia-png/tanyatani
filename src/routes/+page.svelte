<script>
  import { KATEGORI, INFO, tgl } from '$lib/data.js';
  import { ARTIKEL } from '$lib/artikel.js';
  import { HERO } from '$lib/hero.js';
  let { data } = $props();
</script>
<svelte:head><title>Tanya Tani · Tanya jawab pertanian</title></svelte:head>
<section class="hero">
  <img src={HERO} alt="Hamparan sawah berundak berwarna hijau saat pagi hari">
  <div class="wadah">
    <h1>Tanya Tani</h1>
    <p>Punya masalah hama, pupuk, atau bibit? Tanyakan di sini, dan sesama petani serta penyuluh akan menjawab.</p>
    <form class="cari" role="search" action="/">
      <input name="q" value={data.cari} placeholder="Cari pertanyaan" aria-label="Cari pertanyaan">
      <select name="kategori" aria-label="Kategori"><option value="">Semua kategori</option>
        {#each KATEGORI as k}<option selected={k === data.kat}>{k}</option>{/each}</select>
      <button class="tombol">Cari</button>
    </form>
  </div>
</section>
<main class="wadah">
  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem"><h2>Pertanyaan terbaru</h2><a class="tombol" href="/tanya">Ajukan pertanyaan</a></div>
  {#if data.pertanyaan.length === 0}<p>Belum ada pertanyaan. Jadilah yang pertama bertanya.</p>{/if}
  <ul class="daftar">
    {#each data.pertanyaan as p}
      <li class="tanya"><div class="hitung"><b>{p.answers[0]?.count ?? 0}</b>jawaban</div>
        <div><h2><a href="/pertanyaan/{p.id}">{p.judul}</a></h2>
          <div class="meta">{#if p.kategori}<span class="lencana">{p.kategori}</span>{/if}
            {#if p.komoditas}<span>Komoditas: {p.komoditas}</span>{/if}
            {#if p.wilayah}<span>{p.wilayah}</span>{/if}
            <span>{p.nama_tani || p.penulis} · {tgl(p.created_at)}</span></div></div></li>
    {/each}
  </ul>
</main>
<section class="wadah" style="padding-block:2rem"><div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:.5rem"><h2>Artikel pertanian</h2><a href="/artikel">Lihat semua artikel</a></div>
  <ul class="daftar grid3">{#each ARTIKEL.slice(0, 3) as a}<li class="kartu"><span class="lencana">{a.kategori}</span><h3 style="margin-top:.5rem"><a href="/artikel/{a.slug}">{a.judul}</a></h3><p style="margin:0">{a.ringkasan}</p></li>{/each}</ul></section>
<section class="info" id="info"><div class="wadah"><h2>Informasi pertanian</h2>
  <div class="grid">{#each INFO as [t, d]}<article><h3>{t}</h3><p>{d}</p></article>{/each}</div></div></section>
