const ul = document.querySelector('ul');
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameEndpoint = 'games/oFhfjmjpjZYpBjDrEkHq/scores';



export const addScoreAPI = async (e) => {
  e.preventDefault();
  const input = document.querySelectorAll('input');
  const response = await fetch(
    `${baseUrl}${gameEndpoint}`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: input[0].value,
        score: input[1].value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  input[0].value = '';
  input[1].value = '';
};

export const refreshScoreTableAPI = async () => {
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
