console.log('funguju!');

 const unreadPost = () => {
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails') 
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.emails);

    const listEmail = document.querySelector('#inbox');
    listEmail.innerHTML = 
    data.emails
    .filter((props) => props.unread === true)
    .map((props) => `
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
}
unreadPost(); 


const readPost = () => {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails') 
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      console.log(data.emails);
  
      const listEmail2 = document.querySelector('#inbox2');
      listEmail2.innerHTML += 
      data.emails
      .filter((props) => props.unread === false)
      .map((props) => `
      <div class="email">
      <div class="email__head">
        <button class="email__icon email__icon--opened"></button>
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
  }
  readPost();  
 
 


 


