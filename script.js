// Voluntários
const volForm = document.getElementById('vol-form');
volForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('v-name').value;
  const email = document.getElementById('v-email').value;
  const skills = document.getElementById('v-skills').value;
  alert(`Voluntário cadastrado:\n${name}\n${email}\n${skills}`);
  volForm.reset();
});

// Doações
const donateForm = document.getElementById('donate-form');
donateForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('d-name').value || 'Anônimo';
  const amount = document.getElementById('d-amount').value;
  const project = document.getElementById('d-project').value;
  alert(`Doação simulada:\n${name} -> R$ ${amount} para ${project}`);
  donateForm.reset();
});

// Cadastro
const cadastroForm = document.getElementById('cadastro-form');
cadastroForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('c-name').value;
  const email = document.getElementById('c-email').value;
  alert(`Cadastro realizado:\n${name}\n${email}`);
  cadastroForm.reset();
});
