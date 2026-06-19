import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.data('bento', () => ({
    items: [] as Array<{
      title: string;
      description: string;
      icon: string;
      number: string;
      expandTo: 'left' | 'right';
    }>,
    activeIndex: 0,

    get activeItem() {
      return this.activeIndex !== null ? this.items[this.activeIndex] : null;
    },

    get activePanel() {
      if (this.activeIndex === null) return null;
      return this.items[this.activeIndex].expandTo;
    },

    init() {
      this.items = JSON.parse(this.$el.dataset.items || '[]');
      this.activeIndex = 0;
    },

    expand(index: number) {
      if (this.activeIndex === index) return;
      this.activeIndex = index;
    },

    close() {
      if (this.activeIndex === null) return;
      this.activeIndex = null;
    },
  }));
};
