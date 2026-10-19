    /* =============================================================
       Timeline pinned: usa sticky e scroll real do documento.
       Não intercepta wheel/touch, não aplica overflow ao body.
       Desktop com mouse: movimentação horizontal entre 4 cards.
       Touch, telas baixas e movimento reduzido: cartões estáticos.
       ============================================================= */
    (() => {
      const section = document.getElementById('como-funciona');
      const pin = section?.querySelector('.timeline-pin');
      const viewport = document.getElementById('timeline-viewport');
      const track = document.getElementById('timeline-track');
      const cards = track ? Array.from(track.querySelectorAll('.step')) : [];
      const counter = document.getElementById('timeline-current');
      const progressFill = document.getElementById('timeline-progress-fill');
      const header = document.querySelector('.site-header');

      if (!section || !pin || !viewport || !track || cards.length !== 4) return;

      const desktopQuery = window.matchMedia(
        '(min-width:1024px) and (min-height:700px) and (hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)'
      );

      const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
      let enabled = false;
      let animationFrame = 0;
      let stops = [0,0,0,0];

      function measure() {
        if (!enabled) return;
        const stickyTop = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
        section.style.setProperty('--timeline-sticky-top', `${stickyTop}px`);

        const maxShift = Math.max(0,track.scrollWidth-viewport.clientWidth);
        stops = cards.map(card => clamp(
          card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2,
          0,maxShift
        ));
        paint();
      }

      function paint() {
        if (!enabled) return;

        const topOffset = parseFloat(section.style.getPropertyValue('--timeline-sticky-top')) || 0;
        const scrollDistance = Math.max(1,section.offsetHeight-pin.offsetHeight);
        const progress = clamp((topOffset-section.getBoundingClientRect().top)/scrollDistance,0,1);

        // Reserva um pequeno trecho final para mostrar o passo 04 antes de soltar a página.
        const horizontal = clamp(progress / .86,0,1);
        const segment = horizontal*(cards.length-1);
        const previous = Math.min(cards.length-1,Math.floor(segment));
        const next = Math.min(cards.length-1,previous+1);
        const fraction = segment-previous;

        const shift = stops[previous]+(stops[next]-stops[previous])*fraction;
        track.style.transform = `translate3d(${-shift.toFixed(2)}px,0,0)`;

        const current = clamp(Math.round(segment),0,cards.length-1);
        cards.forEach((card,index) => {
          card.classList.toggle('is-active',index===current);
        });

        if (counter) counter.textContent = String(current+1).padStart(2,'0');
        if (progressFill) progressFill.style.width = `${(horizontal*100).toFixed(1)}%`;
      }

      function schedulePaint() {
        if (!enabled || animationFrame) return;
        animationFrame = requestAnimationFrame(() => {
          animationFrame = 0;
          paint();
        });
      }

      function syncMode() {
        const shouldEnable = desktopQuery.matches;
        if (shouldEnable === enabled) {
          if (enabled) measure();
          return;
        }
        enabled = shouldEnable;
        section.classList.toggle('timeline-active',enabled);

        if (enabled) {
          measure();
          window.addEventListener('scroll',schedulePaint,{passive:true});
        } else {
          window.removeEventListener('scroll',schedulePaint);
          cancelAnimationFrame(animationFrame);
          animationFrame = 0;
          section.style.removeProperty('--timeline-sticky-top');
          track.style.removeProperty('transform');
          cards.forEach(card => card.classList.remove('is-active'));
          cards[0].classList.add('is-active');
          if (counter) counter.textContent = '01';
          if (progressFill) progressFill.style.width = '0%';
        }
      }

      desktopQuery.addEventListener?.('change',syncMode);
      window.addEventListener('resize',()=>{if(enabled) measure()},{passive:true});
      window.addEventListener('pageshow',()=>{if(enabled) measure()});
      if (window.ResizeObserver) {
        const observer = new ResizeObserver(() => {if(enabled) schedulePaint()});
        observer.observe(viewport);
        observer.observe(track);
      }
      document.fonts?.ready.then(()=>{if(enabled) measure()});
      syncMode();
    })();
