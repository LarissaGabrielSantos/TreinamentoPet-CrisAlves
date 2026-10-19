# TREINAMENTO PET CRIS ALVES — TIMELINE "COMO COMEÇAR"

A seção "Da primeira mensagem ao atendimento." foi convertida em uma timeline
interativa, mantendo os quatro textos originais.

## Como funciona

- DESKTOP com mouse/trackpad, largura >= 1024px e altura >= 700px:
  seção "pinned" usando CSS `position: sticky`; ao rolar a página,
  os quatro cards avançam horizontalmente. Contador 01/04 e barra de progresso.
  Após o passo 04, o site continua normalmente.
- TABLETS / CELULARES: quatro cards em grade (tablet) ou uma trilha
  vertical (celular), com rolagem normal sem travar a página.
- `prefers-reduced-motion`: sem pin, cards exibidos normalmente.
- O efeito não captura eventos `wheel` nem `touchmove`, não bloqueia `body`,
  e não depende de GSAP, plugins ou rede/CDN.

## Arquivos

- `index.html`: site completo com HTML + CSS + JavaScript da timeline.
- `codigo-timeline/timeline-section.html`: marcação da seção isolada.
- `codigo-timeline/timeline.css`: CSS da seção isolado.
- `codigo-timeline/timeline.js`: JavaScript da seção isolado.
- `assets/`: arquivos originais do site, incluindo imagens, vídeo e logo.

Se reutilizar os trechos avulsos, mantenha os IDs originais, insira o
CSS após os estilos já existentes e o JS no fim do `body`.

## Publicação

Extraia o ZIP. Publique o `index.html` e a pasta `assets` na mesma estrutura.
Os arquivos em `codigo-timeline` são referências para edição, não são
necessários para a execução do site.

## Testes

Conferidos a rolagem progressiva no Chromium, a presença dos quatro passos,
a saída da seção fixa, os layouts estáticos em tablets/celulares e a
ausência de overflow horizontal nas larguras verificadas.
