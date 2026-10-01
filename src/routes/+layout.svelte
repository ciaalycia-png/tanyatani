<script>
  import '../app.css';
  import { onMount } from 'svelte';
  let { data, children } = $props();
  let buka = $state(false);
  let s = $state({ besar: false, kontras: false, disleksia: false, diam: false });
  const opsi = [['besar', 'Teks besar'], ['kontras', 'Kontras tinggi'], ['disleksia', 'Font mudah dibaca'], ['diam', 'Kurangi animasi']];
  const terapkan = () => { for (const k in s) document.documentElement.classList.toggle(k, s[k]); };
  onMount(() => { try { Object.assign(s, JSON.parse(localStorage.getItem('a11y') || '{}')); } catch {} terapkan(); });
  const ubah = (k) => { s[k] = !s[k]; terapkan(); try { localStorage.setItem('a11y', JSON.stringify(s)); } catch {} };
</script>
<a class="lompat" href="#isi">Lompat ke konten</a>
<header class="atas"><div class="wadah">
  <a class="merek" href="/">🌾 Tanya Tani</a>
  <nav aria-label="Menu utama">
    <a href="/">Beranda</a><a href="/artikel">Artikel</a><a href="/#info">Informasi pertanian</a>
    {#if data.user}
      <a href="/tanya">Ajukan pertanyaan</a><span>Halo, {data.user.nama}</span>
      <form method="POST" action="/keluar"><button class="btn-a">Keluar</button></form>
    {:else}<a href="/masuk">Masuk</a><a href="/daftar">Daftar</a>{/if}
    <button class="btn-a" aria-expanded={buka} aria-controls="a11y" onclick={() => (buka = !buka)}>♿ Aksesibilitas</button>
  </nav></div></header>
{#if buka}
  <div class="panel" id="a11y" role="group" aria-label="Pengaturan aksesibilitas"><div class="wadah">
    {#each opsi as [k, t]}<label><input type="checkbox" checked={s[k]} onchange={() => ubah(k)} style="width:auto;margin:0">{t}</label>{/each}
  </div></div>
{/if}
<div id="isi" tabindex="-1">{@render children()}</div>
<footer><div class="wadah">Tanya Tani · Tanya jawab seputar pertanian Indonesia</div></footer>
<a class="wa" href="https://wa.me/62895325798865" target="_blank" rel="noopener" aria-label="Hubungi Alycia Margareta lewat WhatsApp"><small>Alycia Margareta</small><b>💬 WA saya</b></a>
