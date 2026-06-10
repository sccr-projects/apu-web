---
date: 2025-06-09
topic: "Refactor apu-corner-accent menjadi class standalone dengan varian ukuran dan warna"
status: draft
---

## Problem Statement

Class `.apu-corner-accent` saat ini memerlukan **dua class** untuk digunakan:

```html
<div class="apu-corner-accent apu-corner-accent--tr">
```

Ini redundan dan tidak ergonomic. Pengguna ingin API yang lebih ringkas:
- **1 class** untuk posisi: `apu-corner-accent--tr`
- **Varian ukuran**: `apu-corner-accent--tr-3`
- **Varian warna**: `apu-corner-navy--tr-3`

## Constraints

- Tetap compatible dengan Tailwind v4 (tidak pakai JS plugin)
- Tidak merusak penggunaan existing `.apu-corner-accent` + modifier lama
- Class baru harus **self-contained** — tidak perlu base class
- Warna dan ukuran harus bisa dikombinasikan bebas
- CSS harus tetap maintainable (tidak duplikasi masif)

## Approach

**Pilihan utama: Grouped selectors dengan `:is()` dan CSS custom properties.**

Mengapa bukan substring matching (`[class*="-tr"]`) atau suffix matching (`[class$="-3"]`)?
- **Substring matching** terlalu mudah terjadi false positive di class attribute yang panjang
- **Suffix matching** (`[class$="-3"]`) rusak kalau ada class lain setelahnya, misalnya `class="apu-corner-accent--tr-3 p-5 group"`
- **`:is()` grouping** jelas, performa baik, dan 100% reliable

Jumlah kombinasi terbatas (4 posisi × ~5 skala × 3 warna = 60 varian), tapi dengan `:is()` kita hanya perlu ~12 blok CSS (5 size + 4 position + 3 color).

**Alternatif yang ditolak:**
- Menggunakan `@utility` Tailwind v4 — belum dipakai di project ini, dan tidak menyelesaikan masalah parsing angka dari nama class
- Two-class system (`apu-corner-tr` + `apu-corner--3`) — lebih robust tapi tidak sesuai request API single-class pengguna

## Architecture

### Struktur class naming

```
apu-corner-{color}--{position}-{size}
```

- **color**: `accent` (default), `navy`, `white`
- **position**: `tl`, `tr`, `bl`, `br`
- **size**: angka 1–5 (opsional, default = 2 / 36px)

### Contoh usage

```html
<!-- Default: accent, 36px -->
<div class="apu-corner-accent--tr">

<!-- Size 3 (48px) -->
<div class="apu-corner-accent--tr-3">

<!-- Navy color, top-right, size 3 -->
<div class="apu-corner-navy--tr-3">

<!-- Backward compat: tetap works -->
<div class="apu-corner-accent apu-corner-accent--tr">
```

### Token ukuran (scale)

| Suffix | Size | Use case |
|--------|------|----------|
| `-1` | 24px | Kartu kecil, chip |
| `-2` (default) | 36px | Kartu standar |
| `-3` | 48px | Kartu besar, hero card |
| `-4` | 60px | Feature highlight |
| `-5` | 72px | Section-level accent |

## Components (CSS Structure)

### 1. Universal base selector

Semua class yang diawali `apu-corner-` otomatis mendapatkan base styles:

```css
[class^="apu-corner-"] {
  position: relative;
}

[class^="apu-corner-"]::after {
  content: "";
  position: absolute;
  width: var(--apu-corner-size, 36px);
  height: var(--apu-corner-size, 36px);
  pointer-events: none;
  z-index: 2;
}
```

### 2. Size variants (grouped by `:is()`)

```css
:is(
  .apu-corner-accent--1, .apu-corner-accent--tl-1, .apu-corner-accent--tr-1,
  .apu-corner-accent--bl-1, .apu-corner-accent--br-1,
  .apu-corner-navy--1, .apu-corner-navy--tl-1, .apu-corner-navy--tr-1,
  .apu-corner-navy--bl-1, .apu-corner-navy--br-1,
  .apu-corner-white--1, .apu-corner-white--tl-1, .apu-corner-white--tr-1,
  .apu-corner-white--bl-1, .apu-corner-white--br-1
) {
  --apu-corner-size: 24px;
}

:is(
  .apu-corner-accent--3, .apu-corner-accent--tl-3, .apu-corner-accent--tr-3,
  .apu-corner-accent--bl-3, .apu-corner-accent--br-3,
  .apu-corner-navy--3, .apu-corner-navy--tl-3, .apu-corner-navy--tr-3,
  .apu-corner-navy--bl-3, .apu-corner-navy--br-3,
  .apu-corner-white--3, .apu-corner-white--tl-3, .apu-corner-white--tr-3,
  .apu-corner-white--bl-3, .apu-corner-white--br-3
) {
  --apu-corner-size: 48px;
}

/* ... -2 (default 36px), -4, -5 ... */
```

