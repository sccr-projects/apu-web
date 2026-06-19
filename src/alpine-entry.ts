import type { Alpine } from 'alpinejs';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

export default (Alpine: Alpine) => {
  Alpine.data('bento', () => ({
    items: [] as Array<{
      title: string;
      description: string;
      icon: string;
      number: string;
      expandTo: 'left' | 'right';
    }>,
    activeIndex: null as number | null,
    isAnimating: false,
    clone: null as HTMLElement | null,
    resizeObserver: null as ResizeObserver | null,

    get activeItem() {
      if (this.activeIndex === null) return null;
      return this.items[this.activeIndex] ?? null;
    },

    get activePanel() {
      return this.activeItem?.expandTo ?? null;
    },

    async init() {
      try {
        const raw = JSON.parse(this.$el.dataset.items || '[]');
        this.items = Array.isArray(raw) ? raw : [];
      } catch {
        this.items = [];
      }
      // Start at null so the first trigger is visible for the hydration expand.
      this.activeIndex = null;

      this.resizeObserver = new ResizeObserver(() => {
        if (this.activeIndex !== null && !this.isAnimating) {
          this.collapse().then(() => {
            this.activeIndex = null;
          });
        }
      });
      this.resizeObserver.observe(this.$el);

      if (this.items.length > 0) {
        await this.$nextTick();
        this.expand(0);
      }
    },

    destroy() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    },

    async expand(index: number) {
      if (this.isAnimating || this.activeIndex === index) return;
      if (index < 0 || index >= this.items.length) return;
      this.isAnimating = true;

      const trigger = this.$el.querySelector(`[data-index="${index}"][data-trigger]`) as HTMLElement | null;
      if (!trigger) {
        this.isAnimating = false;
        return;
      }

      if (this.activeIndex !== null) {
        await this.collapse();
      }

      // Capture trigger state BEFORE Alpine hides it.
      const state = Flip.getState(trigger);

      this.clone = this.createClone(trigger);
      this.$refs.cloneLayer.appendChild(this.clone);

      this.activeIndex = index;
      await this.$nextTick();

      this.positionCloneOverPanel(this.clone);

      Flip.from(state, {
        targets: this.clone,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          this.isAnimating = false;
        },
      });
    },

    async close() {
      if (this.isAnimating || this.activeIndex === null) return;
      this.isAnimating = true;
      const closedIndex = this.activeIndex;
      await this.collapse();
      this.activeIndex = null;
      this.isAnimating = false;

      const trigger = this.$el.querySelector(`[data-index="${closedIndex}"][data-trigger]`) as HTMLElement | null;
      if (trigger) trigger.focus();
    },

    collapse() {
      return new Promise<void>((resolve) => {
        if (!this.clone || this.activeIndex === null) {
          resolve();
          return;
        }

        const trigger = this.$el.querySelector(`[data-index="${this.activeIndex}"][data-trigger]`) as HTMLElement | null;
        if (!trigger) {
          this.clone.remove();
          this.clone = null;
          resolve();
          return;
        }

        const state = Flip.getState(this.clone);
        this.positionCloneOverTrigger(this.clone, trigger);

        Flip.from(state, {
          targets: this.clone,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            if (this.clone) {
              this.clone.remove();
              this.clone = null;
            }
            resolve();
          },
        });
      });
    },

    createClone(trigger: HTMLElement) {
      const stage = this.$el.querySelector('.bento-stage') as HTMLElement;
      const stageRect = stage.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();

      const el = trigger.cloneNode(true) as HTMLElement;
      el.classList.add('bento-clone');
      el.classList.remove('apu-interactive-card');
      el.style.position = 'absolute';
      el.style.top = `${triggerRect.top - stageRect.top}px`;
      el.style.left = `${triggerRect.left - stageRect.left}px`;
      el.style.width = `${triggerRect.width}px`;
      el.style.height = `${triggerRect.height}px`;
      el.style.margin = '0';
      el.style.zIndex = '20';
      el.style.pointerEvents = 'auto';
      el.setAttribute('aria-expanded', 'true');

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'bento-close-btn';
      closeBtn.setAttribute('aria-label', 'Close detail');
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        this.close();
      });
      el.appendChild(closeBtn);

      return el;
    },

    positionCloneOverPanel(clone: HTMLElement) {
      const stage = this.$el.querySelector('.bento-stage') as HTMLElement;
      const stageRect = stage.getBoundingClientRect();
      const panelClass = this.activePanel === 'left' ? '.bento-panel-left' : '.bento-panel-right';
      const panel = this.$el.querySelector(panelClass) as HTMLElement;
      const panelRect = panel.getBoundingClientRect();

      clone.style.top = `${panelRect.top - stageRect.top}px`;
      clone.style.left = `${panelRect.left - stageRect.left}px`;
      clone.style.width = `${panelRect.width}px`;
      clone.style.height = `${panelRect.height}px`;
    },

    positionCloneOverTrigger(clone: HTMLElement, trigger: HTMLElement) {
      const stage = this.$el.querySelector('.bento-stage') as HTMLElement;
      const stageRect = stage.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();

      clone.style.top = `${triggerRect.top - stageRect.top}px`;
      clone.style.left = `${triggerRect.left - stageRect.left}px`;
      clone.style.width = `${triggerRect.width}px`;
      clone.style.height = `${triggerRect.height}px`;
    },
  }));
};
