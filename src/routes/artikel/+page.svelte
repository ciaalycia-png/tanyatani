<script>
  import { ARTIKEL } from '$lib/artikel.js'; import { tgl } from '$lib/data.js';
</script>
<svelte:head><title>Artikel pertanian · Tanya Tani</title></svelte:head>
<main class="wadah"><h1>Artikel pertanian</h1>
  <ul class="daftar">{#each ARTIKEL as a}
    <li class="kartu"><div class="meta"><span class="lencana">{a.kategori}</span><span>{tgl(a.tanggal)}</span></div>
      <h2 style="margin-top:.5rem"><a href="/artikel/{a.slug}">{a.judul}</a></h2><p style="margin:0">{a.ringkasan}</p></li>{/each}</ul></main>
