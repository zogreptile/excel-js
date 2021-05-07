import { $ } from 'core/dom';
import { Component } from 'core/Component';
import { createGrid } from './grid.template';
import { resizeHandler } from './grid.resizeHandler';

export class Grid extends Component {
  static classname = 'grid';

  constructor($root) {
    super($root);

    this.listeners = ['mousedown'];
  }

  toHTML() {
    return createGrid(100);
  }

  onMousedown(event) {
    const shouldResize = !!event.target.dataset.resizer;

    if (!shouldResize) return;

    resizeHandler(this.$root, event);
  }
}
