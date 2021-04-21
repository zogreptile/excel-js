const METHOD_NAMES = {
  click: 'onClick',
  input: 'onInput',
  change: 'onChange',
};

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Missing $root in DOMListener.');
    }

    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const methodName = METHOD_NAMES[listener];

      if (!this[methodName]) {
        throw new Error(
          `Method ${methodName} is not implemented in ${this.name} Component.`
        );
      }

      this[methodName] = this[methodName].bind(this);

      this.$root.on(listener, this[methodName]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const methodName = METHOD_NAMES[listener];

      this.$root.off(listener, this[methodName]);
    });
  }
}
