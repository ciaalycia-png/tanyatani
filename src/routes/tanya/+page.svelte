<script>
  import { KATEGORI } from '$lib/data.js';
  let { form } = $props(); const n = form?.nilai ?? {};
</script>
<svelte:head><title>Ajukan pertanyaan · Tanya Tani</title></svelte:head>
<main class="wadah"><section class="kartu"><h1>Ajukan pertanyaan</h1>
  {#if form?.pesan}<p class="galat" role="alert">{form.pesan}</p>{/if}
  <form method="POST" enctype="multipart/form-data">
    <label>Judul pertanyaan<input name="judul" value={n.judul ?? ''} required maxlength="150"></label>
    <label>Deskripsi masalah<textarea name="deskripsi" rows="6" required>{n.deskripsi ?? ''}</textarea></label>
    <div class="dua">
      <label>Nama petani / kelompok tani<input name="nama_tani" value={n.nama_tani ?? ''}></label>
      <label>Wilayah (desa, kabupaten)<input name="wilayah" value={n.wilayah ?? ''}></label>
      <label>Komoditas (mis. cabai, padi)<input name="komoditas" value={n.komoditas ?? ''}></label>
      <label>Kategori<select name="kategori">{#each KATEGORI as k}<option selected={k === n.kategori}>{k}</option>{/each}</select></label>
    </div>
    <label>Foto (opsional, maksimal 4 MB)<input type="file" name="foto" accept="image/*"></label>
    <button class="tombol">Kirim pertanyaan</button></form></section></main>
