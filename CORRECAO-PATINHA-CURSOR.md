# Correção — Remoção definitiva do ícone 🐾 >

Arquivo alterado: `index.html`.

O ZIP recebido já possuía o favicon correto e não continha texto solto `🐾 >` no `<head>` nem como nó de texto no `<body>`. Porém, ainda continha um CSS de cursor personalizado para mouse/trackpad, responsável por mostrar a patinha em computadores.

## Regra removida do CSS
```css
/* Remover todo este bloco do <style>: */
@media (hover: hover) and (pointer: fine) {
  html, body, body * {
    cursor: url("assets/cursor-patinha-32.png") 7 5, auto !important;
  }
  input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]),
  textarea,
  [contenteditable="true"] {
    cursor: text !important;
  }
}
```

Também foi removido o pseudo-elemento decorativo `.cta-panel::after` que continha `content:"🐾"`. O arquivo `assets/cursor-patinha-32.png` e o guia antigo do cursor foram retirados.

## O que foi preservado
- Logo e favicon oficiais.
- Botão hamburger do menu mobile, que usa ícone SVG de três linhas.
- Tela de carregamento (seu design próprio), fotos e vídeo.
- Formulário de agendamento e WhatsApp.
- Timeline interativa e layout responsivo.

As patinhas intencionais da **animação de carregamento** continuam presentes apenas durante o carregamento, e o emoji enviado na mensagem de WhatsApp do formulário permanece no texto da mensagem. Não há mais cursor personalizado ou emoji de patinha decorativo no site após o loading.

## Publicação
Substitua o site publicado por TODOS os arquivos do ZIP. Caso o domínio ainda exiba a versão antiga, force a atualização da página (Ctrl+F5/Shift+Atualizar no PC ou limpe o cache de dados do site no navegador móvel) e confira se a hospedagem aponta para o `index.html` correto.
