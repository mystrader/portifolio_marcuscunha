(function () {
  'use strict';

  var STR_TM = {
    pt: {
      tm_prev: 'Depoimento anterior',
      tm_next: 'Próximo depoimento',
      tm_dot_aria: 'Ir para o depoimento {n} de {t}',
      tm_region_aria: 'Carrossel de depoimentos',
      tm_dots_group: 'Índice de depoimentos',
      tm_live: 'Depoimento {n} de {t}'
    },
    en: {
      tm_prev: 'Previous testimonial',
      tm_next: 'Next testimonial',
      tm_dot_aria: 'Go to testimonial {n} of {t}',
      tm_region_aria: 'Testimonials carousel',
      tm_dots_group: 'Testimonial index',
      tm_live: 'Testimonial {n} of {t}'
    }
  };

  var DATA = [
    {
      img: 'imagens/avatars/gleziane.jpeg',
      pt: {
        name: 'Gleziane Alves Zandona',
        role: 'QA Analyst · Testes de software · Qualidade',
        quote:
          'O Marcus é extremamente comprometido com o que faz e sempre busca entregar o melhor resultado possível. Além disso, tem uma postura muito colaborativa, está sempre disposto a ajudar, trocar ideias e apoiar o time, o que torna o ambiente de trabalho muito mais leve e produtivo.'
      },
      en: {
        name: 'Gleziane Alves Zandona',
        role: 'QA Analyst · Software testing · Quality assurance',
        quote:
          'Marcus is deeply committed and always aims for the best outcome. He is collaborative—always ready to help, share ideas and support the team—which makes work lighter and more productive.'
      }
    },
    {
      img: 'imagens/avatars/andre_vinicius.jpeg',
      pt: {
        name: 'André Vinicius Moraes da Costa',
        role: 'SRE · Command Center · Front-end & confiabilidade',
        quote:
          'Estava junto quando o Marcus começou a desenvolver sua carreira. Logo as qualidades de apuração, síntese e técnica se sobressaíram. Excelente profissional, técnico e empreendedor.'
      },
      en: {
        name: 'André Vinicius Moraes da Costa',
        role: 'SRE · Command center · Front-end & reliability',
        quote:
          'I was there when Marcus started building his career. Soon his precision, synthesis and technical depth stood out. An excellent professional—technical and entrepreneurial.'
      }
    },
    {
      img: 'imagens/avatars/ian.jpeg',
      pt: {
        name: 'Ian Felix',
        role: 'Senior Frontend Developer · React · TypeScript · Next.js',
        quote:
          'Eu tive o privilégio de trabalhar com o Marcus, e posso afirmar que ele é um profissional excepcional e uma pessoa incrível. Marcus é um talentoso desenvolvedor front-end com amplo conhecimento em desenvolvimento web; contribuiu desde o início do projeto mostrando de forma clara suas habilidades e competências. Além de fazer entregas de alta qualidade, também é uma pessoa colaborativa e inspiradora para trabalhar junto.'
      },
      en: {
        name: 'Ian Felix',
        role: 'Senior Frontend Developer · React · TypeScript · Next.js',
        quote:
          'I had the privilege of working with Marcus—an exceptional professional and person. A talented front-end developer with strong web expertise; from the start he made skills and ownership visible. High-quality delivery and an inspiring teammate.'
      }
    },
    {
      img: 'imagens/avatars/matheus_lucas.jpeg',
      pt: {
        name: 'Matheus Lucas',
        role: 'Analista de Software Sênior · Backend · Go',
        quote:
          'Profissional extremamente capacitado e pessoa fantástica! Assim que comecei a trabalhar com ele, sempre mostrou-se disponível pra tirar minhas dúvidas com muita clareza e calma.'
      },
      en: {
        name: 'Matheus Lucas',
        role: 'Senior Software Analyst · Backend · Go',
        quote:
          'Highly skilled and a fantastic person. From my first days working with him, he was always available to answer questions with clarity and calm.'
      }
    },
    {
      img: 'imagens/avatars/wallison_marinho.jpeg',
      pt: {
        name: 'Wallisson Silva Marinho',
        role: 'Analista desenvolvedor · Golang · React',
        quote:
          'Excelente pessoa e profissional, com ótima capacidade técnica, esforçado e sempre disponível para ajudar. Marcus é uma ótima adição para qualquer equipe.'
      },
      en: {
        name: 'Wallisson Silva Marinho',
        role: 'Developer analyst · Golang · React',
        quote:
          'Excellent person and professional, strong technically, hardworking and always willing to help. Marcus is a great addition to any team.'
      }
    },
    {
      img: 'imagens/avatars/kaique_marinho.jpeg',
      pt: {
        name: 'Kaique Moreira',
        role: 'Backend Engineer · Go (Golang)',
        quote:
          'Marcus é um excelente profissional e uma pessoa melhor ainda, dedicado. Trabalhamos juntos em dois projetos incríveis, e é uma honra ter recebido e compartilhado experiências.'
      },
      en: {
        name: 'Kaique Moreira',
        role: 'Backend Engineer · Go (Golang)',
        quote:
          'Marcus is an excellent professional and an even better person—dedicated. We worked together on two great projects; it was an honour to share that experience.'
      }
    },
    {
      img: 'imagens/avatars/letice_marinho.jpeg',
      pt: {
        name: 'Letice Botelho',
        role: 'Agilista · Scrum Master · Agile Coach',
        quote:
          'Marcus é um profissional excelente, front-end que dá valor de verdade para a boa experiência dos seus usuários. Ter você no meu time da Transformação Digital na Petrobras trouxe muito valor ao projeto que entregamos.'
      },
      en: {
        name: 'Letice Botelho',
        role: 'Agile practitioner · Scrum Master · Agile Coach',
        quote:
          'Marcus is an outstanding professional—a front-end engineer who truly cares about user experience. Having you on my Digital Transformation team at Petrobras added real value to what we delivered.'
      }
    },
    {
      img: 'imagens/avatars/gustavo_barboza.jpeg',
      pt: {
        name: 'Gustavo Barboza Marques',
        role: 'Arquiteto de software · Java · Spring · AWS',
        quote:
          'Excelente profissional. Domina a fundo o desenvolvimento front-end e possui excelentes qualidades pessoais que o tornam um ótimo companheiro de trabalho.'
      },
      en: {
        name: 'Gustavo Barboza Marques',
        role: 'Software architect · Java · Spring · AWS',
        quote:
          'Excellent professional. He masters front-end development in depth and has strong personal qualities that make him a great colleague.'
      }
    },
    {
      img: 'imagens/avatars/guto_correia.jpeg',
      pt: {
        name: 'Guto Correia',
        role: 'Gerente de Marketing Operacional',
        quote: 'Excelente profissional. Sempre pronto para ajudar e para apresentar soluções.'
      },
      en: {
        name: 'Guto Correia',
        role: 'Operational marketing manager',
        quote: 'Excellent professional—always ready to help and to propose solutions.'
      }
    },
    {
      img: 'imagens/avatars/cezar_mourao.jpeg',
      pt: {
        name: 'Cezar Mourão Padilha',
        role: 'Professor · Educação',
        quote: 'Marcus é um excelente profissional, perfeccionista, detalhista e muito responsável.'
      },
      en: {
        name: 'Cezar Mourão Padilha',
        role: 'Educator',
        quote: 'Marcus is an excellent professional—perfectionist, detail-oriented and very responsible.'
      }
    },
    {
      img: 'imagens/avatars/carlos_rodrigues.jpeg',
      pt: {
        name: 'Carlos Rodrigues',
        role: 'Técnico de suporte industrial',
        quote:
          'Marcus é um profissional sério e muito competente na área de desenvolvimento web, atuando em soluções de e-commerce com grande comprometimento.'
      },
      en: {
        name: 'Carlos Rodrigues',
        role: 'Industrial support technician',
        quote:
          'Marcus is a serious and highly competent web professional, working on e-commerce solutions with strong commitment.'
      }
    },
    {
      img: 'imagens/avatars/cassio_lima.jpeg',
      pt: {
        name: 'Cassio Lima',
        role: 'Developer · .NET · Azure · DevOps',
        quote:
          'Ótimo profissional: pontualidade e responsabilidade com tarefas e prazos fazem parte do cotidiano dele. Seguro no que faz e muito bem informado na área.'
      },
      en: {
        name: 'Cassio Lima',
        role: 'Developer · .NET · Azure · DevOps',
        quote:
          'Great professional—punctuality and accountability for tasks and deadlines are part of his routine. Confident in his work and very well informed in his field.'
      }
    },
    {
      img: 'imagens/avatars/marta.jpeg',
      pt: {
        name: 'Marta Strauch',
        role: 'Artista visual independente',
        quote:
          'Fomos colegas; embora em áreas diferentes, percebi que ele estava sempre pesquisando e buscando informação nova.'
      },
      en: {
        name: 'Marta Strauch',
        role: 'Independent visual artist',
        quote:
          'We were colleagues; though in different areas, I noticed he was always researching and looking for new information.'
      }
    }
  ];

  function getLang() {
    var d = document.documentElement.getAttribute('data-lang');
    if (d === 'en') return 'en';
    return 'pt';
  }

  function str(key) {
    var L = STR_TM[getLang()] || STR_TM.pt;
    return (L && L[key]) || key;
  }

  function initials(name) {
    var p = name.split(/\s+/).filter(Boolean);
    var a = (p[0] || '?')[0] || '?';
    var b = (p.length > 1 ? p[p.length - 1][0] : p[0][1]) || '';
    return (a + b).toUpperCase();
  }

  function init() {
    var root = document.getElementById('recomendacoes');
    if (!root) return;

    var card = root.querySelector('.tm-card');
    var quoteEl = root.querySelector('.tm-quote');
    var nameEl = root.querySelector('.tm-name');
    var roleEl = root.querySelector('.tm-role');
    var imgEl = root.querySelector('.tm-photo');
    var fbEl = root.querySelector('.tm-fallback');
    var prevBtn = root.querySelector('.tm-nav--prev');
    var nextBtn = root.querySelector('.tm-nav--next');
    var dots = root.querySelector('.tm-dots');
    var viewport = root.querySelector('.tm-viewport');
    var carouselEl = root.querySelector('.tm-carousel');

    if (!card || !quoteEl || !nameEl || !roleEl || !imgEl || !fbEl || !prevBtn || !nextBtn || !dots) return;

    var idx = 0;
    var n = DATA.length;

    function render() {
      var lang = getLang();
      var d = DATA[idx];
      var pack = d[lang] || d.pt;
      quoteEl.textContent = pack.quote;
      nameEl.textContent = pack.name;
      roleEl.textContent = pack.role;
      imgEl.alt =
        lang === 'en' ? 'Photo of ' + pack.name : 'Foto de ' + pack.name;
      imgEl.src = d.img;
      fbEl.textContent = initials(pack.name);
      fbEl.hidden = true;
      imgEl.style.display = '';

      card.setAttribute('data-tm-index', String(idx + 1));

      root.querySelectorAll('.tm-dot').forEach(function (btn, i) {
        var on = i === idx;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-current', on ? 'true' : 'false');
      });

      var live = str('tm_live').replace('{n}', String(idx + 1)).replace('{t}', String(n));
      card.setAttribute('aria-label', live);
    }

    imgEl.addEventListener('error', function () {
      imgEl.style.display = 'none';
      fbEl.hidden = false;
    });
    imgEl.addEventListener('load', function () {
      if (imgEl.naturalWidth > 0) {
        imgEl.style.display = '';
        fbEl.hidden = true;
      }
    });

    DATA.forEach(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tm-dot';
      b.setAttribute('aria-label', str('tm_dot_aria').replace('{n}', String(i + 1)).replace('{t}', String(n)));
      b.addEventListener('click', function () {
        idx = i;
        render();
      });
      dots.appendChild(b);
    });

    function go(delta) {
      idx = ((idx + delta) % n + n) % n;
      render();
    }

    function syncChrome() {
      prevBtn.setAttribute('aria-label', str('tm_prev'));
      nextBtn.setAttribute('aria-label', str('tm_next'));
      if (carouselEl) carouselEl.setAttribute('aria-label', str('tm_region_aria'));
      dots.setAttribute('aria-label', str('tm_dots_group'));
      root.querySelectorAll('.tm-dot').forEach(function (btn, i) {
        btn.setAttribute('aria-label', str('tm_dot_aria').replace('{n}', String(i + 1)).replace('{t}', String(n)));
      });
    }

    prevBtn.addEventListener('click', function () {
      go(-1);
    });
    nextBtn.addEventListener('click', function () {
      go(1);
    });

    if (carouselEl) {
      carouselEl.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          go(-1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          go(1);
        }
      });
    }

    var sx = 0;
    if (viewport) {
      viewport.addEventListener(
        'touchstart',
        function (e) {
          sx = e.changedTouches[0].clientX;
        },
        { passive: true }
      );
      viewport.addEventListener(
        'touchend',
        function (e) {
          var dx = e.changedTouches[0].clientX - sx;
          if (Math.abs(dx) < 50) return;
          if (dx > 0) go(-1);
          else go(1);
        },
        { passive: true }
      );
    }

    document.addEventListener('i18n:applied', function () {
      syncChrome();
      render();
    });

    syncChrome();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
