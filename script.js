console.log('funguju!');

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails') 
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.emails);

    const listEmail = document.querySelector('#app');
    listEmail.innerHTML = data.emails.map((props) => `
    <div class="email">
    <div class="email__head">
      <button class="email__icon email__icon--closed"></button>
      <div class="email__info">
        <div class="email__sender">${props.sender.name}</div>
        <div class="email__subject">${props.subject}</div>
      </div>
      <div class="email__time">${props.time}</div>
    </div>
    <div class="email__body"></div>
  </div>
    `,
    )
     .join('');
});

