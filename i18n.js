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
      sobre_foot: '← Voltar ao portfólio'
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

      sobre_foot: '← Back to portfolio'
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
