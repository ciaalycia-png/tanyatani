<script>let { form } = $props();</script>
<svelte:head><title>Daftar · Tanya Tani</title></svelte:head>
<main class="wadah"><section class="kartu sempit"><h1>Daftar</h1>
  {#if form?.pesan}<p class="galat" role="alert">{form.pesan}</p>{/if}
  {#if form?.sukses}<p class="sukses" role="status">{form.sukses}</p>{/if}
  <form method="POST">
    <label>Nama<input name="nama" value={form?.nama ?? ''} required autocomplete="name"></label>
    <label>Email<input type="email" name="email" value={form?.email ?? ''} required autocomplete="email"></label>
    <label>Kata sandi (minimal 6 karakter)<input type="password" name="password" minlength="6" required autocomplete="new-password"></label>
    <button class="tombol">Buat akun</button></form>
  <p>Sudah punya akun? <a href="/masuk">Masuk</a></p></section></main>
