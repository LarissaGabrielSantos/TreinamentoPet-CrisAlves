# Redesenho — identidade própria, sem aparência de site gerado por IA

Objetivo: tirar do site os padrões visuais, textuais e estruturais típicos de templates gerados por IA,
mantendo todas as informações do negócio e todas as funcionalidades.

## O que foi removido

| Elemento | Por quê |
|---|---|
| Barra de progresso colorida no topo | Decoração sem função |
| Fundo com manchas de gradiente, círculos e bolhas flutuantes | Clichê visual |
| Foto principal em formato de “bolha” que mudava de forma | Efeito artificial; a foto agora aparece inteira e grande |
| Faixa de texto rolando sem parar com ✦ | Movimento constante |
| Parallax nas fotos e entrada animada de todos os blocos ao rolar | Efeitos de scroll artificiais |
| Linha do tempo com rolagem travada (“Como começar”) | Scroll effect; virou uma lista numerada simples |
| Cards com sombra, ícones genéricos e etiquetas em caixa-alta com tracinho em toda seção | Padrão de template |
| Efeito de vidro (blur) no cabeçalho e brilho animado nos botões | Padrão de template |
| Seções “Diferenciais” e “Contato” | Repetiam o conteúdo de “Sobre” e do agendamento |
| Seção com 4 cards de perguntas + faixa escura | As perguntas foram integradas ao passo 2 de “Como começar” |
| `codigo-timeline/` e `LEIA-ME-TIMELINE.md` | Documentavam o efeito de scroll removido |

## Tela de carregamento

A tela de carregamento (logo com patinhas girando e “Preparando as patinhas...”) chegou a ser removida no
redesenho, mas foi **restaurada a pedido da cliente, exatamente como era**: mesmo código, mesmas cores e
mesmo tempo (some cerca de 0,9 s depois que a página termina de carregar). A única diferença é a fonte da
frase pequena, que usa a fonte de texto atual do site.

## Nova identidade

Uma primeira versão do redesenho ficou “seca” demais (muito bege, títulos estreitos, poucos elementos
com charme) e foi aquecida a pedido da cliente, sem trazer de volta os clichês removidos.

- **Cor:** cada seção tem fundo próprio — creme, areia, pêssego (Creche), verde (Hotel e rodapé),
  sálvia (Banho & Tosa e Ficha do pet) e laranja (faixa de cursos).
- **Tipografia:** DM Serif Display nos títulos, com itálico em destaques, e Archivo nos textos.
- **Charme com função:** moldura laranja atrás da foto principal, colagem de fotos no Adestramento,
  selos de horário com sol (creche) e lua (hotel), patinha do logo como marcador de lista e passos
  numerados em círculos laranja.
- **Fotos como protagonistas**, com cantos arredondados e legendas que descrevem o que aparece.
- **Composições diferentes por seção**, para fugir da repetição.
- **Logo recortado** (`assets/logo-cris-alves.webp`): só as margens vazias do arquivo original foram
  removidas, então o desenho ficou legível no cabeçalho. Os arquivos originais do logo continuam em `assets/`.

## Nova estrutura da página

1. Abertura: título descritivo, a Cris como responsável, horários e região.
2. Serviços: índice com os 4 serviços e seus horários.
3. Adestramento.
4. Creche Pet: horário, benefícios, rotina em tabela, 2 vídeos e foto do espaço.
5. Hotel Pet: faixa verde-escura, 24 horas, o que informar e o aviso sobre a diferença de horários.
6. Banho & Tosa.
7. Como começar: 4 passos, com as perguntas sobre o pet no passo 2.
8. Sobre a Cris.
9. Em breve: cursos.
10. Galeria: 8 fotos, com ampliação.
11. Ficha do pet: o formulário, com os contatos ao lado.
12. Dúvidas frequentes.

## Textos

Foram reescritos em linguagem direta, em português do dia a dia, sem frases de efeito.

- “Confiança para você. Cuidado de verdade para o seu pet.” → “Adestramento, creche e hotel pet no Rio de Janeiro”
- Descrições de serviço curtas e concretas (por exemplo, os motivos comuns para procurar adestramento).
- Legendas de foto descritivas (“Com um collie, no parque”) no lugar de slogans.
- Nenhuma informação nova foi inventada: preços, endereço, anos de experiência e certificações continuam fora do site.

## Funcionalidades preservadas

Formulário (validação, bairro obrigatório, máscara de WhatsApp, pré-seleção de serviço, mensagem completa
no WhatsApp), links de WhatsApp e Instagram, menu mobile, vídeos (um pausa o outro), galeria com ampliação,
perguntas frequentes, botão flutuante de WhatsApp, SEO e dados estruturados.
