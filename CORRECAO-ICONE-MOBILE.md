# Correção da patinha e do sinal `>` soltos no celular

## Causa
O arquivo `index.html`, dentro de `<head>`, tinha um fragmento antigo de SVG
concatenado após o `<link rel="apple-touch-icon">`:
`<rect .../><text ...>🐾</text></svg>">`

Esse trecho não fazia parte de um botão. O navegador acabava exibindo `🐾 >`
como texto solto na página.

## Correção do favicon — dentro de `<head>`
```html
<link rel="icon" type="image/png" sizes="192x192" href="assets/favicon-cris-alves.png">
<link rel="icon" type="image/x-icon" href="assets/favicon-cris-alves.ico">
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
```

## Correção do botão — dentro de `<header>`
```html
<button class="menu-btn" id="menuBtn" type="button"
        aria-expanded="false" aria-controls="navLinks"
        aria-label="Abrir menu">
  <svg viewBox="0 0 24 24" width="24" height="24"
       fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" aria-hidden="true" focusable="false">
    <path d="M4 7h16M4 12h16M4 17h16"/>
  </svg>
</button>
```

## CSS — dentro da tag `<style>` do `<head>`
```css
.menu-btn{
  display:none;
  flex:0 0 44px;
  width:44px;
  height:44px;
  padding:0;
  border:1px solid var(--line);
  border-radius:14px;
  background:var(--white);
  color:var(--green-900);
  align-items:center;
  justify-content:center;
  line-height:1;
  cursor:pointer;
}
.menu-btn svg {
  display:block;
  flex:0 0 24px;
  width:24px;
  height:24px;
  max-width:24px;
  max-height:24px;
}
@media (max-width:980px) {
  .menu-btn{display:flex;align-items:center;justify-content:center}
}
```

O script existente `menuBtn` / `navLinks` foi preservado porque já abre e
fecha corretamente o menu.
