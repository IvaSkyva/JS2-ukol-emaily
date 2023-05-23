console.log('funguju!');

const renderEmail = (item, isOpened) => {
  const iconClass = isOpened ? 'email__icon--opened' : 'email__icon--closed';
  
 let emailHTML = `
 
    <div class="email">
      <div class="email__head">
        <button class="email__icon ${iconClass}"></button>
        <div class="email__info">
          <div class="email__sender">${item.sender.name}</div>
          <div class="email__subject">${item.subject}</div>
        </div>
        <div class="email__time">${item.time}</div>
      </div>
      <div class="email__body"></div>
    </div>
  `;
  
  
  return emailHTML;
};

const renderEmailList = (props) => {
  const emailList = document.querySelector('#inbox');
  
  props.forEach((item) => {
    const isOpened = !item.unread;
    const emailHTML = renderEmail(item, isOpened);
    const emailElement = document.createElement('div');
    
    emailElement.classList.add('email');
    if (item.unread) {
      emailElement.classList.add('email--unread');
    } else {
      emailElement.classList.add('email--read');
    }
    
    emailElement.innerHTML = emailHTML;
    emailList.appendChild(emailElement);
  }); 
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
  .then((response) => response.json())
  .then((data) => {
    
    const unreadEmails = data.emails.filter((item) => item.unread === true);
    renderEmailList(unreadEmails);
    const readEmails = data.emails.filter((item) => item.unread === false);
    renderEmailList(readEmails);
  });



  
  



 
 


 


