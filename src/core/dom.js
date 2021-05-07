class Dom {
  constructor(selector) {
    this.$domNode = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  get data() {
    return this.$domNode.dataset;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$domNode.innerHTML = html;
      return this;
    }

    return this.$domNode.outerHTML.trim();
  }

  clear() {
    this.html('');

    return this;
  }

  append(node) {
    const childNode = node instanceof Dom ? node.$domNode : node;

    this.$domNode.append(childNode);

    return this;
  }

  on(eventType, cb) {
    this.$domNode.addEventListener(eventType, cb);
  }

  off(eventType, cb) {
    this.$domNode.removeEventListener(eventType, cb);
  }

  closest(selector) {
    return new Dom(this.$domNode.closest(selector));
  }

  findAll(selector) {
    const nodes = this.$domNode.querySelectorAll(selector);
    const result = [];

    if (!nodes.length) return result;

    nodes.forEach((node) => {
      result.push(new Dom(node));
    });

    return result;
  }

  getCoords() {
    return this.$domNode.getBoundingClientRect();
  }

  css(styles = {}) {
    const styleEntries = Object.entries(styles);

    if (!styleEntries.length) {
      this.$domNode.style = null;
      return this;
    }

    styleEntries.forEach(([property, value]) => {
      this.$domNode.style[property] = value;
    });

    return this;
  }

  addClass(classNames = '') {
    this.$domNode.classList.add(classNames);
    return this;
  }

  removeClass(classNames = '') {
    this.$domNode.classList.remove(classNames);
    return this;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);

  if (classes) el.classList.add(classes);

  return $(el);
};
