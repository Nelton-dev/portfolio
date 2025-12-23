# Site Pessoal — Nelton

Este diretório contém um site estático simples (HTML/CSS/JS). Fiz algumas melhorias de acessibilidade, responsividade e UX.

## Site publicado (Live)

- URL: https://Nelton-dev.github.io/portfolio/


## O que foi adicionado/alterado
- Meta Open Graph e meta description.
- Preconnect para Google Fonts.
- Skip link para pular direto ao conteúdo.
- Melhorias de acessibilidade no menu (aria-expanded) e fechamento com Escape / clique fora.
- Tema claro/escuro com botão (persistente via localStorage).
- Lazy-loading nas imagens do Cantinho Otaku.
- Respeito a prefers-reduced-motion nas animações.
- Formulário com feedback acessível (aria-live) — backend não configurado.

## Como testar localmente
1. Abra `index.html` no navegador ou rode um servidor simples:

```powershell
python -m http.server 8000 --directory 'C:\Users\Nelton\Desktop'
# abra http://localhost:8000 no navegador
```

2. Verifique:
- Menu mobile funciona e fecha ao clicar fora / pressionar Escape.
- Tema claro/escuro funciona e persiste após recarregar.
- Cantinho Otaku mostra imagens (coloque arquivos em `assets/animes/`).
- Preencher o formulário mostra feedback (no front-end apenas).

## Imagens necessárias
Coloque as imagens em `assets/animes/` com estes nomes (ou atualize os `src` no HTML):
- demon-slayer.jpg
- attack-on-titan.jpg
- one-punch-man.jpg
- sword-art-online.jpg
- jujutsu-kaisen.jpg
- one-piece.jpg

## Próximos passos sugeridos
- Implementar backend (ou usar Formspree) para envio real do formulário.
- Adicionar favicon real e Open Graph image (assets/og-preview.png).
- Otimizar imagens (WebP, compressão) e usar `picture` com fallback.

---

Se quiser que eu faça algum desses próximos passos (lazy + picture, gerar placeholders, ou configurar um endpoint para o formulário), diga qual prefere e eu implemento.