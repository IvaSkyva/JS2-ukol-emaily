console.log('funguju!');



const ListEmailu = (items) => { 
  return `
  
  <div class="email">
  <div class="email__head">
    <button class="email__icon email__icon--closed"></button>
    <div class="email__info">
      <div class="email__sender">${items.sender.name}</div>
      <div class="email__subject">${items.subject}</div>
    </div>
    <div class="email__time">${items.time}</div>
  </div>
  <div class="email__body"></div>
  </div>
  `;
  };
  
   const renderEmailList = (props) => {
  
    const emailList = document.querySelector('#inbox');
    emailList.innerHTML += 
    props.map((item) => ListEmailu(item))
    .join('');
    
  };
  
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
  .then((response) => response.json())
  .then((data) => renderEmailList(data.emails))


  
const ListEmailu2 = (items) => { 
  return `
  
  <div class="email">
  <div class="email__head">
    <button class="email__icon email__icon--opened"></button>
    <div class="email__info">
      <div class="email__sender">${items.sender.name}</div>
      <div class="email__subject">${items.subject}</div>
    </div>
    <div class="email__time">${items.time}</div>
  </div>
  <div class="email__body"></div>
  </div>
  `;
  };
  
   const renderEmailList2 = (props) => {
  
    const emailList2 = document.querySelector('#inbox2');
    emailList2.innerHTML += 
    props.map((item) => ListEmailu2(item))
    .join('');
    
  };
  
  
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
  .then((response) => response.json())
  .then((data) => renderEmailList2(data.emails))



 
 


 


