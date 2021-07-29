import './style.css';
import { addScoreAPI, refreshScoreTableAPI } from './base_api.js';

const form = document.querySelector('#add-form');
const refreshBtn = document.querySelector('#refresh');

form.addEventListener('submit', addScoreAPI);
refreshBtn.addEventListener('click', refreshScoreTableAPI);
document.addEventListener('DOMContentLoaded', refreshScoreTableAPI);
