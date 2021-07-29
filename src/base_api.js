const ul = document.querySelector('ul');
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameEndpoint = 'games/clgFLMtHrYVTrf5UzXrW/scores';

const addScore = async (e) => {
    e.preventDefault();
    const user = document.querySelector('#user');
    const score = document.querySelector('#score');
    const response = await fetch(
      `${baseUrl}${gameEndpoint}`,
      {
        method: 'POST',
        body: JSON.stringify({
          user: user.value,
          score: Number(score.value),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  
    user.value = '';
    score.value = '';
  };
  
  const refreshScoreTable = async () => {
    const response = await fetch(
      `${baseUrl}${gameEndpoint}`,
    )
      .then((response) => response.json())
      .then((json) => {
        ul.innerHTML = '';
        json.result.forEach((element) => {
          const li = document.createElement('li');
          const p = document.createElement('p');
          p.innerHTML = `${element.user}: ${element.score}`;
          li.appendChild(p);
          ul.appendChild(li);
        });
      });
  };
  