### 3. Position variants (grouped by `:is()`)

```css
:is(
  .apu-corner-accent--tl, .apu-corner-accent--tl-1, .apu-corner-accent--tl-2,
  .apu-corner-accent--tl-3, .apu-corner-accent--tl-4, .apu-corner-accent--tl-5,
  .apu-corner-navy--tl, .apu-corner-navy--tl-1, .apu-corner-navy--tl-2,
  .apu-corner-navy--tl-3, .apu-corner-navy--tl-4, .apu-corner-navy--tl-5,
  .apu-corner-white--tl, .apu-corner-white--tl-1, .apu-corner-white--tl-2,
  .apu-corner-white--tl-3, .apu-corner-white--tl-4, .apu-corner-white--tl-5
)::after {
  top: 0;
  left: 0;
  border-top: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
  border-left: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
  border-right: none;
  border-bottom: none;
  border-radius: 0;
}

/* ... tr, bl, br dengan pola sama ... */
```

### 4. Color variants (grouped by `:is()`)

```css
:is(
  .apu-corner-accent--tl, .apu-corner-accent--tr, .apu-corner-accent--bl, .apu-corner-accent--br,
  .apu-corner-accent--tl-1, .apu-corner-accent--tr-1, ...
)::after {
  --apu-corner-color: rgb(var(--apu-accent));
}

:is(
  .apu-corner-navy--tl, .apu-corner-navy--tr, .apu-corner-navy--bl, .apu-corner-navy--br,
  .apu-corner-navy--tl-1, .apu-corner-navy--tr-1, ...
)::after {
  --apu-corner-color: rgb(var(--apu-navy));
}

:is(
  .apu-corner-white--tl, .apu-corner-white--tr, .apu-corner-white--bl, .apu-corner-white--br,
  .apu-corner-white--tl-1, .apu-corner-white--tr-1, ...
)::after {
  --apu-corner-color: rgb(255 255 255);
}
```

## Data Flow

CSS custom properties mengalir dari selector paling spesifik:

1. **Base** → `[class^="apu-corner-"]::after` men-set `width/height` dari `--apu-corner-size` (default 36px)
2. **Size** → `:is(.apu-corner-*--N)` override `--apu-corner-size`
3. **Position** → `:is(.apu-corner-*--tl)` men-set `top/left` dan `border-*`
4. **Color** → `:is(.apu-corner-accent--*)` men-set `--apu-corner-color`

Nilai akhir `border-top` diresolve sebagai:
```
var(--apu-corner-thickness, 4px) solid var(--apu-corner-color)
```

## Error Handling

- **Class tanpa posisi** (misal `.apu-corner-accent--3`): pseudo-element tetap dibuat tapi tidak punya border → invisible, no harm
- **Class tanpa size** (misal `.apu-corner-accent--tr`): fallback ke 36px
- **Class lama** (`.apu-corner-accent.apu-corner-accent--tr`): tetap works karena `.apu-corner-accent` juga match `[class^="apu-corner-"]`
- **Color tidak dikenal**: jika class tidak match color selector apa pun, `--apu-corner-color` tidak terdefinisi → border transparan (invisible)

## Testing Strategy

1. **Visual regression** — screenshot section Contact yang sudah pakai `.apu-corner-accent--tr`
2. **Kombinatorial test** — buat HTML test page dengan semua kombinasi:
   - 4 posisi × 5 size × 3 color = 60 variant
   - plus backward-compat cases
3. **Responsive check** — pastikan ukuran corner tetap proporsional di mobile

## Open Questions

1. **Apakah perlu menambah warna lain?** Saat ini hanya `accent`, `navy`, `white`. Tambah baru cukup tambah 1 blok `:is()` di section color.
2. **Apakah scale size 1–5 cukup?** Bisa ditambah/dikurangi sesuai kebutuhan real usage.
3. **Apakah `.apu-corner-accent` (base class lama) perlu di-deprecate?** Tidak perlu — tetap works dan tidak konflik.
