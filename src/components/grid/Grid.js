import { Component } from 'core/Component';
import { createGrid } from './grid.template';

export class Grid extends Component {
  static classname = 'grid';

  toHTML() {
    return createGrid(100);
  }
}
