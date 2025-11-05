import { select, renderTemplate, createEl } from './dom.js';

export let volunteers = [];

export function addVolunteer(name, email, skills) {
  const vol = { id: Date.now(), name, email, skills };
  volunteers.push(vol);
  updateVolunteerList();
}

export function updateVolunteerList() {
  renderTemplate('vol-list', volunteers, (v) => {
    const div = createEl('div');
    div.innerHTML = `<strong>${v.name}</strong> - ${v.email} • ${v.skills || ''}`;
    return div;
  });
  select('metric-vols').textContent = volunteers.length;
}
