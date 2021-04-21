class Dom {
  constructor(selector) {
    this.$domNode = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
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
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);

  if (classes) el.classList.add(classes);

  return $(el);
};
