# Atualização — Creche Pet, Hotel 24h, novas fotos/vídeos e ficha do pet

## Fotos e vídeos

Todas as fotos e o vídeo antigos foram substituídos pelos arquivos reais enviados pela cliente.
As fotos são os JPEGs originais, **sem recodificação, cortes ou redimensionamento** (apenas renomeados).
Os vídeos também são os arquivos originais (H.264 + AAC, já otimizados para web).

| Arquivo original (ZIP) | Arquivo no site | Conteúdo | Onde aparece |
|---|---|---|---|
| WhatsApp Image 14.52.57 | `assets/cris-ser-cidadao-caes.jpg` | Cris no letreiro “Ser Cidadão” com 3 cães | Sobre, Galeria |
| WhatsApp Image 14.53.56 | `assets/cris-adestramento-collie.jpg` | Cris ajoelhada com Collie no parque | Card Adestramento, Cursos, Galeria |
| WhatsApp Image 14.54.36 | `assets/cris-banho-tosa-collies.jpg` | Cris com 2 Collies na sala de banho e tosa | Card Banho & Tosa, Galeria |
| WhatsApp Image 14.55.51 | `assets/cris-adestramento-dobermann.jpg` | Cris (camisa “cão em treinamento”) com Dobermann | Hero, Sobre, Galeria, Open Graph |
| WhatsApp Image 14.56.47 | `assets/creche-socializacao-grupo.jpg` | Cris com 5 cães pequenos na grama | Seção Creche Pet, Galeria |
| WhatsApp Image 14.58.35 | `assets/cris-passeio-pitbull.jpg` | Cris na rua com Pitbull | Sobre, Galeria |
| WhatsApp Image 15.07.42 | `assets/creche-espaco-bem-estar.jpg` | Poodle no espaço com mural “Bem-estar” | Card Creche Pet, Galeria |
| WhatsApp Image 15.08.20 | `assets/hotel-pet-descanso.jpg` | Pastor Alemão e Beagle descansando | Card Hotel Pet, Galeria |
| WhatsApp Video 15.04.36 | `assets/video-creche-spitz.mp4` | Dois Spitz brincando no pátio | Seção “Creche Pet na prática” |
| WhatsApp Video 15.05.43 | `assets/video-creche-recreacao.mp4` | Cães brincando com bolinhas | Seção “Creche Pet na prática” |

Arquivos auxiliares gerados a partir do material enviado:

- `assets/creche-socializacao-grupo-908.jpg`: cópia reduzida (metade do tamanho) da foto de 4032 px, usada
  só em telas pequenas via `srcset`. Em telas grandes e na ampliação, o navegador usa a original.
- `assets/video-creche-spitz-poster.webp` e `assets/video-creche-recreacao-poster.webp`: capas dos vídeos,
  extraídas de um quadro dos próprios vídeos.

Arquivos removidos (substituídos): `cris-adestramento.webp`, `cris-ambiente-profissional.webp`,
`cris-caes.webp`, `cris-passeio.webp`, `cris-pet-colo.webp`, `cris-ser-cidadao.webp`, `video-cris.mp4`,
`video-poster.webp`. Continuam disponíveis no histórico do Git.

## Seções novas ou alteradas (index.html)

- **Serviços:** 4 cards com foto real (Adestramento, Creche Pet, Hotel Pet, Banho & Tosa), com etiqueta
  de horário na Creche (08h às 17h, sol/laranja) e no Hotel (24 horas, lua/verde-escuro).
- **Creche Pet (`#creche`):** como funciona, benefícios da socialização, rotina do dia e selo de horário.
- **Creche Pet na prática (`#video`):** os dois vídeos lado a lado; ao dar play em um, o outro pausa.
- **Hotel Pet (`#hotel`):** atendimento 24 horas e quadro comparando os horários da creche e do hotel.
- **Antes do atendimento (`#conhecendo-seu-pet`):** as perguntas sobre o pet, organizadas em 4 grupos.
- **Cursos (`#curso`):** selo “Em breve: Cursos”, texto genérico para cursos variados.
- **Galeria:** as 8 fotos inteiras (sem cortes); ao tocar, abre a foto em tamanho original.
- **Agendamento:** ficha em 3 etapas. Obrigatórios: nome, WhatsApp, **bairro do Rio de Janeiro**,
  nome do pet, idade, porte, serviço e necessidade. Opcionais: raça, data, horário, rotina,
  comportamento/convivência e saúde. O bairro tem sugestões de bairros do Rio, mas aceita texto livre.
- Botões “Quero a creche para meu pet” e “Consultar hospedagem” levam à ficha com o serviço já marcado.
- FAQ, rodapé, contato, título, descrição e dados estruturados (JSON-LD) mencionam Creche, Hotel 24h e RJ.

## Textos para a Cris revisar

A rotina da creche (chegada às 08h, socialização, brincadeiras, descanso e saída até 17h) e a lista do
que informar no Hotel foram escritas de forma genérica, sem inventar regras, preços ou requisitos.
Vale a Cris conferir se correspondem ao dia a dia real e ajustar, se necessário.

## Publicação

Envie `index.html` e a pasta `assets/` inteira para a hospedagem, preservando a estrutura.
Se a versão antiga continuar aparecendo, force a atualização sem cache (Ctrl+F5).
