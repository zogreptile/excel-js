import { Component } from 'core/Component';

export class Menu extends Component {
  static classname = 'menu';

  toHTML() {
    return `
      <input
        class="input menu__input"
        type="text"
        name="title-input"
        value="Название таблицы"
      />
      
      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">delete_outline</span>
      </button>

      <button class="button button_only-icon" type="button">
        <span class="button__icon material-icons">exit_to_app</span>
      </button>
    `;
  }
}
