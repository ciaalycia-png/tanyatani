<script>
  import { tgl } from '$lib/data.js';
  let { data } = $props(); const a = $derived(data.a);
</script>
<svelte:head><title>{a.judul} · Tanya Tani</title></svelte:head>
<main class="wadah"><article class="baca"><a href="/artikel">← Semua artikel</a>
  <h1 style="margin-top:1rem">{a.judul}</h1>
  <div class="meta"><span class="lencana">{a.kategori}</span><span>{tgl(a.tanggal)}</span></div>
  {#each a.isi as p}<p>{p}</p>{/each}
  <p><a class="tombol" href="/tanya">Punya pertanyaan? Tanyakan di sini</a></p></article></main>
