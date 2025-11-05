import { select, createEl, renderTemplate } from './dom.js';

export let projects = [
  { id: 1, title: 'Combate à Fome', category: 'Saúde', img: 'images/combate_fome.jpg', desc: 'Distribuição de alimentos a famílias carentes' },
  { id: 2, title: 'Acolhimento e Esperança', category: 'Assistência', img: 'images/acolhimento_esperanca.jpg', desc: 'Abrigo e suporte psicológico' },
  { id: 3, title: 'Voluntariado em Ação', category: 'Educação', img: 'images/voluntariado_acao.jpg', desc: 'Projetos de educação e cultura' }
];

export function renderProjects() {
  renderTemplate('projects-grid', projects, (p) => {
    const card = createEl('div', { class: 'project', role: 'listitem' });
    card.innerHTML = `
<img src="https://picsum.photos/400/200?random=1" alt="Combate à Fome">
<img src="https://picsum.photos/400/200?random=2" alt="Acolhimento e Esperança">
<img src="https://picsum.photos/400/200?random=3" alt="Voluntariado">

      <h3>${p.title}</h3>
      <div class="pill">${p.category}</div>
      <p>${p.desc}</p>
    `;
    return card;
  });
}
