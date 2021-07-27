import './style.css';

const ul = document.querySelector('ul');
const form = document.querySelector('#add-form');

const addScore = (e) => {
  e.preventDefault();
  const input = document.querySelectorAll('input');
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = `${input[0].value}: ${input[1].value}`;
  li.appendChild(p);
  ul.appendChild(li);
  input[0].value = '';
  input[1].value = '';
};

form.addEventListener('submit', addScore);