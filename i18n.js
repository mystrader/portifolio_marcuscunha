(function (root) {
  'use strict';

  var STORAGE_KEY = 'mc-portfolio-lang';

  var STR = {
    pt: {
      meta_title_index: 'Marcus Cunha — Senior Frontend Engineer, UX/UI & IA aplicada ao produto',
      meta_keywords:
        'Marcus Cunha, engenheiro frontend sênior, senior frontend engineer, tech lead, React, Next.js, TypeScript, UX UI, design system, micro-frontends, WCAG, web performance, inteligência artificial, LLM, Claude, desenvolvedor frontend, remoto internacional, Brasil',
      meta_desc_index:
        'Marcus Cunha: engenheiro frontend sênior, tech lead e UX/UI com 20+ anos. React, Next.js, TypeScript, design systems, micro-frontends, performance, acessibilidade e engenharia assistida por IA (LLMs). Rio, SP, remoto internacional.',
      meta_title_sobre: 'Sobre mim · Marcus Cunha — trajetória, arquitetura front-end e IA',
      meta_keywords_sobre:
        'Marcus Cunha biografia, desenvolvedor frontend história, arquitetura front-end, PJe, Petrobras, PUC-Rio, inteligência artificial desenvolvimento, carreira UX engineer',
      meta_desc_sobre:
        'Trajetória completa de Marcus Cunha: Flash ao TypeScript, setor público e privado, arquitetura frontend, PJe, Petrobras, design systems e estudos em IA na PUC-Rio.',

      og_site: 'Marcus Cunha — Portfolio',
      jsonld_job: 'Senior Frontend Engineer & UX/UI Designer',
      jsonld_desc:
        'Engenheiro frontend sênior e UX/UI com foco em React, Next.js, TypeScript, design systems, micro-frontends, web performance, acessibilidade (WCAG) e produtividade com IA (LLMs, Claude). Tech lead em projetos Brasil–Europa.',

      lang_pt_label: 'PT',
      lang_en_label: 'EN',
      lang_switch_aria: 'Idioma do site',
      lang_intl_tooltip:
        'Aberto a vagas internacionais. Site em inglês: use o toggle EN.',

      a11y_skip: 'Pular para o conteúdo',
      a11y_region: 'Ferramentas de acessibilidade',
      a11y_label: 'Acessibilidade',
      a11y_font_down: 'Diminuir tamanho da fonte',
      a11y_font_reset: 'Restaurar tamanho da fonte',
      a11y_font_up: 'Aumentar tamanho da fonte',
      a11y_contrast: 'Contraste',
      a11y_libras: 'Libras',
      a11y_libras_aria: 'Abrir o tradutor VLibras (Libras)',

      nav_sobre: 'Sobre',
      nav_timeline: 'Trajetória',
      nav_skills: 'Arquitetura',
      nav_contato: 'Contato',

      nav_id: 'Portfólio',

      hero_label: 'Engenheiro Frontend · UX/UI Designer · IA aplicada (LLMs & automação)',
      hero_cred_heading: 'Formação acadêmica',
      hero_cred1_title: 'Bacharelado — Universidade Estácio de Sá',
      hero_cred1_level: 'Graduação',
      hero_cred1_school: 'Estácio',
      hero_cred1_course: 'Ciência da Computação',
      hero_cred2_title: 'Pós-graduação — Universidade Estácio de Sá',
      hero_cred2_level: 'Pós-graduação',
      hero_cred2_school: 'Estácio',
      hero_cred2_course: 'Análise, Projeto e Gerência de Sistemas',
      hero_cred3_title: 'Pós-graduação lato sensu — PUC-Rio (Pontifícia Universidade Católica do Rio de Janeiro)',
      hero_cred3_level: 'Pós-graduação lato sensu',
      hero_cred3_school: 'PUC-Rio',
      hero_cred3_course: 'Especialista em TI · Full Stack',

      hero_puc_affil: 'Pós-graduação lato sensu · PUC-Rio',
      hero_puc_link_title: 'PUC-Rio — site institucional',

      hero_role_html:
        '<strong>+15 anos</strong> construindo interfaces que fazem sentido — do código à experiência, da startup à multinacional.',
      stat_exp: 'Anos de exp.',
      stat_companies: 'Empresas',
      stat_projects: 'Projetos',

      chip_agile_flow: 'Esteira ágil',
      chip_accessibility: 'Acessibilidade',
      chip_product: 'Produto',
      chip_it_support: 'Suporte TI',

      cta_behance: 'Principais projetos',
      cta_cv: 'Currículo PDF',
      cta_timeline_pdf: 'Linha do tempo',
      cta_whatsapp_title: 'WhatsApp',
      cta_whatsapp_sub: '(21) 9 9555-6239',
      cta_email_title: 'E-mail',
      cta_email_sub: 'mystrader@gmail.com',
      aria_whatsapp: 'Copiar número e escolher se abre o WhatsApp Web',
      aria_email: 'Copiar e-mail para a área de transferência',
      aria_copy_phone: 'Copiar só o número',
      aria_copy_email: 'Copiar só o e-mail',
      toast_copy_whatsapp_title: 'Número copiado',
      toast_copy_whatsapp_sub: 'Na área de transferência',
      toast_copy_email_title: 'E-mail copiado',
      toast_copy_email_sub: 'Na área de transferência · pode colar onde precisar',
      toast_copy_clip_title: 'Copiado',
      toast_copy_clip_sub: 'Na área de transferência',
      wa_prompt_title: 'Abrir WhatsApp Web?',
      wa_prompt_yes: 'Sim',
      wa_prompt_no: 'Não',
      aria_cv: 'Baixar currículo em PDF',
      aria_timeline_pdf: 'Baixar linha do tempo em PDF',

      badge_aria: 'Status profissional: disponível para novas oportunidades',
      badge_html:
        '<span class="dot" aria-hidden="true"></span><span><strong>Disponível</strong> para novas oportunidades Nacionais e Internacionais (português e Espanhol)</span>',
      hero_location: 'Rio de janeiro · São Paulo · Brasil · Internacional · Remoto',

      about_eyebrow: 'Narrativa profissional',
      about_lead:
        'Aqui você encontra a história completa: origens no Flash, passagens por governo e grandes produtos, visão de arquitetura, estudos na PUC-Rio e o que o front-end representa para mim hoje.',
      about_snippet_html: 'Do ActionScript ao TypeScript — <em>arte, sistemas e impacto</em> numa narrativa só.',
      about_btn: 'Sobre mim',

      nav_testimonials: 'Recomendações',

      tm_eyebrow: 'Pares e líderes',
      tm_heading_html: 'Recomendações <span>profissionais</span>',
      tm_sub: 'Trechos do que colegas publicaram no LinkedIn ao longo da trajetória.',
      tm_note_html:
        'Trechos publicados como recomendações no <a href="https://www.linkedin.com/in/marcuscunha-dev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',

      tl_heading: 'Trajetória <span>profissional</span>',
      tl_sub: 'Mais recente primeiro — até o estágio no INSS (2004) e o período freelance anterior.',
      tl_dir_top: '↑ Mais recente',
      tl_dir_bot: 'Início de carreira ↓',
      tl_now_tag: '● Posição atual',
      tl_cta_projects: 'Ver projetos',
      tl_cta_journey: 'Ver trajetória',

      entry_almaviva_title: 'Senior Frontend Engineer',
      entry_kaki_title: 'Especialista Front-end Engineer',
      entry_pje_title: 'Analista Desenvolvedor Frontend Master / UI/UX',
      entry_spassu_title: 'Desenvolvedor Front-end Sênior · UI Designer',
      entry_instant_title: 'Analista Frontend UI Especialista',
      entry_sefaz_title: 'Analista Desenvolvedor Front-End Especialista · UX e UI',
      entry_par_title: 'Analista Desenvolvedor Front-End Pleno',
      entry_casa_title: 'Analista Desenvolvedor Front-end Pleno',
      entry_arcon_title: 'Analista Desenvolvedor .NET / C# · UI',
      entry_record_title: 'WebMaster',
      entry_ceci_title: 'Desenvolvedor Web · UI · Animador 2D',
      entry_inss_title: 'Estágio · Desenvolvimento web & suporte técnico',
      entry_seed_title: 'Autônomo · Web & TI',

      entry_almaviva_period: '2024<br>→ agora',
      entry_almaviva_level: 'Sênior',
      entry_almaviva_body:
        'Liderança técnica de frontend em projeto internacional Brasil–Itália: arquitetura, identidade visual digital e coordenação de squads em escala global. Atuação também em <strong>entregas que conversam com o ecossistema do portal da Prodesp</strong> — integrações, consistência de interface e requisitos de produto no contexto de serviços públicos digitais.',

      entry_kaki_level: 'Especialista',
      entry_kaki_body:
        'Sistemas de alto impacto em São Paulo. Arquitetura de componentes, integrações críticas e foco em performance em plataformas com grande volume de dados.',

      entry_pje_level: 'Sênior → Especialista · Atuação simultânea',
      entry_pje_body:
        'No PJE, sistemas críticos do Judiciário — zero tolerância a falhas. Na Extreme Digital, liderança de biblioteca de componentes e plataforma de saúde digital nacional de alto volume.',

      entry_spassu_level: 'Esteira ágil · Projeto interno Petrobras pela SPASSU',
      entry_spassu_body:
        'Contrato pela SPASSU atuando em projeto interno da Petrobras: interface, consistência visual e entregas em ritmo ágil junto ao time.',

      entry_instant_level: 'Instant Solutions',
      entry_instant_body:
        'Foco em análise e construção de interface, qualidade de UI e alinhamento com produto — UX com o mesmo peso que o código.',

      entry_sefaz_level: 'Governo do Rio de Janeiro · SEFAZ-RJ',
      entry_sefaz_body:
        'Portais e sistemas da fazenda estadual — escala estadual, impacto direto no cidadão. Margem de erro mínima.',

      entry_par_level: 'Freelance · Match Group',
      entry_par_body:
        'Produtos de relacionamento em alto tráfego — incluindo <strong>Tinder</strong> e o ecossistema Par Perfeito — além de e-commerce, campanhas (Globo, GE, Americanas) e e-mail marketing em escala.',

      entry_casa_level: 'Agência',
      entry_casa_body:
        'Agência full-service: análise de sistemas, prototipação e entrega de interface para vários clientes. Treinamentos internos em desenvolvimento rápido de UI.',

      entry_arcon_level: 'Pleno',
      entry_arcon_body:
        'Plataforma proprietária de seguros: camada de interface, telas e fluxos em cima do stack .NET — requisitos alinhados ao negócio.',

      entry_record_level: 'Rede Record',
      entry_record_body:
        'Sites e interfaces em ASP.NET em um dos maiores veículos do país — primeira experiência com escala e prazo de verdade.',

      entry_ceci_level: 'CECIERJ · Web educacional & acessibilidade',
      entry_ceci_body:
        'Interfaces com forte preocupação com acessibilidade — e animação 2D quando o projeto pedia — aprendizado cedo de que interface tem impacto real nas pessoas.',

      entry_inss_level: 'INSS · Portais internos & infraestrutura',
      entry_inss_body:
        'Primeira experiência formal na Previdência Social: sites e ferramentas internas em <strong>WordPress</strong> e <strong>PHP</strong>, convivência com <strong>Linux</strong> em servidores e manutenção de microcomputadores — web, servidor e atendimento a usuários internos no mesmo desafio diário.',

      entry_seed_period: 'Freelance<br>até 2004',
      entry_seed_level: 'Antes do INSS · projetos sob demanda',
      entry_seed_body:
        'Trabalhos avulsos — páginas e pequenos sites, ajustes em <strong>HTML/CSS</strong> e suporte a hardware — o ponto zero da linha do tempo, sem logo de empresa: só prática, curiosidade e cliente direto.',

      sk_heading: 'Arquitetura & <span>engenharia</span>',
      sk_tagline_html: 'Como penso <em>sistemas</em>, não só <em>telas</em>.',
      sk_intro:
        'Além do framework do momento: limites de módulos, contratos entre times, domínio estável e como o front se integra ao restante da plataforma.',
      sk_card1_h: 'SOLID & código sustentável',
      sk_card1_p:
        'Coesão, baixo acoplamento e decisões que sobrevivem troca de lib — testabilidade e evolução sem medo.',
      sk_card2_h: 'Micro-frontends',
      sk_card2_p:
        'Módulos autônomos, shell e orquestração, versionamento e acordos claros entre squads para escalar entrega.',
      sk_card3_h: 'Hexagonal & portas/adapters',
      sk_card3_p:
        'Domínio no centro; UI, API e infra como adaptadores — útil em libs compartilhadas, BFF e integrações.',
      sk_comp_label: 'Prática, produto & stack',
      sk_name_ds: 'Design System',
      sk_name_a11y: 'Acessibilidade (WCAG)',
      sk_name_ts: 'TypeScript',
      sk_name_perf: 'Web performance',
      sk_name_test: 'Testes & qualidade',
      sk_name_llm: 'LLMs & engenharia assistida',
      sk_name_claude: 'Claude & fluxos com contexto',
      sk_name_react: 'React / Next.js',
      sk_name_ng: 'Angular',
      sk_name_vue: 'Vue.js',
      sk_name_ux: 'UX / pesquisa',
      sk_name_figma: 'Figma & handoff',
      sk_name_git: 'Git / CI/CD',
      sk_name_node: 'Node.js & APIs',

      cta_h: 'Vamos construir<br><span>algo juntos?</span>',
      cta_sub: '🚨 Disponível para CLT, PJ ou freelance · remoto.',
      cta_dl_label: 'Downloads · PDF',
      cta_cv_file: 'Currículo (sênior)',

      foot_line1: '© 2026 Marcus Cunha',
      foot_line2: 'Frontend · UX/UI · Brasil · Feito sem template.',

      sobre_skip: 'Pular para o conteúdo',
      sobre_back: 'Voltar ao portfólio',
      sobre_h1: 'Sobre <span>mim</span>',
      sobre_lead:
        'Texto completo da trajetória — do primeiro freelance ao que construo hoje em arquitetura, produto e experiência.',
      sobre_quote:
        '“Tecnologia muda, ferramentas mudam — mas construir algo que faça sentido para as pessoas continua sendo o que me move.”',
      sobre_p1:
        'Comecei minha trajetória em 2003, criando sites animados em Flash com ActionScript como freelancer para empresas como Fisk e White Martins. Desde cedo, unir arte e tecnologia sempre fez parte de quem eu sou — música, pintura e fotografia estão no meu DNA criativo. Foi isso que me levou naturalmente ao Front-End, onde encontrei o ponto de equilíbrio entre estética, usabilidade e impacto real.',
      sobre_p2:
        'Em 2007, iniciei oficialmente minha carreira como desenvolvedor, sem imaginar que estava construindo uma jornada tão consistente. Hoje, mais de 15 anos depois, continuo escrevendo código com a mesma curiosidade — mas com uma visão muito mais ampla de arquitetura, produto e experiência.',
      sobre_p3: 'Ao longo da minha carreira, atuei em diferentes contextos: TV aberta, governo, fintechs, startups e multinacionais.',
      sobre_p4:
        'No setor público, participei de projetos de grande escala, como na Fundação CECIERJ, contribuindo para tornar o ensino a distância acessível com práticas de acessibilidade em parceria com a UFRJ (COPPE).',
      sobre_p5:
        'Também estive envolvido na transformação digital de diversos sistemas governamentais, sempre trazendo uma visão integrada entre UX, arquitetura e desenvolvimento — da concepção até a validação com usuários.',
      sobre_p6:
        'Na iniciativa privada, trabalhei em plataformas internacionais, incluindo projetos ligados ao Tinder e outros produtos do segmento de relacionamento, o que ampliou minha visão de produto, escala e tomada de decisão.',
      sobre_p7:
        'Na Spassu, em projetos para a Petrobras, consolidei minha experiência em design e Front-End avançado. No Tribunal de Justiça do RJ, participei da concepção do PJe, estruturando fluxos e criando a base visual que orientou equipes inteiras de desenvolvimento.',
      sobre_p8:
        'Na Engineering, atuei na construção de componentes e arquitetura para um sistema global (API Gateway), tendo a TIM como principal cliente. Já no SCOMEX do Estado do Rio de Janeiro, atuei como especialista de Front-End e analista, em um projeto que se tornou referência nacional pela SEFAZ.',
      sobre_p9:
        'Mais recentemente, participei da construção de um CMS responsável por mais de 80 portais principais do estado de São Paulo, além de liderar a concepção e engenharia de um MVP para o setor portuário paulista.',
      sobre_p10:
        'Paralelamente à prática, sempre mantive uma base forte de estudo. Atualmente, estou em pós-graduação na PUC-Rio e tenho aprofundado cada vez mais meus conhecimentos em Inteligência Artificial, especialmente no uso de LLMs, automação e aplicações práticas no desenvolvimento de software.',
      sobre_p11:
        'No lado pessoal, sou casado e pai — experiências que reforçam ainda mais meu senso de responsabilidade, equilíbrio e visão de longo prazo.',
      sobre_p12:
        'Hoje, não vejo o Front-End apenas como código, mas como uma forma de conectar pessoas, sistemas e decisões através de experiências bem construídas.',
      sobre_foot: '← Voltar ao portfólio',

      proj_nav_portfolio: 'Portfólio',
      proj_foot_back: '← Voltar ao portfólio',
      proj_lang_pt_aria: 'Português',
      proj_lang_en_aria: 'English',

      proj_eng_meta_desc:
        'Engineering — Especialista Front-end, DHuO · Marcus Cunha',
      proj_eng_doc_title: 'Engineering · Marcus Cunha',
      proj_eng_hero_tag: 'Especialista',
      proj_eng_role:
        'Especialista Front-end Engineer · Produto global · São Paulo',
      proj_eng_quote:
        '"Arquitetei o frontend do DHuO — plataforma completa de gestão de APIs e integração de sistemas, dados e IA para clientes de nível mundial."',
      proj_eng_sec_company: 'A empresa',
      proj_eng_h2_company:
        'Empresa global com sede em Roma, 13.000 profissionais em 40+ países',
      proj_eng_p_company:
        'A Engineering oferece soluções digitais inovadoras para finanças, governo, saúde, cidades inteligentes, indústria, energia e mídia. Uma das maiores empresas de TI da Europa, com projetos de alto impacto e complexidade real.',
      proj_eng_sec_role: 'Minha atuação',
      proj_eng_h2_role:
        'Arquitetura frontend do DHuO — plataforma de API Management, iPaaS e IA',
      proj_eng_p_ds:
        'Arquitetei e documentei o Design System do DHuO de ponta a ponta: mapeando o fluxo completo de tokens → assets → core → publicação npm, tornando-o consumível por múltiplos times e frameworks (React, Vue, Angular).',
      proj_eng_p_mf:
        'Construção de componentes no Design System (Storybook) em arquitetura de monorepo, implementação de microfrontends e integração via API First. Cobertura de testes com Jest e Cypress.',
      proj_eng_sec_video: 'Vídeo',
      proj_eng_h2_loom: 'Walkthrough no Loom',
      proj_eng_p_loom:
        'Visão geral em vídeo do contexto Engineering e do produto DHuO.',
      proj_eng_iframe_main: 'Loom — Engineering · DHuO',
      proj_eng_acc_live: 'Live — Code API',
      proj_eng_acc_live_p:
        'Loom focado em código e integração com APIs no contexto do produto — complemento ao walkthrough geral do DHuO.',
      proj_eng_iframe_code: 'Loom — Live Code API (Engineering)',
      proj_eng_sec_work: 'Projetos & trabalhos',
      proj_eng_h2_dhuo: 'DHuO — produto global',
      proj_eng_card_dhuo_title: 'DHuO Platform',
      proj_eng_card_dhuo_desc:
        'Plataforma completa de API Management, iPaaS, Data Integration e AI sob demanda. Produto de nível mundial com módulos integrados e Design System compartilhado entre squads.',
      proj_eng_card_cta: 'Ver produto',

      proj_alm_meta_desc:
        'AlmaViva — Senior Frontend Engineer & Tech Lead · Marcus Cunha',
      proj_alm_doc_title: 'AlmaViva · Marcus Cunha',
      proj_alm_period: '2024 → agora',
      proj_alm_role: 'Senior Frontend Engineer · Tech Lead · Brasil–Itália',
      proj_alm_quote:
        '"Liderança técnica em projeto de escala internacional — arquitetura, identidade visual e gestão de squads num produto que conecta dois países."',
      proj_alm_sec_company: 'A empresa',
      proj_alm_h2_company: 'Grupo italiano líder em ICT, há mais de 40 anos',
      proj_alm_p_company:
        'A AlmaViva é uma das maiores empresas de Information & Communication Technology da Itália, com forte atuação na transformação digital de empresas e administrações públicas. No Brasil, conduz projetos estratégicos em parceria com governos estaduais, combinando escala corporativa com execução local.',
      proj_alm_sec_role: 'Minha atuação',
      proj_alm_h2_role: 'Frontend Engineer em portais estratégicos do Governo de SP',
      proj_alm_p_role1:
        'Responsável pelo desenvolvimento frontend em portais e produtos digitais do estado — arquitetura, identidade visual, React e JavaScript e integração com serviços críticos de backend. Na galeria abaixo, só há material público do <strong>Porto de São Sebastião</strong>; frentes como PRODESP e ALESP não têm artefato divulgável aqui.',
      proj_alm_p_role2:
        'Apliquei design patterns como SOLID, DRY, YAGNI, DDD e Orientação a Objetos para garantir sustentabilidade do código ao longo do tempo, com times distribuídos e entregas em ritmo contínuo.',
      proj_alm_sd_eyebrow: 'System design · PCS',
      proj_alm_sd_h2: 'Arquitetura frontend escalável — Almaviva',
      proj_alm_sd_lead:
        'Case técnico do portal portuário: base preparada para evolução contínua, crescimento de equipa e integração com sistemas complexos — além das telas da galeria, o desenho de camadas e de estado foi documentado de forma explícita.',
      proj_alm_sd_sum1: 'Visão geral e diagrama',
      proj_alm_sd_btn_zoom:
        'Ampliar diagrama de arquitetura PCS em ecrã inteiro',
      proj_alm_sd_zoom_hint: 'Clique · ampliar',
      proj_alm_sd_figcap:
        'Diagrama de arquitetura (PCS) — referência para alinhar equipa e stakeholders. Clica na imagem para ver em tamanho real.',
      proj_alm_sd_p1:
        'O trabalho não foi só construir interfaces: estruturar uma base sólida inspirada em <strong>Clean Architecture</strong> e <strong>DDD</strong>, com camadas bem definidas — Presentation, Application, Domain e Infrastructure.',
      proj_alm_sd_sum2: 'Decisões de arquitetura',
      proj_alm_sd_q1: 'A estrutura responde a problemas típicos de aplicações grandes:',
      proj_alm_sd_li1: 'Reduzir acoplamento entre UI e regras de negócio',
      proj_alm_sd_li2: 'Estado previsível e testável',
      proj_alm_sd_li3: 'Manutenção e evolução de features em paralelo',
      proj_alm_sd_p2:
        '<strong>Abordagens:</strong> arquitetura em camadas; <em>feature-first</em> (vertical slices); separação de estados (global, servidor e UI); hooks como orquestração.',
      proj_alm_sd_sum3: 'Gestão de estado',
      proj_alm_sd_st1: '<strong>Server state</strong> — APIs, cache e revalidação',
      proj_alm_sd_st2:
        '<strong>Global state</strong> — autenticação, preferências partilhadas',
      proj_alm_sd_st3: '<strong>UI state</strong> — comportamento e controlo visual',
      proj_alm_sd_st4:
        '<strong>Local / URL state</strong> — filtros e navegação persistidos',
      proj_alm_sd_p3:
        'Esta separação reduz complexidade e evita conflitos comuns em SPAs de grande porte.',
      proj_alm_sd_sum4: 'Estrutura e fluxo de dados',
      proj_alm_sd_h3_1: 'Feature-first',
      proj_alm_sd_p4:
        'Cada funcionalidade com a sua árvore: hooks, schemas, componentes, tipagens e regras de negócio — para squads paralelos sem perder organização.',
      proj_alm_sd_h3_2: 'Fluxo',
      proj_alm_sd_p5:
        '<strong>Interface → hooks → camada de aplicação → APIs → persistência.</strong> Interceptors para autenticação, erros e padronização de pedidos.',
      proj_alm_sd_sum5: 'Stack e visão IA-ready',
      proj_alm_sd_p6:
        '<strong>Stack:</strong> React, TypeScript, TanStack Query, Zustand, Zod, Vite — foco em performance, escalabilidade e DX.',
      proj_alm_sd_p7:
        '<strong>IA-ready:</strong> domínio desacoplado da infraestrutura facilita integrações futuras (automação de fluxos, recomendações, análise em tempo real) sem reescritas traumáticas.',
      proj_alm_sd_sum6: 'Resultado e conclusão',
      proj_alm_sd_p8:
        '<strong>Resultado:</strong> escalar funcionalidades com menos risco, reduzir complexidade ao longo do tempo, melhorar testabilidade e velocidade de entrega.',
      proj_alm_sd_p9:
        'Em suma: preocupação explícita com engenharia, organização e sustentabilidade do código — o tipo de decisão que sustenta ambientes corporativos e sistemas críticos.',
      proj_alm_gallery_aria: 'Projetos e cases',
      proj_alm_gallery_eyebrow: 'Cases publicados',
      proj_alm_gallery_h2: 'Projetos & trabalhos',
      proj_alm_gallery_count: '1 case · 8 imagens',
      proj_alm_frame_aria:
        'Abrir galeria PCS — Porto de São Sebastião, 8 imagens',
      proj_alm_frame_alt:
        'Interface do portal Porto de São Sebastião — preview do case no Behance',
      proj_alm_frame_hint: 'Clique · galeria',
      proj_alm_frame_title: 'Porto de São Sebastião',
      proj_alm_frame_type: 'MVP · Plataforma portuária estadual · São Paulo',
      proj_lb_close: 'Fechar galeria',
      proj_lb_prev: 'Imagem anterior',
      proj_lb_next: 'Próxima imagem',
      proj_lb_dialog: 'Galeria de imagens PCS',
      proj_lb_gallery_fallback: 'Galeria',
      proj_lb_zoom_alt: 'Visualização ampliada',
      proj_lb_image_word: 'Imagem',
      proj_lb_of: 'de',
      proj_lb_aria_pcs: 'Galeria PCS · imagem {i} de {n}',
      proj_lb_aria_single: '{title} — vista ampliada',
      proj_lb_diagram_title: 'Diagrama de arquitetura PCS',

      proj_common_sec_company: 'A empresa',
      proj_common_sec_role: 'Minha atuação',
      proj_common_sec_work: 'Projetos & trabalhos',
      proj_common_cases_h2: 'Cases publicados',
      proj_common_behance: 'Ver no Behance',
      proj_common_sec_video: 'Vídeo',
      proj_common_h2_loom: 'Walkthrough no Loom',
      proj_common_sec_context: 'O contexto',
      proj_common_eyebrow_fd: 'Frontend & design',
      proj_gallery_hint: 'Clique · galeria',
      proj_click_prefix: 'Clique ·',
      proj_sec_diagram: 'Diagrama',
      proj_word_folder: 'pasta',

      proj_record_meta_desc: 'Rede Record — WebMaster · Marcus Cunha',
      proj_record_doc_title: 'Rede Record · Marcus Cunha',
      proj_record_tag: 'Início de carreira',
      proj_record_role: 'WebMaster · Via Octagonal · Benfica, Rio de Janeiro',
      proj_record_quote:
        '"Primeira experiência com escala e prazo de verdade — sites e interfaces em ASP.NET em um dos maiores veículos de comunicação do país."',
      proj_record_h2_co:
        'Rede Record — um dos maiores veículos de comunicação do Brasil',
      proj_record_p_co:
        'Trabalhei pela empresa Octagonal, alocado na Rede Record de Benfica. Responsável pela gestão do site da gravadora — institucional, e-commerce e hotsites — e pela adequação de interfaces em sistemas ASP.NET (C#).',
      proj_record_h2_role: 'WebMaster full-stack — da diretoria ao código',
      proj_record_p_role1:
        'Programação em PHP puro com consultas SQL Server para o comercial. Responsável por todos os sites dos cantores da gravadora — Photoshop, HTML e CSS. Gestão de processos e adequação de interfaces em sistemas ASP.NET.',
      proj_record_p_role2:
        'Apesar de não ter subordinados, aprendi a lidar com a diretoria e a ter uma visão pragmática de projeto — uma das lições mais valiosas desta fase.',

      proj_ceci_meta_desc:
        'Fundação CECIERJ — Desenvolvedor Web · UI · Animador 2D · Marcus Cunha',
      proj_ceci_doc_title: 'CECIERJ · Marcus Cunha',
      proj_ceci_tag: 'Início de carreira · Fundação',
      proj_ceci_role: 'Desenvolvedor Web · UI · Animador 2D · Consórcio CEDERJ / UFRJ',
      proj_ceci_quote:
        '"Interfaces com forte preocupação com acessibilidade — em parceria com a UFRJ (COPPE) — e animação 2D quando o projeto pedia. Aprendi cedo que interface tem impacto real nas pessoas."',
      proj_ceci_sec_foundation: 'A fundação',
      proj_ceci_h2_foundation:
        'CECIERJ — ensino a distância acessível para todo o Brasil',
      proj_ceci_p_foundation:
        'A Fundação CECIERJ é responsável pelo Consórcio CEDERJ, que democratiza o acesso ao ensino superior público e gratuito no estado do Rio de Janeiro, com polos universitários em cidades do interior. Um projeto de impacto social profundo, em parceria com a UFRJ, COPPE e outras universidades estaduais.',
      proj_ceci_h2_role: 'Acessibilidade, animação e a origem do meu olhar para o usuário',
      proj_ceci_p_role1:
        'Desenvolvimento de interfaces educacionais com forte preocupação com acessibilidade — em parceria com a COPPE/UFRJ. Criação de animações 2D para conteúdos educativos, tornando o aprendizado a distância mais acessível e engajante.',
      proj_ceci_p_role2:
        'Foi aqui que aprendi cedo que interface tem impacto real nas pessoas — uma percepção que carrego em todos os projetos desde então.',
      proj_ceci_card_title: 'Fundação CECIERJ · Consórcio CEDERJ',
      proj_ceci_card_desc:
        'Interfaces educacionais com foco em acessibilidade para o ensino a distância — projeto de impacto social para democratizar o acesso ao ensino superior público no RJ.',

      proj_casa_meta_desc: 'Casa Digital — Analista Desenvolvedor Frontend · Marcus Cunha',
      proj_casa_doc_title: 'Casa Digital · Marcus Cunha',
      proj_casa_tag: 'Pleno · Agência',
      proj_casa_role: 'Analista Desenvolvedor Frontend · Agência full-service · Projetos públicos',
      proj_casa_quote:
        '"Sites de muito acesso como EduardoPaes15, MarcaRJ, GDF, Cidade Olímpica e Lei Sêca RJ — além de criação e gestão de e-mail marketing em grandes contas."',
      proj_casa_h2_co: 'Casa Digital — agência responsável por cases importantes do governo',
      proj_casa_p_co:
        'Agência full-service que atendia clientes governamentais e privados de alto perfil. Análise de sistemas, prototipação e entrega de interface para múltiplos clientes simultaneamente, com treinamentos internos em desenvolvimento rápido de UI.',
      proj_casa_h2_role:
        'Frontend em sites de grande visibilidade e disparo de e-mail marketing',
      proj_casa_p_role:
        'Frontend em sites de alto acesso para clientes como EduardoPaes15, MarcaRJ, Sérgio Cabral, GDF (Governo do Distrito Federal), Cidade Olímpica v.1 e Lei Sêca RJ. Também responsável pela criação e gestão do disparo de grandes contas de e-mail marketing com MailChimp e LocalWeb.',
      proj_casa_card1_t: 'RJ — Marca Registrada',
      proj_casa_card1_d:
        'Portal institucional da campanha de valorização do Rio de Janeiro — identidade forte e acesso amplo ao público.',
      proj_casa_card2_t: 'Cidade Olímpica',
      proj_casa_card2_d:
        'Portal da Cidade Olímpica — v.1 do site oficial das ações olímpicas do Rio de Janeiro, com grande volume de acessos.',
      proj_casa_card3_t: 'Lei Sêca RJ',
      proj_casa_card3_d:
        'Portal da campanha Lei Sêca do Rio de Janeiro — comunicação de alto impacto para conscientização no trânsito.',
      proj_casa_card4_t: 'GDF — Governo do Distrito Federal',
      proj_casa_card4_d:
        'Portal do Governo do Distrito Federal — presença institucional federal com interface moderna e acessível.',
      proj_casa_card5_t: 'ABP — Landing de Concurso',
      proj_casa_card5_d:
        'Landing page para concurso da ABP — conversão e experiência de inscrição otimizadas para alto volume.',

      proj_spassu_meta_desc: 'Spassu · Petrobras — Frontend UI Designer · Marcus Cunha',
      proj_spassu_doc_title: 'Spassu · Petrobras · Marcus Cunha',
      proj_spassu_tag: 'FrontEnd Pleno · UI/UX',
      proj_spassu_role:
        'Desenvolvedor Front-end · UI Designer · Transformação digital interna',
      proj_spassu_quote:
        '"Design Sprint, identidade de sistemas internos e frontend em VueJS — colaboração ativa no processo de transformação digital da maior empresa de energia do Brasil."',
      proj_spassu_h2_ctx: 'Spassu — consultoria em projetos internos da Petrobras',
      proj_spassu_p_ctx:
        'Contrato pela Spassu atuando em projetos internos de transformação digital da Petrobras. Dois períodos de atuação: primeiro como FrontEnd Pleno e UI/UX (jul/2019 – jul/2020), depois na Esteira Ágil (jul/2020 – nov/2020).',
      proj_spassu_h2_role:
        'Da ideação ao código — sistemas de grande porte com dados complexos',
      proj_spassu_p_role:
        'Fase de ideação com Design Sprint (Google), identidade visual dos sistemas internos, desenvolvimento frontend em JavaScript puro e VueJS com Vuex. Entrega de UI/UX em sistemas de grande porte com gráficos e dashboards de dados.',
      proj_spassu_p_video:
        'Apresentação em vídeo do contexto Spassu · Petrobras e do material de interface desta página.',
      proj_spassu_iframe_main: 'Loom — Spassu e Petrobras (portfólio)',
      proj_spassu_sec_pandora: 'Sistema Pandora',
      proj_spassu_h2_pandora: 'Loom — Pandora (parte 1 e 2)',
      proj_spassu_p_pandora: 'Parte 1 em cima, parte 2 abaixo — mesma ordem dos embeds que enviaste.',
      proj_spassu_iframe_p1: 'Loom — Sistema Pandora (1)',
      proj_spassu_iframe_p2: 'Loom — Sistema Pandora (2)',
      proj_spassu_gallery_aria: 'Galerias por projeto Spassu Petrobras',
      proj_spassu_gallery_eyebrow: 'Telas por projeto',
      proj_spassu_gallery_h2: 'Cada pasta = um case',
      proj_spassu_gallery_count: '4 projetos · 31 imagens',
      proj_spassu_card1_t: 'Busca Semântica de Documentos',
      proj_spassu_card1_d:
        'Interface de busca inteligente para documentos internos da Petrobras — UX orientada à relevância e eficiência na recuperação de informação.',
      proj_spassu_card2_t: 'Delfos — Previsão da data do primeiro óleo',
      proj_spassu_card2_d:
        'Sistema preditivo para estimativa de entregas no contexto de exploração de petróleo — dashboards de dados complexos e visualizações críticas.',
      proj_spassu_card3_t: 'Sistema de Qualidade de Produtos Químicos',
      proj_spassu_card3_d:
        'Qualiprod — sistema de qualificação de produtos químicos com interface especializada para controle de processos industriais internos.',
      proj_spassu_folder_lbl: 'Pasta',
      proj_spassu_internal: 'Interno',
      proj_spassu_lb_dialog: 'Galeria de imagens',
      proj_spassu_alt_bussola: 'Busca semântica — pré-visualização',
      proj_spassu_alt_delfos: 'Delfos — pré-visualização',
      proj_spassu_alt_qualiprod: 'Qualiprod — pré-visualização',
      proj_spassu_alt_pocos: 'Sistema de poços — pré-visualização',
      proj_spassu_aria_bussola: 'Galeria Busca semântica, 4 imagens',
      proj_spassu_aria_delfos: 'Galeria Delfos, 7 imagens',
      proj_spassu_aria_qualiprod: 'Galeria Qualiprod, 15 imagens',
      proj_spassu_aria_pocos: 'Galeria Sistema de poços, 5 imagens',
      proj_spassu_t_bussola: 'Busca semântica',
      proj_spassu_t_delfos: 'Delfos',
      proj_spassu_t_qualiprod: 'Qualiprod',
      proj_spassu_t_pocos: 'Sistema de poços',

      proj_par_meta_desc: 'Par Perfeito · Match Group — Frontend Developer · Marcus Cunha',
      proj_par_doc_title: 'Par Perfeito · Marcus Cunha',
      proj_par_h1_html: 'Par <strong>Perfeito</strong>',
      proj_par_tag: 'Pleno · Freelance',
      proj_par_role:
        'Analista Desenvolvedor Frontend · Match Group · Alto tráfego internacional',
      proj_par_quote:
        '"Produtos de relacionamento em alto tráfego — Tinder, Par Perfeito, Divino Amor, POF — além de e-commerce para Globo, GE e Americanas e e-mail marketing em escala."',
      proj_par_h2_co: 'Match Group — mais de 45 marcas líderes em relacionamento no mundo',
      proj_par_p_co:
        'Desde 2008, o Match Group mais que dobrou de tamanho: de essencialmente uma marca para mais de 45 marcas líderes de mercado com usuários em quase todos os países do mundo. A Par Perfeito, Divino Amor, Tinder e POF fazem parte deste ecossistema global de relacionamento.',
      proj_par_h2_role:
        'Frontend para produtos de relacionamento, e-commerce e campanhas de escala',
      proj_par_p_role1:
        'Desenvolvimento frontend para os principais produtos da empresa — desktop e mobile — incluindo Par Perfeito, Divino Amor, GE Encontros, Match Argentina e Match Chile. Landing pages para Tinder, Divino Amor, Amor e Fé e outros produtos do grupo.',
      proj_par_p_role2:
        'Além dos produtos de relacionamento: e-commerce e campanhas para Globo, GE e Americanas, com e-mail marketing em alta escala.',
      proj_par_gallery_aria: 'Landing pages e telas Par Perfeito · Match Group',
      proj_par_gallery_eyebrow: 'Frontend & design',
      proj_par_gallery_h2: 'Landings & campanhas — Match Group',
      proj_par_gallery_count: '5 imagens',
      proj_par_count_one: '1 imagem',
      proj_par_count_n: '{n} imagens',
      proj_par_lb_aria_multi: 'Galeria landings · imagem {i} de {n}',
      proj_par_frame_aria: 'Abrir galeria de landing pages, 5 imagens',
      proj_par_frame_alt:
        'Landing page Match Group — galeria landings Par Perfeito',
      proj_par_frame_title: 'Landings — Par Perfeito · Match Group',
      proj_par_caption_title: 'Landing pages & campanhas',
      proj_par_caption_type: 'HTML responsivo · alto tráfego · A/B',
      proj_par_lb_dialog: 'Galeria landing pages Par Perfeito',
      proj_par_card_t: 'Match.com — Tinder · Par Perfeito · Divino Amor · POF',
      proj_par_card_d:
        'Frontend de produtos de relacionamento do ecossistema Match Group — interfaces de alto tráfego para desktop e mobile em múltiplas marcas internacionais.',

      proj_inst_meta_desc: 'Instant Solutions — Analista Frontend UI · Marcus Cunha',
      proj_inst_doc_title: 'Instant Solutions · Marcus Cunha',
      proj_inst_h1_html: 'Instant <strong>Solutions</strong>',
      proj_inst_tag: 'Sênior',
      proj_inst_role:
        'Analista Desenvolvedor Frontend UI · UX com o mesmo peso que o código',
      proj_inst_quote:
        '"Ao entrar na empresa, documentei todos os processos e tarefas — e refiz a interface dos dois principais sistemas, colocando qualidade de UI e produto no centro."',
      proj_inst_h2_co: 'Instant Solutions — sistemas multitecnologia com visão de produto',
      proj_inst_p_co:
        'Empresa com sistemas complexos construídos em múltiplas linguagens (Django, React, PHP, Node). A proposta era dar linguagem moderna e melhoria constante de usabilidade a uma plataforma consolidada.',
      proj_inst_h2_role: 'Redesign dos sistemas principais e modernização de chatBots',
      proj_inst_p_role:
        'Documentei processos e tarefas em GitBook ao entrar na empresa. Remodelei via CSS e JavaScript os dois principais sistemas e chatBot de diversos clientes. Foco em análise, construção de interface e alinhamento com produto.',
      proj_inst_gallery_aria: 'Frontend design — telas Instant Solutions',
      proj_inst_gallery_h2: 'Telas em produção — uma pasta por projeto',
      proj_inst_gallery_count: '2 projetos',
      proj_inst_frame1_aria: 'Galeria sistema principal Instant Solutions',
      proj_inst_frame1_alt: 'Sistema principal Instant Solutions — capa da galeria',
      proj_inst_cap1_t: 'Sistema principal',
      proj_inst_cap1_type_prefix: '44 imagens · pasta',
      proj_inst_type1_html:
        '44 imagens · pasta <span lang="en">instantSolutionsSistema</span>',
      proj_inst_type2_html: '3 imagens · pasta <span lang="en">Agora</span>',
      proj_inst_frame2_aria: 'Galeria Ágora mobile chat',
      proj_inst_frame2_alt: 'Ágora mobile chat — capa da galeria',
      proj_inst_cap2_t: 'Ágora — Mobile Chat',
      proj_inst_cap2_type_prefix: '3 imagens · pasta',
      proj_inst_card1_t: 'Sistema Principal',
      proj_inst_card1_d:
        'Redesign completo do sistema core da Instant Solutions — nova interface, fluxos modernizados e melhoria significativa de usabilidade.',
      proj_inst_card2_t: 'Ágora — Mobile Chat',
      proj_inst_card2_d:
        'Interface de chatBot mobile para múltiplos clientes da plataforma — experiência conversacional com identidade visual moderna.',
      proj_inst_lb_dialog: 'Galeria Instant Solutions',
      proj_inst_summary_tpl: '{nk} projetos · {nt} imagens',
      proj_inst_aria_open_one: 'Abrir galeria — {title} — 1 imagem',
      proj_inst_aria_open_many: 'Abrir galeria — {title} — {n} imagens',
      proj_inst_lb_aria_multi:
        'Galeria Instant Solutions · imagem {i} de {n}',

      proj_tjrj_meta_desc: 'TJRJ · PJe — Marcus Cunha',
      proj_tjrj_doc_title: 'TJRJ · PJe · Marcus Cunha',
      proj_tjrj_h1_html: 'TJRJ · <strong>PJe</strong>',
      proj_tjrj_tag: 'Sênior → Especialista',
      proj_tjrj_role:
        'Analista Desenvolvedor Frontend Master / UI·UX · Atuação simultânea',
      proj_tjrj_quote:
        '"Sistemas críticos do Judiciário — zero tolerância a falhas. Concepção do PJe, estruturando fluxos e criando a base visual que orientou equipes inteiras."',
      proj_tjrj_h2_ctx: 'Tribunal de Justiça do Rio de Janeiro — sistemas públicos de alta criticidade',
      proj_tjrj_p_ctx1:
        'Atuação no TJRJ via parceiro, desenvolvendo o PJe (Processo Judicial Eletrônico). Sistemas sem margem de erro, usados por magistrados, advogados e servidores em todo o estado do Rio de Janeiro.',
      proj_tjrj_p_ctx2:
        'Paralelamente, atuação na Extreme Digital liderando biblioteca de componentes e plataforma de saúde digital nacional de alto volume — dois contextos distintos que exigiram adaptação constante de ritmo e exigência.',
      proj_tjrj_h2_role: 'Do design à arquitetura — usuário no centro do processo',
      proj_tjrj_p_role1:
        'No PJe, participei da concepção do sistema, estruturando fluxos e criando a base visual que orientou equipes inteiras de desenvolvimento. Atuação com Angular, PHP (PoC) e JavaScript vanilla, usando Figma para design e arquitetura limpa como diretriz técnica.',
      proj_tjrj_p_role2:
        'Na Extreme Digital, foco em microfrontends, Design System e GraphQL para uma plataforma de saúde com exigências severas de performance e acessibilidade.',
      proj_tjrj_iframe_whimsical: 'Diagrama TJRJ PJe — Whimsical',
      proj_tjrj_h2_diag: 'Fluxo — Whimsical',
      proj_tjrj_p_loom: 'Apresentação em vídeo complementar ao diagrama — contexto PJe e TJRJ.',
      proj_tjrj_iframe_loom: 'Loom — TJRJ · PJe',
      proj_tjrj_gallery_aria: 'Telas e interface PJe TJRJ',
      proj_tjrj_gallery_h2: 'PJe — usuário externo (TJRJ)',
      proj_tjrj_gallery_count: '7 imagens',
      proj_tjrj_frame_aria: 'Abrir galeria PJe TJRJ, 7 imagens',
      proj_tjrj_frame_alt: 'Telas do portal PJe — usuário externo TJRJ',
      proj_tjrj_cap_title: 'Portal do usuário externo',
      proj_tjrj_cap_type: 'Fluxos · interface · TJRJ',
      proj_tjrj_lb_dialog: 'Galeria PJe TJRJ',
      proj_tjrj_card1_t: 'PJe — Portal do Usuário Externo',
      proj_tjrj_card1_d:
        'Portal judicial eletrônico do TJRJ — concepção de UX, arquitetura de interface e Design System orientando o desenvolvimento de múltiplas equipes.',
      proj_tjrj_card2_t: 'Demo online — usuário externo',
      proj_tjrj_card2_d:
        'Protótipo do portal ainda publicado (Surge): referência de fluxos e interface para consulta.',
      proj_tjrj_card2_link: 'Abrir pjxternal.surge.sh',
      proj_tjrj_lb_title: 'PJe · Portal do usuário externo',
      proj_tjrj_lb_aria_multi: 'Galeria PJe · imagem {i} de {n}',
      proj_tjrj_sec_diag: 'Diagrama',

      proj_sefaz_meta_desc:
        'SEFAZ-RJ · SCOMEX — Analista Frontend · Marcus Cunha',
      proj_sefaz_doc_title: 'SEFAZ · Governo RJ · Marcus Cunha',
      proj_sefaz_h1_html: 'SEFAZ · <strong>Governo RJ</strong>',
      proj_sefaz_tag: 'Pleno → Sênior',
      proj_sefaz_role:
        'Analista Desenvolvedor Frontend · SEPLAG + Secretaria da Fazenda · Escala estadual',
      proj_sefaz_quote:
        '"Portais e sistemas da fazenda estadual com escala estadual e impacto direto no cidadão — o SCOMEX tornou-se referência nacional pela SEFAZ."',
      proj_sefaz_h2_ctx: 'Governo do Estado do Rio de Janeiro — SEPLAG e SEFAZ',
      proj_sefaz_p_ctx:
        'Atuação em dois órgãos do governo estadual do Rio de Janeiro. Na SEPLAG (Secretaria de Planejamento): portais de compras (licitação), portal do servidor, intranet, mídia indoor e portal de remuneração. Na SEFAZ (Secretaria da Fazenda): portais institucionais, sistemas de incentivos fiscais e o SCOMEX — projeto que se tornou referência nacional.',
      proj_sefaz_h2_role: 'Frontend sênior em sistemas de impacto para o cidadão',
      proj_sefaz_p_role:
        'Manutenção e gestão dos portais da Fazenda (HTML, CSS, JS, ADF Oracle, UX). Refatoração de arquitetura frontend com automatizadores (Gulp, Grunt, Sass) e geração de protótipos com Jekyll e Hexo.js. Todos os projetos com ênfase em responsividade, usabilidade e design moderno. Implantação de automatizadores de tarefas em toda a stack.',
      proj_sefaz_gallery_aria: 'Galerias frontend-design por projeto — SEFAZ e SEPLAG',
      proj_sefaz_gallery_h2: 'Telas em produção — uma pasta por projeto',
      proj_sefaz_sketch_sec: 'Frontend & design',
      proj_sefaz_sketch_h2: 'Sketches — referência visual',
      proj_sefaz_sketch_p_html:
        'É um dos meus jeitos de fazer <strong>frontend-design</strong> antes de codar: rascunhar fluxos, hierarquia e estados da interface para alinhar com o time e ir para o código com decisões já fechadas — implementação mais assertiva e menos retrabalho. O álbum no <a class="sketch-inline-link" href="https://photos.google.com/share/AF1QipMXYCySh4zL5ybW1YOr_V_CaIBno0XtY322R4-HYSpiZz5hWV6aSUHAFgvTAU5g7Q?key=c0RNVEJxMlVXNDZjMjM0S2JKOGM1cmhIQ004OGFB" target="_blank" rel="noopener noreferrer">Google Photos</a> documenta esse processo em projetos do governo estadual.',
      proj_sefaz_sketch_cta: 'Ver rascunhos e processo de UI',
      proj_sefaz_work_h2: 'Cases publicados — SEPLAG & SEFAZ',
      proj_sefaz_lb_dialog: 'Galeria frontend-design SEFAZ',
      proj_sefaz_summary_tpl: '{nk} projetos · {nt} imagens',
      proj_sefaz_open_gallery_tpl: 'Abrir galeria — {title} — {suffix}',
      proj_sefaz_lb_aria_multi: 'Galeria SEFAZ · imagem {i} de {n}',
      proj_sefaz_img_one: '1 imagem',
      proj_sefaz_img_n: '{n} imagens',
      proj_sefaz_type_psrj_html:
        '6 imagens · pasta <span lang="en">portalServidorRJ</span>',
      proj_sefaz_type_intra_html:
        '1 imagem · pasta <span lang="en">IntranetRJ</span>',
      proj_sefaz_type_novo_html:
        '2 imagens · pasta <span lang="en">novoPortalSefaz</span>',
      proj_sefaz_type_tesouro_html:
        '4 imagens · pasta <span lang="en">portalTesouroRJ</span>',
      proj_sefaz_type_sei_html:
        '2 imagens · pasta <span lang="en">PortalSEI</span>',
      proj_sefaz_type_rem_html:
        '6 imagens · pasta <span lang="en">consultaRemuneracaoRJ</span>',
      proj_sefaz_type_transp_html:
        '3 imagens · pasta <span lang="en">portal_transparencia</span>',
      proj_sefaz_type_padrao_html:
        '14 imagens · frontend-design · pasta <span lang="en">projeto_padraoVisualSistemasInternos</span>',
      proj_sefaz_type_bast_html:
        '18 imagens · pasta <span lang="en">BastidoresPlanejamentos</span>',
      proj_sefaz_lbl_tesouro: 'Portal do Tesouro RJ',
      proj_sefaz_lbl_rem: 'Consulta remuneração RJ',
      proj_sefaz_lbl_transp: 'Portal transparência',
      proj_sefaz_lbl_padrao: 'Padrão visual · sistemas internos',
      proj_sefaz_frame_bast: 'Bastidores · planejamento & processo',
      proj_sefaz_cap_bast_short: 'Bastidores · planejamento',
      proj_sefaz_land_title: 'Landing padrão',
      proj_sefaz_land_title_attr:
        'Novo Padrão Sistemas SEFAZ-RJ — landing de documentação',
      proj_sefaz_card_psrj_t: 'Portal do Servidor RJ',
      proj_sefaz_card_psrj_d:
        'Portal com contra-cheque digital e principais serviços para todos os servidores do Estado do Rio de Janeiro.',
      proj_sefaz_card_intra_t: 'Intranet Estado do RJ',
      proj_sefaz_card_intra_d:
        'Nova intranet da SEPLAG e Fazenda — acesso unificado para servidores estaduais com interface moderna e responsiva.',
      proj_sefaz_card_midia_t: 'Projeto Mídia Indoor',
      proj_sefaz_card_midia_d:
        'Sistema de sinalização digital interna para a Secretaria de Planejamento — exibição de conteúdo institucional em displays internos.',
      proj_sefaz_card_portal_t: 'Novo Portal SEFAZ RJ',
      proj_sefaz_card_portal_d:
        'Redesign completo do portal da Secretaria da Fazenda e Planejamento do Rio de Janeiro — referência estadual de 2015 a 2020.',
      proj_sefaz_card_tesouro_t: 'Novo Portal do Tesouro RJ',
      proj_sefaz_card_tesouro_d:
        'Portal institucional do Tesouro do Estado do Rio de Janeiro com foco em transparência pública e acesso à informação.',
      proj_sefaz_card_sei_t: 'Portal SEIRJ',
      proj_sefaz_card_sei_d:
        'Portal do Sistema Estadual de Incentivos da Fazenda e Planejamento RJ — interface para gestão de benefícios fiscais.',
      proj_sefaz_card_rem_t: 'Consulta Remuneração RJ',
      proj_sefaz_card_rem_d:
        'Portal público de transparência para consulta de remuneração de servidores do Estado do Rio de Janeiro.',
      proj_sefaz_card_bast_t: 'Bastidores — Scrum & Design Thinking',
      proj_sefaz_card_bast_d:
        'Documentação do processo: como aconteceu o planejamento de grandes sistemas do Estado do RJ — do Scrum ao Design Thinking.'
    },
    en: {
      meta_title_index: 'Marcus Cunha — Senior Frontend Engineer, UX/UI & AI for product teams',
      meta_keywords:
        'Marcus Cunha, senior frontend engineer, staff frontend, tech lead, React developer, Next.js, TypeScript, UX UI designer, design systems, micro-frontends, WCAG accessibility, web performance, artificial intelligence, LLM engineering, Claude AI, Brazil, remote international',
      meta_desc_index:
        'Marcus Cunha: senior frontend engineer, tech lead and UX/UI with 20+ years. React, Next.js, TypeScript, design systems, micro-frontends, web performance, accessibility and AI-assisted engineering (LLMs). Rio, São Paulo, remote worldwide.',
      meta_title_sobre: 'About · Marcus Cunha — career, frontend architecture & AI',
      meta_keywords_sobre:
        'Marcus Cunha bio, frontend developer story, frontend architecture, PJe Brazil, Petrobras, PUC-Rio, AI in software development, UX engineer career',
      meta_desc_sobre:
        'Full story of Marcus Cunha: from Flash to TypeScript, public and private sector, frontend architecture, PJe, Petrobras, design systems and AI studies at PUC-Rio.',

      og_site: 'Marcus Cunha — Portfolio',
      jsonld_job: 'Senior Frontend Engineer & UX/UI Designer',
      jsonld_desc:
        'Senior frontend engineer and UX/UI focused on React, Next.js, TypeScript, design systems, micro-frontends, web performance, accessibility (WCAG) and AI-powered delivery (LLMs, Claude). Tech lead on Brazil–Europe projects.',

      lang_pt_label: 'PT',
      lang_en_label: 'EN',
      lang_switch_aria: 'Site language',
      lang_intl_tooltip:
        'Open to international roles. English site: use the EN toggle.',

      a11y_skip: 'Skip to content',
      a11y_region: 'Accessibility tools',
      a11y_label: 'Accessibility',
      a11y_font_down: 'Decrease font size',
      a11y_font_reset: 'Reset font size',
      a11y_font_up: 'Increase font size',
      a11y_contrast: 'Contrast',
      a11y_libras: 'Sign language',
      a11y_libras_aria: 'Open VLibras (Brazilian Sign Language)',

      nav_sobre: 'About',
      nav_timeline: 'Career',
      nav_skills: 'Architecture',
      nav_contato: 'Contact',

      nav_id: 'Portfólio',

      hero_label: 'Frontend Engineer · UX/UI Designer · Applied AI (LLMs & automation)',
      hero_cred_heading: 'Education',
      hero_cred1_title: "Bachelor's — Universidade Estácio de Sá",
      hero_cred1_level: "Bachelor's",
      hero_cred1_school: 'Estácio',
      hero_cred1_course: 'Computer Science',
      hero_cred2_title: "Postgraduate — Universidade Estácio de Sá",
      hero_cred2_level: 'Postgraduate',
      hero_cred2_school: 'Estácio',
      hero_cred2_course: 'Analysis, Design & Systems Management',
      hero_cred3_title: 'Graduate specialization — PUC-Rio',
      hero_cred3_level: 'Specialization',
      hero_cred3_school: 'PUC-Rio',
      hero_cred3_course: 'IT Specialist · Full Stack',

      hero_puc_affil: 'Graduate specialization · PUC-Rio',
      hero_puc_link_title: 'PUC-Rio — official website',

      hero_role_html:
        '<strong>15+ years</strong> building interfaces that make sense — from code to experience, from startups to multinationals.',
      stat_exp: 'Years exp.',
      stat_companies: 'Companies',
      stat_projects: 'Projects',

      chip_agile_flow: 'Agile delivery',
      chip_accessibility: 'Accessibility',
      chip_product: 'Product',
      chip_it_support: 'IT support',

      cta_behance: 'Featured work',
      cta_cv: 'Résumé PDF',
      cta_timeline_pdf: 'Career timeline',
      cta_whatsapp_title: 'WhatsApp',
      cta_whatsapp_sub: '(21) 9 9555-6239',
      cta_email_title: 'Email',
      cta_email_sub: 'mystrader@gmail.com',
      aria_whatsapp: 'Copy number and choose whether to open WhatsApp Web',
      aria_email: 'Copy email to clipboard',
      aria_copy_phone: 'Copy number only',
      aria_copy_email: 'Copy email only',
      toast_copy_whatsapp_title: 'Number copied',
      toast_copy_whatsapp_sub: 'On your clipboard',
      toast_copy_email_title: 'Email copied',
      toast_copy_email_sub: 'On your clipboard · paste wherever you need it',
      toast_copy_clip_title: 'Copied',
      toast_copy_clip_sub: 'On your clipboard',
      wa_prompt_title: 'Open WhatsApp Web?',
      wa_prompt_yes: 'Yes',
      wa_prompt_no: 'No',
      aria_cv: 'Download résumé PDF',
      aria_timeline_pdf: 'Download career timeline PDF',

      badge_aria: 'Professional status: open to new opportunities',
      badge_html:
        '<span class="dot" aria-hidden="true"></span><span><strong>Open</strong> to national and international roles (Portuguese & Spanish)</span>',
      hero_location: 'Rio · São Paulo · Brazil · International · Remote',

      about_eyebrow: 'Professional narrative',
      about_lead:
        'The full story: from Flash to government and large-scale products, architecture mindset, studies at PUC-Rio and what frontend means to me today.',
      about_snippet_html: 'From ActionScript to TypeScript — <em>craft, systems and impact</em> in one thread.',
      about_btn: 'About me',

      nav_testimonials: 'Recommendations',

      tm_eyebrow: 'Peers & leaders',
      tm_heading_html: 'Professional <span>recommendations</span>',
      tm_sub: 'Excerpts colleagues wrote on LinkedIn over the years.',
      tm_note_html:
        'Published as recommendations on <a href="https://www.linkedin.com/in/marcuscunha-dev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',

      tl_heading: 'Professional <span>timeline</span>',
      tl_sub: 'Newest first — through the INSS internship (2004) and earlier freelance work.',
      tl_dir_top: '↑ Newest',
      tl_dir_bot: 'Career start ↓',
      tl_now_tag: '● Current role',
      tl_cta_projects: 'View projects',
      tl_cta_journey: 'View journey',

      entry_almaviva_title: 'Senior Frontend Engineer',
      entry_kaki_title: 'Specialist Frontend Engineer',
      entry_pje_title: 'Lead Frontend Developer / UI·UX',
      entry_spassu_title: 'Senior Front-end Developer · UI Designer',
      entry_instant_title: 'Specialist Frontend UI Analyst',
      entry_sefaz_title: 'Frontend Developer Specialist · UX & UI',
      entry_par_title: 'Mid-level Frontend Developer',
      entry_casa_title: 'Mid-level Frontend Developer',
      entry_arcon_title: '.NET / C# Developer · UI',
      entry_record_title: 'Webmaster',
      entry_ceci_title: 'Web Developer · UI · 2D Animator',
      entry_inss_title: 'Intern · Web development & IT support',
      entry_seed_title: 'Freelance · Web & IT',

      entry_almaviva_period: '2024<br>→ now',
      entry_almaviva_level: 'Senior',
      entry_almaviva_body:
        'Frontend tech leadership on a Brazil–Italy international program: architecture, digital visual identity and coordination of squads at global scale. Work aligned with the <strong>Prodesp portal ecosystem</strong> — integrations, UI consistency and product requirements for digital public services.',

      entry_kaki_level: 'Staff / Specialist',
      entry_kaki_body:
        'High-impact systems in São Paulo. Component architecture, critical integrations and performance on data-heavy platforms.',

      entry_pje_level: 'Senior → Specialist · Concurrent roles',
      entry_pje_body:
        'At PJe, mission-critical judiciary systems — zero tolerance for failure. At Extreme Digital, leading a component library and a national high-volume digital health platform.',

      entry_spassu_level: 'Agile delivery · Internal Petrobras via SPASSU',
      entry_spassu_body:
        'SPASSU contract on an internal Petrobras project: UI, visual consistency and agile delivery with the team.',

      entry_instant_level: 'Instant Solutions',
      entry_instant_body:
        'Analysis and UI build-out, UI quality and product alignment — UX weighted equally with code.',

      entry_sefaz_level: 'Government of Rio de Janeiro · State Treasury (SEFAZ-RJ)',
      entry_sefaz_body:
        'State treasury portals and systems — statewide scale, direct citizen impact. Minimal margin for error.',

      entry_par_level: 'Freelance · Match Group',
      entry_par_body:
        'High-traffic dating products — including <strong>Tinder</strong> and the Par Perfeito ecosystem — plus e-commerce, campaigns (Globo, GE, Americanas) and email marketing at scale.',

      entry_casa_level: 'Agency',
      entry_casa_body:
        'Full-service agency: systems analysis, prototyping and UI delivery for multiple clients. Internal training on fast UI development.',

      entry_arcon_level: 'Mid',
      entry_arcon_body:
        'Proprietary insurance platform: UI layer, screens and flows on the .NET stack — requirements tied to the business.',

      entry_record_level: 'Record TV network',
      entry_record_body:
        'ASP.NET sites and interfaces at one of the country’s largest media groups — first real taste of scale and deadlines.',

      entry_ceci_level: 'CECIERJ · Educational web & accessibility',
      entry_ceci_body:
        'Interfaces with strong accessibility focus — and 2D animation when the project called for it — early lessons that UI has real impact on people.',

      entry_inss_level: 'INSS · Internal portals & infrastructure',
      entry_inss_body:
        'First formal role in social security: internal sites and tools in <strong>WordPress</strong> and <strong>PHP</strong>, <strong>Linux</strong> servers and desktop support — web, ops and internal users in one daily challenge.',

      entry_seed_period: 'Freelance<br>until 2004',
      entry_seed_level: 'Pre-INSS · on-demand work',
      entry_seed_body:
        'Ad hoc work — pages and small sites, <strong>HTML/CSS</strong> tweaks and hardware support — the origin of the timeline: practice, curiosity and direct clients.',

      sk_heading: 'Architecture & <span>engineering</span>',
      sk_tagline_html: 'How I think in <em>systems</em>, not just <em>screens</em>.',
      sk_intro:
        'Beyond the framework of the week: module boundaries, team contracts, stable domain and how frontend plugs into the wider platform.',
      sk_card1_h: 'SOLID & sustainable code',
      sk_card1_p:
        'Cohesion, low coupling and decisions that survive library churn — testability and evolution without fear.',
      sk_card2_h: 'Micro-frontends',
      sk_card2_p:
        'Autonomous modules, shell and orchestration, versioning and clear agreements between squads to scale delivery.',
      sk_card3_h: 'Hexagonal & ports/adapters',
      sk_card3_p:
        'Domain at the center; UI, API and infra as adapters — valuable for shared libs, BFFs and integrations.',
      sk_comp_label: 'Practice, product & stack',
      sk_name_ds: 'Design System',
      sk_name_a11y: 'Accessibility (WCAG)',
      sk_name_ts: 'TypeScript',
      sk_name_perf: 'Web performance',
      sk_name_test: 'Testing & quality',
      sk_name_llm: 'LLMs & AI-assisted engineering',
      sk_name_claude: 'Claude & contextual workflows',
      sk_name_react: 'React / Next.js',
      sk_name_ng: 'Angular',
      sk_name_vue: 'Vue.js',
      sk_name_ux: 'UX / research',
      sk_name_figma: 'Figma & handoff',
      sk_name_git: 'Git / CI/CD',
      sk_name_node: 'Node.js & APIs',

      cta_h: 'Let’s build<br><span>something together?</span>',
      cta_sub: '🚨 Open for full-time, contract or freelance · remote.',
      cta_dl_label: 'Downloads · PDF',
      cta_cv_file: 'Résumé (senior)',

      foot_line1: '© 2026 Marcus Cunha',
      foot_line2: 'Frontend · UX/UI · Brazil · No template.',

      sobre_skip: 'Skip to content',
      sobre_back: 'Back to portfolio',
      sobre_h1: 'About <span>me</span>',
      sobre_lead:
        'Full narrative — from first freelance work to what I build today in architecture, product and experience.',
      sobre_quote:
        '“Technology changes, tools change — but building something that truly helps people is still what drives me.”',
      sobre_p1:
        'I started in 2003 building Flash sites with ActionScript as a freelancer for companies like Fisk and White Martins. Art and tech were always intertwined — music, painting and photography are part of my creative DNA. That naturally led me to frontend: the balance of aesthetics, usability and real impact.',
      sobre_p2:
        'In 2007 I formally began as a developer, not yet imagining how consistent the journey would become. Fifteen-plus years later I still write code with the same curiosity — with a much broader lens on architecture, product and experience.',
      sobre_p3:
        'I have worked across broadcast TV, government, fintech, startups and multinationals.',
      sobre_p4:
        'In the public sector I contributed to large programs such as CECIERJ, helping make distance learning more accessible with accessibility practices alongside UFRJ (COPPE).',
      sobre_p5:
        'I was also involved in digital transformation of several government systems, bridging UX, architecture and development — from discovery to validation with users.',
      sobre_p6:
        'In the private sector I worked on international platforms, including Tinder-related and other dating products, sharpening product sense, scale and decision-making.',
      sobre_p7:
        'At Spassu on Petrobras projects I deepened advanced design and frontend. At the Rio de Janeiro Court I helped shape PJe, structuring flows and a visual baseline that guided entire dev teams.',
      sobre_p8:
        'At Engineering I built components and architecture for a global API Gateway system (TIM as a key client). On Rio state’s SCOMEX I worked as frontend specialist and analyst on a program that became a national reference for the treasury.',
      sobre_p9:
        'More recently I helped build a CMS powering 80+ main portals for São Paulo state and led conception and engineering of an MVP for the state port sector.',
      sobre_p10:
        'Alongside delivery I keep a strong study habit. I am in postgraduate work at PUC-Rio and deepening AI — LLMs, automation and practical applications in software development.',
      sobre_p11:
        'Personally I am married and a parent — experiences that reinforce responsibility, balance and long-term thinking.',
      sobre_p12:
        'Today I do not see frontend as “just code”, but as a way to connect people, systems and decisions through well-built experiences.',

      sobre_foot: '← Back to portfolio',

      proj_nav_portfolio: 'Portfolio',
      proj_foot_back: '← Back to portfolio',
      proj_lang_pt_aria: 'Portuguese',
      proj_lang_en_aria: 'English',

      proj_eng_meta_desc:
        'Engineering — Front-end specialist, DHuO · Marcus Cunha',
      proj_eng_doc_title: 'Engineering · Marcus Cunha',
      proj_eng_hero_tag: 'Specialist',
      proj_eng_role:
        'Front-end specialist · Global product · São Paulo',
      proj_eng_quote:
        '"I architected the DHuO frontend — a full platform for API management and integration of systems, data and AI for world-class clients."',
      proj_eng_sec_company: 'The company',
      proj_eng_h2_company:
        'Global company based in Rome, 13,000 people in 40+ countries',
      proj_eng_p_company:
        'Engineering delivers innovative digital solutions for finance, government, health, smart cities, industry, energy and media. One of Europe’s largest IT firms, with high-impact projects and real complexity.',
      proj_eng_sec_role: 'My role',
      proj_eng_h2_role:
        'DHuO frontend architecture — API Management, iPaaS and AI platform',
      proj_eng_p_ds:
        'I architected and documented the DHuO Design System end to end: tokens → assets → core → npm publish, consumable across teams and frameworks (React, Vue, Angular).',
      proj_eng_p_mf:
        'Design System components (Storybook) in a monorepo, micro-frontends and API-first integration. Testing with Jest and Cypress.',
      proj_eng_sec_video: 'Video',
      proj_eng_h2_loom: 'Loom walkthrough',
      proj_eng_p_loom:
        'Video overview of the Engineering context and the DHuO product.',
      proj_eng_iframe_main: 'Loom — Engineering · DHuO',
      proj_eng_acc_live: 'Live — Code API',
      proj_eng_acc_live_p:
        'Loom focused on code and API integration in the product — a complement to the general DHuO walkthrough.',
      proj_eng_iframe_code: 'Loom — Live Code API (Engineering)',
      proj_eng_sec_work: 'Projects & work',
      proj_eng_h2_dhuo: 'DHuO — global product',
      proj_eng_card_dhuo_title: 'DHuO Platform',
      proj_eng_card_dhuo_desc:
        'Full API Management, iPaaS, data integration and on-demand AI. A world-class product with integrated modules and a shared Design System across squads.',
      proj_eng_card_cta: 'View product',

      proj_alm_meta_desc:
        'AlmaViva — Senior Frontend Engineer & Tech Lead · Marcus Cunha',
      proj_alm_doc_title: 'AlmaViva · Marcus Cunha',
      proj_alm_period: '2024 → now',
      proj_alm_role: 'Senior Frontend Engineer · Tech Lead · Brazil–Italy',
      proj_alm_quote:
        '"Technical leadership on an international-scale program — architecture, visual identity and squad management for a product that connects two countries."',
      proj_alm_sec_company: 'The company',
      proj_alm_h2_company: 'Leading Italian ICT group, 40+ years',
      proj_alm_p_company:
        'AlmaViva is one of Italy’s largest Information & Communication Technology companies, with a strong focus on digital transformation for businesses and public administration. In Brazil, it runs strategic projects with state governments, combining corporate scale with local delivery.',
      proj_alm_sec_role: 'My role',
      proj_alm_h2_role: 'Frontend engineer on strategic SP state government portals',
      proj_alm_p_role1:
        'I led frontend development for state portals and digital products — architecture, visual identity, React and JavaScript, and integration with critical backend services. The gallery below only includes public material for the <strong>Porto de São Sebastião</strong>; tracks such as PRODESP and ALESP have no shareable artifacts here.',
      proj_alm_p_role2:
        'I applied patterns such as SOLID, DRY, YAGNI, DDD and OOP to keep the codebase sustainable over time, with distributed teams and continuous delivery.',
      proj_alm_sd_eyebrow: 'System design · PCS',
      proj_alm_sd_h2: 'Scalable frontend architecture — Almaviva',
      proj_alm_sd_lead:
        'Technical case for the port portal: a foundation built for continuous evolution, team growth and integration with complex systems — beyond the gallery screens, layer and state design was explicitly documented.',
      proj_alm_sd_sum1: 'Overview and diagram',
      proj_alm_sd_btn_zoom: 'Open full-screen PCS architecture diagram',
      proj_alm_sd_zoom_hint: 'Click · enlarge',
      proj_alm_sd_figcap:
        'Architecture diagram (PCS) — reference to align team and stakeholders. Click the image for full size.',
      proj_alm_sd_p1:
        'The work was not only building UIs: structuring a solid base inspired by <strong>Clean Architecture</strong> and <strong>DDD</strong>, with clear layers — Presentation, Application, Domain and Infrastructure.',
      proj_alm_sd_sum2: 'Architecture decisions',
      proj_alm_sd_q1: 'The structure addresses typical large-application problems:',
      proj_alm_sd_li1: 'Reduce coupling between UI and business rules',
      proj_alm_sd_li2: 'Predictable, testable state',
      proj_alm_sd_li3: 'Parallel feature maintenance and evolution',
      proj_alm_sd_p2:
        '<strong>Approaches:</strong> layered architecture; <em>feature-first</em> (vertical slices); separation of state (global, server and UI); hooks as orchestration.',
      proj_alm_sd_sum3: 'State management',
      proj_alm_sd_st1: '<strong>Server state</strong> — APIs, cache and revalidation',
      proj_alm_sd_st2: '<strong>Global state</strong> — auth, shared preferences',
      proj_alm_sd_st3: '<strong>UI state</strong> — behaviour and visual control',
      proj_alm_sd_st4: '<strong>Local / URL state</strong> — filters and persisted navigation',
      proj_alm_sd_p3:
        'This separation cuts complexity and avoids common conflicts in large SPAs.',
      proj_alm_sd_sum4: 'Structure and data flow',
      proj_alm_sd_h3_1: 'Feature-first',
      proj_alm_sd_p4:
        'Each feature with its own tree: hooks, schemas, components, types and business rules — for parallel squads without losing structure.',
      proj_alm_sd_h3_2: 'Flow',
      proj_alm_sd_p5:
        '<strong>UI → hooks → application layer → APIs → persistence.</strong> Interceptors for auth, errors and request standardization.',
      proj_alm_sd_sum5: 'Stack and AI-ready view',
      proj_alm_sd_p6:
        '<strong>Stack:</strong> React, TypeScript, TanStack Query, Zustand, Zod, Vite — performance, scale and DX.',
      proj_alm_sd_p7:
        '<strong>AI-ready:</strong> domain decoupled from infrastructure eases future integrations (flow automation, recommendations, real-time analysis) without painful rewrites.',
      proj_alm_sd_sum6: 'Outcome and conclusion',
      proj_alm_sd_p8:
        '<strong>Outcome:</strong> scale features with less risk, reduce complexity over time, improve testability and delivery speed.',
      proj_alm_sd_p9:
        'In short: explicit focus on engineering, organization and code sustainability — the kind of decision that supports enterprise and critical systems.',
      proj_alm_gallery_aria: 'Projects and case studies',
      proj_alm_gallery_eyebrow: 'Published cases',
      proj_alm_gallery_h2: 'Projects & work',
      proj_alm_gallery_count: '1 case · 8 images',
      proj_alm_frame_aria: 'Open PCS gallery — Porto de São Sebastião, 8 images',
      proj_alm_frame_alt:
        'Porto de São Sebastião portal UI — Behance case preview',
      proj_alm_frame_hint: 'Click · gallery',
      proj_alm_frame_title: 'Porto de São Sebastião',
      proj_alm_frame_type: 'MVP · State port platform · São Paulo',
      proj_lb_close: 'Close gallery',
      proj_lb_prev: 'Previous image',
      proj_lb_next: 'Next image',
      proj_lb_dialog: 'PCS image gallery',
      proj_lb_gallery_fallback: 'Gallery',
      proj_lb_zoom_alt: 'Enlarged view',
      proj_lb_image_word: 'Image',
      proj_lb_of: 'of',
      proj_lb_aria_pcs: 'PCS gallery · image {i} of {n}',
      proj_lb_aria_single: '{title} — enlarged view',
      proj_lb_diagram_title: 'PCS architecture diagram',

      proj_common_sec_company: 'The company',
      proj_common_sec_role: 'My role',
      proj_common_sec_work: 'Projects & work',
      proj_common_cases_h2: 'Published cases',
      proj_common_behance: 'View on Behance',
      proj_common_sec_video: 'Video',
      proj_common_h2_loom: 'Loom walkthrough',
      proj_common_sec_context: 'The context',
      proj_common_eyebrow_fd: 'Frontend & design',
      proj_gallery_hint: 'Click · gallery',
      proj_click_prefix: 'Click ·',
      proj_sec_diagram: 'Diagram',
      proj_word_folder: 'folder',

      proj_record_meta_desc: 'Record TV — Webmaster · Marcus Cunha',
      proj_record_doc_title: 'Record TV · Marcus Cunha',
      proj_record_tag: 'Early career',
      proj_record_role: 'Webmaster · Via Octagonal · Benfica, Rio de Janeiro',
      proj_record_quote:
        '"First real taste of scale and deadlines — ASP.NET sites and interfaces at one of the country’s largest media networks."',
      proj_record_h2_co: 'Record TV — one of Brazil’s largest communication outlets',
      proj_record_p_co:
        'I worked for Octagonal, assigned to Record TV Benfica. I managed the label’s website — institutional, e-commerce and campaign sites — and adapted interfaces in ASP.NET (C#) systems.',
      proj_record_h2_role: 'Full-stack webmaster — from leadership to code',
      proj_record_p_role1:
        'PHP with SQL Server queries for sales. I owned artist sites — Photoshop, HTML and CSS. Process ownership and ASP.NET UI adaptation.',
      proj_record_p_role2:
        'Without direct reports, I learned to work with executive leadership and a pragmatic view of delivery — one of the most valuable lessons of this phase.',

      proj_ceci_meta_desc:
        'CECIERJ Foundation — Web Developer · UI · 2D Animator · Marcus Cunha',
      proj_ceci_doc_title: 'CECIERJ · Marcus Cunha',
      proj_ceci_tag: 'Early career · Foundation',
      proj_ceci_role: 'Web Developer · UI · 2D Animator · CEDERJ consortium / UFRJ',
      proj_ceci_quote:
        '"Interfaces with strong accessibility focus — with UFRJ (COPPE) — and 2D animation when the project needed it. I learned early that UI has real impact on people."',
      proj_ceci_sec_foundation: 'The foundation',
      proj_ceci_h2_foundation:
        'CECIERJ — accessible distance learning across Brazil',
      proj_ceci_p_foundation:
        'CECIERJ Foundation runs the CEDERJ consortium, widening access to free public higher education in Rio state, with university hubs in inland cities. Deep social impact, with UFRJ, COPPE and other state universities.',
      proj_ceci_h2_role: 'Accessibility, animation and the origin of my user focus',
      proj_ceci_p_role1:
        'Educational interfaces with strong accessibility — with COPPE/UFRJ. 2D animation for learning content, making distance learning more accessible and engaging.',
      proj_ceci_p_role2:
        'Where I learned early that UI has real impact — a lens I still bring to every project.',
      proj_ceci_card_title: 'CECIERJ Foundation · CEDERJ consortium',
      proj_ceci_card_desc:
        'Educational interfaces focused on accessibility for distance learning — social-impact work widening access to free public higher education in RJ.',

      proj_casa_meta_desc: 'Casa Digital — Frontend Developer · Marcus Cunha',
      proj_casa_doc_title: 'Casa Digital · Marcus Cunha',
      proj_casa_tag: 'Mid · Agency',
      proj_casa_role: 'Frontend Developer · Full-service agency · Public-sector projects',
      proj_casa_quote:
        '"High-traffic sites such as EduardoPaes15, MarcaRJ, GDF, Olympic City and Lei Sêca RJ — plus creation and management of email marketing at scale."',
      proj_casa_h2_co: 'Casa Digital — agency behind major government campaigns',
      proj_casa_p_co:
        'Full-service agency for high-profile government and private clients. Systems analysis, prototyping and UI delivery for multiple clients, with internal training on fast UI development.',
      proj_casa_h2_role: 'Frontend on high-visibility sites and email marketing sends',
      proj_casa_p_role:
        'Frontend on high-traffic sites for clients such as EduardoPaes15, MarcaRJ, Sérgio Cabral, GDF (Federal District government), Olympic City v1 and Lei Sêca RJ. I also ran large-scale MailChimp and LocalWeb email sends.',
      proj_casa_card1_t: 'RJ — Registered trademark',
      proj_casa_card1_d:
        'Institutional portal for the Rio promotion campaign — strong identity and broad public reach.',
      proj_casa_card2_t: 'Olympic City',
      proj_casa_card2_d:
        'Olympic City portal — v1 of Rio’s official Olympic actions site, very high traffic.',
      proj_casa_card3_t: 'Lei Sêca RJ',
      proj_casa_card3_d:
        'Campaign portal for Rio’s Lei Sêca — high-impact road-safety messaging.',
      proj_casa_card4_t: 'GDF — Federal District government',
      proj_casa_card4_d:
        'Federal District government portal — modern, accessible institutional presence.',
      proj_casa_card5_t: 'ABP — Contest landing',
      proj_casa_card5_d:
        'Contest landing for ABP — conversion and signup flows tuned for high volume.',

      proj_spassu_meta_desc: 'Spassu · Petrobras — Frontend UI Designer · Marcus Cunha',
      proj_spassu_doc_title: 'Spassu · Petrobras · Marcus Cunha',
      proj_spassu_tag: 'Frontend Mid · UI/UX',
      proj_spassu_role:
        'Front-end Developer · UI Designer · Internal digital transformation',
      proj_spassu_quote:
        '"Design Sprint, internal systems identity and VueJS frontend — hands-on in the digital transformation of Brazil’s largest energy company."',
      proj_spassu_h2_ctx: 'Spassu — consulting on internal Petrobras programs',
      proj_spassu_p_ctx:
        'Spassu contract on Petrobras internal transformation projects. Two phases: first as Frontend/UI/UX (Jul 2019 – Jul 2020), then Agile pipeline (Jul 2020 – Nov 2020).',
      proj_spassu_h2_role:
        'From ideation to code — large systems with complex data',
      proj_spassu_p_role:
        'Ideation with Design Sprint (Google), visual identity for internal systems, frontend in vanilla JS and Vue/Vuex. UI/UX delivery on large-scale systems with charts and data dashboards.',
      proj_spassu_p_video:
        'Video walkthrough of the Spassu · Petrobras context and UI material on this page.',
      proj_spassu_iframe_main: 'Loom — Spassu & Petrobras (portfolio)',
      proj_spassu_sec_pandora: 'Pandora system',
      proj_spassu_h2_pandora: 'Loom — Pandora (parts 1 & 2)',
      proj_spassu_p_pandora: 'Part 1 above, part 2 below — same order as the embeds you shared.',
      proj_spassu_iframe_p1: 'Loom — Pandora system (1)',
      proj_spassu_iframe_p2: 'Loom — Pandora system (2)',
      proj_spassu_gallery_aria: 'Spassu Petrobras project galleries',
      proj_spassu_gallery_eyebrow: 'Screens by project',
      proj_spassu_gallery_h2: 'Each folder = one case',
      proj_spassu_gallery_count: '4 projects · 31 images',
      proj_spassu_card1_t: 'Semantic document search',
      proj_spassu_card1_d:
        'Smart search UI for Petrobras internal documents — UX focused on relevance and retrieval efficiency.',
      proj_spassu_card2_t: 'Delfos — First-oil date forecast',
      proj_spassu_card2_d:
        'Predictive system for delivery estimates in oil exploration — complex dashboards and critical visualizations.',
      proj_spassu_card3_t: 'Chemical product quality system',
      proj_spassu_card3_d:
        'Qualiprod — chemical product qualification with specialized UI for internal industrial process control.',
      proj_spassu_folder_lbl: 'Folder',
      proj_spassu_internal: 'Internal',
      proj_spassu_lb_dialog: 'Image gallery',
      proj_spassu_alt_bussola: 'Semantic search — preview',
      proj_spassu_alt_delfos: 'Delfos — preview',
      proj_spassu_alt_qualiprod: 'Qualiprod — preview',
      proj_spassu_alt_pocos: 'Well system — preview',
      proj_spassu_aria_bussola: 'Semantic search gallery, 4 images',
      proj_spassu_aria_delfos: 'Delfos gallery, 7 images',
      proj_spassu_aria_qualiprod: 'Qualiprod gallery, 15 images',
      proj_spassu_aria_pocos: 'Well system gallery, 5 images',
      proj_spassu_t_bussola: 'Semantic search',
      proj_spassu_t_delfos: 'Delfos',
      proj_spassu_t_qualiprod: 'Qualiprod',
      proj_spassu_t_pocos: 'Well system',

      proj_par_meta_desc: 'Par Perfeito · Match Group — Frontend Developer · Marcus Cunha',
      proj_par_doc_title: 'Par Perfeito · Marcus Cunha',
      proj_par_h1_html: 'Par <strong>Perfeito</strong>',
      proj_par_tag: 'Mid · Freelance',
      proj_par_role:
        'Frontend Developer · Match Group · High international traffic',
      proj_par_quote:
        '"High-traffic dating products — Tinder, Par Perfeito, Divino Amor, POF — plus e-commerce for Globo, GE and Americanas and email marketing at scale."',
      proj_par_h2_co:
        'Match Group — 45+ leading dating brands worldwide',
      proj_par_p_co:
        'Since 2008 Match Group has more than doubled: from essentially one brand to 45+ market-leading brands with users in almost every country. Par Perfeito, Divino Amor, Tinder and POF are part of this global ecosystem.',
      proj_par_h2_role:
        'Frontend for dating products, e-commerce and large-scale campaigns',
      proj_par_p_role1:
        'Frontend for flagship products — desktop and mobile — including Par Perfeito, Divino Amor, GE Encontros, Match Argentina and Chile. Landing pages for Tinder, Divino Amor, Amor e Fé and other group products.',
      proj_par_p_role2:
        'Beyond dating: e-commerce and campaigns for Globo, GE and Americanas, with high-scale email marketing.',
      proj_par_gallery_aria: 'Landing pages & screens · Par Perfeito · Match Group',
      proj_par_gallery_eyebrow: 'Frontend & design',
      proj_par_gallery_h2: 'Landings & campaigns — Match Group',
      proj_par_gallery_count: '5 images',
      proj_par_count_one: '1 image',
      proj_par_count_n: '{n} images',
      proj_par_lb_aria_multi: 'Landings gallery · image {i} of {n}',
      proj_par_frame_aria: 'Open landing gallery, 5 images',
      proj_par_frame_alt:
        'Match Group landing — Par Perfeito gallery preview',
      proj_par_frame_title: 'Landings — Par Perfeito · Match Group',
      proj_par_caption_title: 'Landing pages & campaigns',
      proj_par_caption_type: 'Responsive HTML · high traffic · A/B',
      proj_par_lb_dialog: 'Par Perfeito landing gallery',
      proj_par_card_t: 'Match.com — Tinder · Par Perfeito · Divino Amor · POF',
      proj_par_card_d:
        'Frontend for Match Group dating products — high-traffic interfaces for desktop and mobile across international brands.',

      proj_inst_meta_desc: 'Instant Solutions — Frontend UI Analyst · Marcus Cunha',
      proj_inst_doc_title: 'Instant Solutions · Marcus Cunha',
      proj_inst_h1_html: 'Instant <strong>Solutions</strong>',
      proj_inst_tag: 'Senior',
      proj_inst_role:
        'Frontend UI Analyst · UX weighted equally with code',
      proj_inst_quote:
        '"When I joined, I documented every process and task — and rebuilt the UI of the two main systems, putting UI quality and product at the center."',
      proj_inst_h2_co:
        'Instant Solutions — multi-stack systems with product mindset',
      proj_inst_p_co:
        'Complex systems in Django, React, PHP and Node. The goal was to bring a modern language and continuous usability improvement to a mature platform.',
      proj_inst_h2_role:
        'Redesign of core systems and modernization of chatbots',
      proj_inst_p_role:
        'I documented processes in GitBook on day one. I reworked the two main systems and several client chatbots with CSS and JavaScript. Focus on analysis, UI build and product alignment.',
      proj_inst_gallery_aria: 'Frontend design — Instant Solutions screens',
      proj_inst_gallery_h2: 'Production screens — one folder per project',
      proj_inst_gallery_count: '2 projects',
      proj_inst_frame1_aria: 'Main Instant Solutions system gallery',
      proj_inst_frame1_alt: 'Main Instant Solutions system — gallery cover',
      proj_inst_cap1_t: 'Core system',
      proj_inst_cap1_type_prefix: '44 images · folder',
      proj_inst_type1_html:
        '44 images · folder <span lang="en">instantSolutionsSistema</span>',
      proj_inst_type2_html: '3 images · folder <span lang="en">Agora</span>',
      proj_inst_frame2_aria: 'Ágora mobile chat gallery',
      proj_inst_frame2_alt: 'Ágora mobile chat — gallery cover',
      proj_inst_cap2_t: 'Ágora — Mobile chat',
      proj_inst_cap2_type_prefix: '3 images · folder',
      proj_inst_card1_t: 'Core system',
      proj_inst_card1_d:
        'Full redesign of Instant Solutions’ core system — new UI, modernized flows and major usability gains.',
      proj_inst_card2_t: 'Ágora — Mobile chat',
      proj_inst_card2_d:
        'Mobile chatbot UI for multiple platform clients — conversational experience with a modern visual identity.',
      proj_inst_lb_dialog: 'Instant Solutions gallery',
      proj_inst_summary_tpl: '{nk} projects · {nt} images',
      proj_inst_aria_open_one: 'Open gallery — {title} — 1 image',
      proj_inst_aria_open_many: 'Open gallery — {title} — {n} images',
      proj_inst_lb_aria_multi:
        'Instant Solutions gallery · image {i} of {n}',

      proj_tjrj_meta_desc: 'TJRJ · PJe — Marcus Cunha',
      proj_tjrj_doc_title: 'TJRJ · PJe · Marcus Cunha',
      proj_tjrj_h1_html: 'TJRJ · <strong>PJe</strong>',
      proj_tjrj_tag: 'Senior → Specialist',
      proj_tjrj_role:
        'Lead Frontend Developer / UI·UX · Concurrent roles',
      proj_tjrj_quote:
        '"Mission-critical judiciary systems — zero tolerance for failure. Shaping PJe, structuring flows and the visual baseline that guided entire teams."',
      proj_tjrj_h2_ctx:
        'Rio de Janeiro Court — high-criticality public systems',
      proj_tjrj_p_ctx1:
        'Work at TJRJ via partner, building PJe (electronic judicial process). No margin for error — judges, lawyers and staff across Rio state.',
      proj_tjrj_p_ctx2:
        'In parallel, Extreme Digital: component library and national high-volume digital health — two contexts demanding constant pace and quality shifts.',
      proj_tjrj_h2_role: 'From design to architecture — user at the center',
      proj_tjrj_p_role1:
        'On PJe I helped conceive the system, structure flows and define the visual baseline for whole dev teams. Angular, PHP PoC, vanilla JS, Figma and clean architecture.',
      proj_tjrj_p_role2:
        'At Extreme Digital: micro-frontends, Design System and GraphQL for a health platform with strict performance and accessibility.',
      proj_tjrj_iframe_whimsical: 'TJRJ PJe diagram — Whimsical',
      proj_tjrj_h2_diag: 'Flow — Whimsical',
      proj_tjrj_p_loom: 'Complementary video to the diagram — PJe and TJRJ context.',
      proj_tjrj_iframe_loom: 'Loom — TJRJ · PJe',
      proj_tjrj_gallery_aria: 'PJe TJRJ screens and UI',
      proj_tjrj_gallery_h2: 'PJe — external user (TJRJ)',
      proj_tjrj_gallery_count: '7 images',
      proj_tjrj_frame_aria: 'Open PJe TJRJ gallery, 7 images',
      proj_tjrj_frame_alt: 'PJe portal screens — external user TJRJ',
      proj_tjrj_cap_title: 'External user portal',
      proj_tjrj_cap_type: 'Flows · interface · TJRJ',
      proj_tjrj_lb_dialog: 'PJe TJRJ gallery',
      proj_tjrj_card1_t: 'PJe — External user portal',
      proj_tjrj_card1_d:
        'TJRJ electronic judicial portal — UX conception, interface architecture and Design System guiding multiple teams.',
      proj_tjrj_card2_t: 'Online demo — external user',
      proj_tjrj_card2_d:
        'Prototype still hosted on Surge: reference flows and interface for review.',
      proj_tjrj_card2_link: 'Open pjxternal.surge.sh',
      proj_tjrj_lb_title: 'PJe · External user portal',
      proj_tjrj_lb_aria_multi: 'PJe gallery · image {i} of {n}',
      proj_tjrj_sec_diag: 'Diagram',

      proj_sefaz_meta_desc:
        'SEFAZ-RJ · SCOMEX — Frontend Analyst · Marcus Cunha',
      proj_sefaz_doc_title: 'SEFAZ · Rio Government · Marcus Cunha',
      proj_sefaz_h1_html: 'SEFAZ · <strong>Rio Government</strong>',
      proj_sefaz_tag: 'Mid → Senior',
      proj_sefaz_role:
        'Frontend Developer · SEPLAG + Treasury Secretariat · Statewide scale',
      proj_sefaz_quote:
        '"State treasury portals and systems at statewide scale with direct citizen impact — SCOMEX became a national reference for the treasury."',
      proj_sefaz_h2_ctx: 'Government of Rio de Janeiro — SEPLAG and SEFAZ',
      proj_sefaz_p_ctx:
        'Two bodies of Rio state government. At SEPLAG (Planning): procurement portals, employee portal, intranet, indoor media and payroll transparency. At SEFAZ (Treasury): institutional portals, tax incentive systems and SCOMEX — a nationally referenced program.',
      proj_sefaz_h2_role: 'Senior frontend on citizen-impact systems',
      proj_sefaz_p_role:
        'Maintained and evolved Treasury portals (HTML, CSS, JS, Oracle ADF, UX). Frontend refactors with Gulp, Grunt, Sass; prototypes with Jekyll and Hexo. Responsive, usable, modern UI and automation across the stack.',
      proj_sefaz_gallery_aria: 'Frontend-design galleries by project — SEFAZ & SEPLAG',
      proj_sefaz_gallery_h2: 'Production screens — one folder per project',
      proj_sefaz_sketch_sec: 'Frontend & design',
      proj_sefaz_sketch_h2: 'Sketches — visual reference',
      proj_sefaz_sketch_p_html:
        'One way I do <strong>frontend-design</strong> before coding: sketch flows, hierarchy and UI states to align with the team and ship code with decisions already made — tighter execution, less rework. The <a class="sketch-inline-link" href="https://photos.google.com/share/AF1QipMXYCySh4zL5ybW1YOr_V_CaIBno0XtY322R4-HYSpiZz5hWV6aSUHAFgvTAU5g7Q?key=c0RNVEJxMlVXNDZjMjM0S2JKOGM1cmhIQ004OGFB" target="_blank" rel="noopener noreferrer">Google Photos</a> album documents this process on state government projects.',
      proj_sefaz_sketch_cta: 'View sketches and UI process',
      proj_sefaz_work_h2: 'Published cases — SEPLAG & SEFAZ',
      proj_sefaz_lb_dialog: 'SEFAZ frontend-design gallery',
      proj_sefaz_summary_tpl: '{nk} projects · {nt} images',
      proj_sefaz_open_gallery_tpl: 'Open gallery — {title} — {suffix}',
      proj_sefaz_lb_aria_multi: 'SEFAZ gallery · image {i} of {n}',
      proj_sefaz_img_one: '1 image',
      proj_sefaz_img_n: '{n} images',
      proj_sefaz_type_psrj_html:
        '6 images · folder <span lang="en">portalServidorRJ</span>',
      proj_sefaz_type_intra_html:
        '1 image · folder <span lang="en">IntranetRJ</span>',
      proj_sefaz_type_novo_html:
        '2 images · folder <span lang="en">novoPortalSefaz</span>',
      proj_sefaz_type_tesouro_html:
        '4 images · folder <span lang="en">portalTesouroRJ</span>',
      proj_sefaz_type_sei_html:
        '2 images · folder <span lang="en">PortalSEI</span>',
      proj_sefaz_type_rem_html:
        '6 images · folder <span lang="en">consultaRemuneracaoRJ</span>',
      proj_sefaz_type_transp_html:
        '3 images · folder <span lang="en">portal_transparencia</span>',
      proj_sefaz_type_padrao_html:
        '14 images · frontend-design · folder <span lang="en">projeto_padraoVisualSistemasInternos</span>',
      proj_sefaz_type_bast_html:
        '18 images · folder <span lang="en">BastidoresPlanejamentos</span>',
      proj_sefaz_lbl_tesouro: 'Rio Treasury portal',
      proj_sefaz_lbl_rem: 'RJ salary lookup',
      proj_sefaz_lbl_transp: 'Transparency portal',
      proj_sefaz_lbl_padrao: 'Visual standard · internal systems',
      proj_sefaz_frame_bast: 'Behind the scenes · planning & process',
      proj_sefaz_cap_bast_short: 'Behind the scenes · planning',
      proj_sefaz_land_title: 'Standards landing',
      proj_sefaz_land_title_attr:
        'New SEFAZ-RJ systems standard — documentation landing',
      proj_sefaz_card_psrj_t: 'RJ Employee Portal',
      proj_sefaz_card_psrj_d:
        'Portal with digital payslip and core services for all Rio state employees.',
      proj_sefaz_card_intra_t: 'RJ State intranet',
      proj_sefaz_card_intra_d:
        'New SEPLAG & Treasury intranet — unified access for state staff with a modern responsive UI.',
      proj_sefaz_card_midia_t: 'Indoor media project',
      proj_sefaz_card_midia_d:
        'Digital signage for the Planning Secretariat — institutional content on internal displays.',
      proj_sefaz_card_portal_t: 'New SEFAZ RJ portal',
      proj_sefaz_card_portal_d:
        'Full redesign of the Treasury & Planning portal — statewide reference from 2015 to 2020.',
      proj_sefaz_card_tesouro_t: 'New Rio Treasury portal',
      proj_sefaz_card_tesouro_d:
        'Institutional Treasury portal focused on transparency and information access.',
      proj_sefaz_card_sei_t: 'SEIRJ portal',
      proj_sefaz_card_sei_d:
        'State incentive system portal for Treasury & Planning — fiscal benefit management UI.',
      proj_sefaz_card_rem_t: 'RJ salary transparency',
      proj_sefaz_card_rem_d:
        'Public transparency portal for Rio state employee compensation.',
      proj_sefaz_card_bast_t: 'Behind the scenes — Scrum & Design Thinking',
      proj_sefaz_card_bast_d:
        'Process documentation: how large RJ state systems were planned — from Scrum to Design Thinking.'
    }
  };

  function getLangFromQuery() {
    var q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en') return 'en';
    if (q === 'pt') return 'pt';
    return null;
  }

  function getStoredLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'en' || s === 'pt') return s;
    } catch (e) {}
    return null;
  }

  function detectLang() {
    var q = getLangFromQuery();
    if (q) return q;
    var s = getStoredLang();
    if (s) return s;
    if (navigator.language && navigator.language.toLowerCase().indexOf('en') === 0) return 'en';
    return 'pt';
  }

  function t(lang, key) {
    var bundle = STR[lang];
    if (!bundle || !Object.prototype.hasOwnProperty.call(bundle, key)) return '';
    return bundle[key];
  }

  function applyText(lang, page) {
    var bundle = STR[lang];
    if (!bundle) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key || !bundle[key]) return;
      el.textContent = bundle[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key || !bundle[key]) return;
      el.innerHTML = bundle[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (!key || !bundle[key]) return;
      el.setAttribute('placeholder', bundle[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key || !bundle[key]) return;
      el.setAttribute('aria-label', bundle[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (!key || !bundle[key]) return;
      el.setAttribute('title', bundle[key]);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (!key || !bundle[key]) return;
      el.setAttribute('alt', bundle[key]);
    });

    document.querySelectorAll('[data-title-i18n]').forEach(function (el) {
      var tk = el.getAttribute('data-title-i18n');
      if (!tk || !bundle[tk]) return;
      el.setAttribute('data-title', bundle[tk]);
    });

    var projectMeta = {
      engineering: { titleKey: 'proj_eng_doc_title', descKey: 'proj_eng_meta_desc' },
      almaviva: { titleKey: 'proj_alm_doc_title', descKey: 'proj_alm_meta_desc' },
      record: { titleKey: 'proj_record_doc_title', descKey: 'proj_record_meta_desc' },
      cecierj: { titleKey: 'proj_ceci_doc_title', descKey: 'proj_ceci_meta_desc' },
      casa_digital: { titleKey: 'proj_casa_doc_title', descKey: 'proj_casa_meta_desc' },
      spassu: { titleKey: 'proj_spassu_doc_title', descKey: 'proj_spassu_meta_desc' },
      sefaz_rj: { titleKey: 'proj_sefaz_doc_title', descKey: 'proj_sefaz_meta_desc' },
      par_perfeito: { titleKey: 'proj_par_doc_title', descKey: 'proj_par_meta_desc' },
      instant_solutions: { titleKey: 'proj_inst_doc_title', descKey: 'proj_inst_meta_desc' },
      tjrj_pje: { titleKey: 'proj_tjrj_doc_title', descKey: 'proj_tjrj_meta_desc' }
    };
    if (projectMeta[page]) {
      var pm = projectMeta[page];
      if (bundle[pm.titleKey]) document.title = bundle[pm.titleKey];
      var mdP = document.querySelector('meta[name="description"]');
      if (mdP && bundle[pm.descKey]) mdP.setAttribute('content', bundle[pm.descKey]);
    }

    if (page === 'index') {
      document.title = bundle.meta_title_index;
      var mkw = document.querySelector('meta[name="keywords"]');
      if (mkw && bundle.meta_keywords) mkw.setAttribute('content', bundle.meta_keywords);
      var md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', bundle.meta_desc_index);
      var ogd = document.querySelector('meta[property="og:description"]');
      if (ogd) ogd.setAttribute('content', bundle.meta_desc_index);
      var twd = document.querySelector('meta[name="twitter:description"]');
      if (twd) twd.setAttribute('content', bundle.meta_desc_index);
      var ogt = document.querySelector('meta[property="og:title"]');
      if (ogt) ogt.setAttribute('content', bundle.meta_title_index);
      var twt = document.querySelector('meta[name="twitter:title"]');
      if (twt) twt.setAttribute('content', bundle.meta_title_index);
    }

    if (page === 'sobre') {
      document.title = bundle.meta_title_sobre;
      var mkw2 = document.querySelector('meta[name="keywords"]');
      if (mkw2 && bundle.meta_keywords_sobre) mkw2.setAttribute('content', bundle.meta_keywords_sobre);
      var md2 = document.querySelector('meta[name="description"]');
      if (md2) md2.setAttribute('content', bundle.meta_desc_sobre);
      var ogd2 = document.querySelector('meta[property="og:description"]');
      if (ogd2) ogd2.setAttribute('content', bundle.meta_desc_sobre);
      var twd2 = document.querySelector('meta[name="twitter:description"]');
      if (twd2) twd2.setAttribute('content', bundle.meta_desc_sobre);
      var ogt2 = document.querySelector('meta[property="og:title"]');
      if (ogt2) ogt2.setAttribute('content', bundle.meta_title_sobre);
      var twt2 = document.querySelector('meta[name="twitter:title"]');
      if (twt2) twt2.setAttribute('content', bundle.meta_title_sobre);
    }

    var ogSite = document.querySelector('meta[property="og:site_name"]');
    if (ogSite) ogSite.setAttribute('content', bundle.og_site);
    var ogLoc = document.querySelector('meta[property="og:locale"]');
    if (ogLoc) ogLoc.setAttribute('content', lang === 'en' ? 'en_US' : 'pt_BR');

    updateJsonLd(lang);

    syncInternalLinks(lang);
    updateHreflang(lang);
    updateLangSwitchUI(lang);
  }

  function updateJsonLd(lang) {
    var el = document.getElementById('jsonld-person');
    if (!el) return;
    var b = STR[lang];
    var pageUrl = window.location.href.split('#')[0].split('?')[0];
    var data = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Marcus Cunha',
      url: pageUrl,
      jobTitle: b.jsonld_job,
      description: b.jsonld_desc,
      email: 'mystrader@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/marcuscunha-dev/',
        'https://www.behance.net/mystrader',
        'https://github.com/marcuscunha-dev'
      ],
      knowsAbout: [
        'Senior Frontend Engineer',
        'React',
        'Next.js',
        'TypeScript',
        'UX/UI Design',
        'Design Systems',
        'Micro-frontends',
        'Web Accessibility',
        'Web Performance',
        'Tech Lead',
        'Artificial Intelligence',
        'LLM',
        'Claude AI',
        'Software Architecture'
      ],
      nationality: { '@type': 'Country', name: 'Brazil' }
    };
    try {
      el.textContent = JSON.stringify(data);
    } catch (e) {}
  }

  function syncInternalLinks(lang) {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (!h || h.indexOf('http') === 0 || h.indexOf('//') === 0 || h.indexOf('#') === 0 || h.indexOf('mailto:') === 0) return;
      if (h.indexOf('docs/') === 0) return;
      var match = h.match(/^([^?#]+\.html)(\?[^#]*)?(#.*)?$/);
      if (!match) return;
      var path = match[1];
      var hash = match[3] || '';
      var params = new URLSearchParams(match[2] ? match[2].replace(/^\?/, '') : '');
      if (lang === 'en') params.set('lang', 'en');
      else params.delete('lang');
      var qs = params.toString();
      a.setAttribute('href', path + (qs ? '?' + qs : '') + hash);
    });
  }

  function updateHreflang(lang) {
    var linkPt = document.querySelector('link[hreflang="pt-BR"]');
    var linkEn = document.querySelector('link[hreflang="en"]');
    var origin = window.location.origin;
    var path = window.location.pathname;
    var file = path.split('/').pop() || 'index.html';
    var dir = path.replace(/[^/]+$/, '');
    var ptLink = origin + dir + file;
    var enLink = origin + dir + file + '?lang=en';

    if (linkPt) linkPt.setAttribute('href', ptLink);
    if (linkEn) linkEn.setAttribute('href', enLink);
    var linkDef = document.querySelector('link[hreflang="x-default"]');
    if (linkDef) linkDef.setAttribute('href', ptLink);

    var canon = document.querySelector('link[rel="canonical"]');
    if (canon) {
      canon.setAttribute('href', lang === 'en' ? enLink : ptLink);
    }

    var ogurl = document.querySelector('meta[property="og:url"]');
    if (ogurl) {
      ogurl.setAttribute('content', window.location.href.split('#')[0]);
    }
  }

  function updateLangSwitchUI(lang) {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var target = btn.getAttribute('data-lang-btn');
      var isActive = target === lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.classList.toggle('is-active', isActive);
    });
  }

  function setLang(lang, opts) {
    opts = opts || {};
    if (lang !== 'en' && lang !== 'pt') lang = 'pt';
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    document.documentElement.setAttribute('data-lang', lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    var page = document.documentElement.getAttribute('data-i18n-page') || 'index';
    applyText(lang, page);

    var sq = document.querySelector('.sobre-quote p');
    if (sq) sq.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    document.querySelectorAll('.page-quote p').forEach(function (el) {
      el.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    });

    var hist = opts.history != null ? opts.history : 'replace';
    if (hist !== 'none') {
      var u = new URL(window.location.href);
      if (lang === 'en') u.searchParams.set('lang', 'en');
      else u.searchParams.delete('lang');
      var next = u.pathname + u.search + u.hash;
      if (hist === 'push') history.pushState(null, '', next);
      else history.replaceState(null, '', next);
    }

    if (typeof feather !== 'undefined') feather.replace({ 'stroke-width': 1.75 });

    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang: lang } }));
  }

  function wireLangButtons() {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-lang-btn');
        setLang(target, { history: 'push' });
      });
    });
  }

  function init() {
    wireLangButtons();
    window.addEventListener('popstate', function () {
      var q = getLangFromQuery();
      var lang = q === 'en' ? 'en' : 'pt';
      setLang(lang, { history: 'none' });
    });
    var q = getLangFromQuery();
    setLang(detectLang(), { history: q ? 'none' : 'replace' });
  }

  root.MCI18N = {
    STR: STR,
    detectLang: detectLang,
    setLang: setLang,
    t: t,
    applyText: applyText,
    wireLangButtons: wireLangButtons,
    init: init
  };
})(typeof window !== 'undefined' ? window : this);
