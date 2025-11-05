export function select(id) {
  return document.getElementById(id);
}

export function createEl(tag, attrs = {}, text = '') {
  const el = document.createElement(tag);
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
  if(text) el.textContent = text;
  return el;
}

export function renderTemplate(containerId, items, templateFn) {
  const container = select(containerId);
  container.innerHTML = '';
  items.forEach(item => {
    container.appendChild(templateFn(item));
  });
}
