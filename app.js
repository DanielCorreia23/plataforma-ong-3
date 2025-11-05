import { renderProjects } from './projects.js';
import { addVolunteer } from './volunteers.js';
import { validateVolunteerForm, validateDonationForm } from './forms.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  const volForm = document.getElementById('vol-form');
  volForm.addEventListener('submit', e => {
    e.preventDefault();
    if(validateVolunteerForm()) {
      addVolunteer(
        document.getElementById('v-name').value,
        document.getElementById('v-email').value,
        document.getElementById('v-skill').value
      );
      volForm.reset();
      alert('Voluntário cadastrado com sucesso!');
    }
  });

  const donateForm = document.getElementById('donate-form');
  let donations = 0;
  donateForm.addEventListener('submit', e => {
    e.preventDefault();
    if(validateDonationForm()) {
      const amount = parseFloat(document.getElementById('d-amount').value.replace(',', '.'));
      donations += amount;
      document.getElementById('metric-donations').textContent = donations.toFixed(2);
      donateForm.reset();
      alert('Doação simulada registrada!');
    }
  });
});
