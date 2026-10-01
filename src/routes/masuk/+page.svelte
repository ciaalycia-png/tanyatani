<script>let { form } = $props();</script>
<svelte:head><title>Masuk · Tanya Tani</title></svelte:head>
<main class="wadah"><section class="kartu sempit"><h1>Masuk</h1>
  {#if form?.pesan}<p class="galat" role="alert">{form.pesan}</p>{/if}
  <form method="POST">
    <label>Email<input type="email" name="email" value={form?.email ?? ''} required autocomplete="email"></label>
    <label>Kata sandi<input type="password" name="password" required autocomplete="current-password"></label>
    <button class="tombol">Masuk</button></form>
  <p>Belum punya akun? <a href="/daftar">Daftar</a></p></section></main>
