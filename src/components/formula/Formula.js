import { Component } from 'core/Component';

export class Formula extends Component {
  static classname = 'formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="formula__input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('$root: ', this.$root);
    console.log(event.target.textContent);
  }

  onClick(event) {
    console.log('onliclkonclick');
  }
}
