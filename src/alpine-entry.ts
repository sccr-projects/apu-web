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
    resizeHandler: null as (() => void) | null,

    get activeItem() {
      if (this.activeIndex === null) return null;
      return this.items[this.activeIndex] ?? null;
    },

    get activePanel() {
      return this.activeItem?.expandTo ?? null;
    },

    async init() {
      try {
        const raw = JSON.parse(this.$root.dataset.items || '[]');
        this.items = Array.isArray(raw) ? raw : [];
      } catch {
        this.items = [];
      }

      if (this.items.length > 0) {
        await this.expand(0);
      }

      this.resizeHandler = () => {
        if (this.activeIndex !== null && !this.isAnimating) {
          this.collapse();
        }
      };
      window.addEventListener('resize', this.resizeHandler);
    },

    destroy() {
      if (this.resizeHandler) {
        window.removeEventListener('resize', this.resizeHandler);
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      if (this.clone) {
        gsap.killTweensOf(this.clone);
        this.clone.remove();
        this.clone = null;
      }
    },

    async expand(index: number) {
      if (this.isAnimating || this.activeIndex === index) return;
      if (index < 0 || index >= this.items.length) return;
      this.isAnimating = true;

      const newTrigger = this.$root.querySelector(`[data-index="${index}"][data-trigger]`) as HTMLElement | null;
      if (!newTrigger) {
        this.isAnimating = false;
        return;
      }

      const oldActiveIndex = this.activeIndex;
      const oldClone = this.clone;
      const oldCloneState = oldClone ? Flip.getState(oldClone) : null;
      const newTriggerState = Flip.getState(newTrigger);

      const newClone = this.createClone(newTrigger);
      this.$refs.cloneLayer.appendChild(newClone);
      this.clone = newClone;

      this.activeIndex = index;
      await this.$nextTick();

      this.positionCloneOverPanel(newClone);

      if (oldClone && oldCloneState && oldActiveIndex !== null) {
        const oldTrigger = this.$root.querySelector(`[data-index="${oldActiveIndex}"][data-trigger]`) as HTMLElement | null;
        if (oldTrigger) {
          this.positionCloneOverTrigger(oldClone, oldTrigger);
          const oldClose = oldClone.querySelector('button[aria-label="Close detail"]') as HTMLElement | null;
          if (oldClose) oldClose.style.display = 'none';
          oldClone.style.pointerEvents = 'none';
        } else {
          oldClone.remove();
        }
      }

      let completed = 0;
      const total = (oldCloneState ? 1 : 0) + 1;
      const onDone = () => {
        completed += 1;
        if (completed >= total) {
          if (oldClone) oldClone.remove();
          this.isAnimating = false;
          const panel = this.getPanel(this.activePanel === 'left' ? 'left' : 'right');
          panel?.focus({ preventScroll: true });
        }
      };

      if (oldClone && oldCloneState) {
        Flip.from(oldCloneState, {
          targets: oldClone,
          duration: 1.0,
          ease: 'power2.inOut',
          scale: false,
          onComplete: onDone,
        });
      }

      Flip.from(newTriggerState, {
        targets: newClone,
        duration: 1.0,
        ease: 'power2.out',
        onComplete: onDone,
      });
    },

    async close() {
      if (this.isAnimating || this.activeIndex === null) return;
      this.isAnimating = true;
      const closedIndex = this.activeIndex;
      await this.collapse();
      this.isAnimating = false;

      const trigger = this.$root.querySelector(`[data-index="${closedIndex}"][data-trigger]`) as HTMLElement | null;
      if (trigger) trigger.focus();
    },

    collapse() {
      return new Promise<void>((resolve) => {
        if (!this.clone || this.activeIndex === null) {
          this.activeIndex = null;
          this.clone = null;
          resolve();
          return;
        }

        const trigger = this.$root.querySelector(`[data-index="${this.activeIndex}"][data-trigger]`) as HTMLElement | null;
        if (!trigger) {
          this.clone.remove();
          this.activeIndex = null;
          this.clone = null;
          resolve();
          return;
        }

        this.activeIndex = null;
        const cloneEl = this.clone;

        const state = Flip.getState(cloneEl);
        this.positionCloneOverTrigger(cloneEl, trigger);

        Flip.from(state, {
          targets: cloneEl,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            cloneEl.remove();
            if (this.clone === cloneEl) {
              this.clone = null;
            }
            resolve();
          },
        });
      });
    },

    getStage() {
      const stage = this.$refs.bentoStage as HTMLElement | undefined;
      if (!stage && import.meta.env.DEV) {
        console.error('bento: missing x-ref="bentoStage"');
      }
      return stage ?? null;
    },

    getPanel(side: 'left' | 'right') {
      const ref = side === 'left' ? this.$refs.panelLeft : this.$refs.panelRight;
      const panel = ref as HTMLElement | undefined;
      if (!panel && import.meta.env.DEV) {
        console.error(`bento: missing x-ref="panel${side === 'left' ? 'Left' : 'Right'}"`);
      }
      return panel ?? null;
    },

    createClone(trigger: HTMLElement) {
      const stage = this.getStage();
      if (!stage) return document.createElement('div');

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
      el.style.opacity = '1';
      el.setAttribute('aria-expanded', 'true');

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.setAttribute('aria-label', 'Close detail');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '0.75rem';
      closeBtn.style.right = '0.75rem';
      closeBtn.style.width = '2rem';
      closeBtn.style.height = '2rem';
      closeBtn.style.display = 'flex';
      closeBtn.style.alignItems = 'center';
      closeBtn.style.justifyContent = 'center';
      closeBtn.style.borderRadius = '9999px';
      closeBtn.style.background = 'rgb(var(--color-apu-navy))';
      closeBtn.style.color = 'rgb(var(--color-apu-accent))';
      closeBtn.style.fontSize = '1.125rem';
      closeBtn.style.lineHeight = '1';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.padding = '0';
      closeBtn.style.border = 'none';
      closeBtn.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        this.close();
      });
      el.appendChild(closeBtn);

      return el;
    },

    positionCloneOverPanel(clone: HTMLElement) {
      const stage = this.getStage();
      const panel = this.getPanel(this.activePanel === 'left' ? 'left' : 'right');
      if (!stage || !panel) return;

      const stageRect = stage.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();

      clone.style.top = `${panelRect.top - stageRect.top}px`;
      clone.style.left = `${panelRect.left - stageRect.left}px`;
      clone.style.width = `${panelRect.width}px`;
      clone.style.height = `${panelRect.height}px`;
    },

    positionCloneOverTrigger(clone: HTMLElement, trigger: HTMLElement) {
      const stage = this.getStage();
      if (!stage) return;

      const stageRect = stage.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();

      clone.style.top = `${triggerRect.top - stageRect.top}px`;
      clone.style.left = `${triggerRect.left - stageRect.left}px`;
      clone.style.width = `${triggerRect.width}px`;
      clone.style.height = `${triggerRect.height}px`;
    },
  }));
};
