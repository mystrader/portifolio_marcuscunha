# Marcus Cunha — Portfolio

Site de portfolio estático em HTML/CSS/JS puro. Sem dependências de build.

---

## Como publicar

### Opção 1 — GitHub Pages (gratuito, recomendado)

1. Crie um repositório no GitHub (ex: `portfolio`)
2. Faça upload dos arquivos:
   ```bash
   git init
   git add .
   git commit -m "init"
   git remote add origin https://github.com/SEU_USUARIO/portfolio.git
   git push -u origin main
   ```
3. No repositório → **Settings → Pages**
4. Em *Source*, selecione **main** / **(root)**
5. Clique **Save** — em ~1 min estará em `https://SEU_USUARIO.github.io/portfolio`

> Para usar domínio próprio: adicione um arquivo `CNAME` com seu domínio e configure o DNS apontando para `SEU_USUARIO.github.io`.

---

### Opção 2 — Vercel (domínio automático + deploy contínuo)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique **Add New → Project**
3. Importe o repositório do portfolio
4. Framework: **Other** (sem build)
5. Clique **Deploy** — estará em `https://portfolio-xxxx.vercel.app`

---

### Opção 3 — Netlify (arrastar e soltar)

1. Acesse [netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta `timeLineProjetos` inteira para a área indicada
3. Deploy imediato — URL gerada automaticamente

---

## Estrutura de arquivos

```
timeLineProjetos/
├── index.html          # página principal
└── imagens/
    ├── avatar_marcus.jpeg
    ├── marcus.png
    ├── timelineMarcus.png
    └── logos/          # SVGs das empresas
```

## Atualizar conteúdo

Todos os textos, cargos e links estão diretamente no `index.html`.  
Busque pelo nome da empresa ou cargo para localizar rapidamente.

- **Logos:** coloque o SVG em `imagens/logos/` e referencie com `<img src="imagens/logos/arquivo.svg">`
- **Links sociais:** busque por `behance.net` ou `linkedin.com` no arquivo
