import { select } from './dom.js';

export function validateVolunteerForm() {
  const name = select('v-name').value.trim();
  const email = select('v-email').value.trim();

  if(!name || !email) {
    alert('Preencha nome e email corretamente.');
    return false;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if(!emailRegex.test(email)) {
    alert('Email inválido!');
    return false;
  }

  return true;
}

export function validateDonationForm() {
  const amount = parseFloat(select('d-amount').value.replace(',', '.'));
  if(isNaN(amount) || amount <= 0) {
    alert('Informe um valor válido.');
    return false;
  }
  return true;
}
