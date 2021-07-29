import './style.css';
import { addScoreAPI, refreshScoreTableAPI } from './base_api.js';


const form = document.querySelector('#add-form');
const refreshBtn = document.querySelector('#refresh');

form.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', refreshScoreTable);
document.addEventListener('DOMContentLoaded', refreshScoreTable);

