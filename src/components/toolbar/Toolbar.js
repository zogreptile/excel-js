import { Component } from 'core/Component';

export class Toolbar extends Component {
  static classname = 'toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
    });
  }

  toHTML() {
    return `
      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">format_align_left</span>
      </button>

      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">format_align_justify</span>
      </button>

      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">format_align_right</span>
      </button>

      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">format_bold</span>
      </button>

      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">format_italic</span>
      </button>

      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">format_underlined</span>
      </button>
    `;
  }
}
