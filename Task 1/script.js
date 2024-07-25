const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')


document.addEventListener('scroll', function() {
    let value = window.scrollY
    
    title.style.marginTop = value * 1.1 + 'px';

    leaf1.style.marginLeft = -value + 'px';
    leaf2.style.marginLeft = value + 'px';

    bush2.style.marginBottom = -value + 'px';

    mount1.style.marginBottom = -value * 1.1 + 'px';
    mount2.style.marginBottom = -value * 1.2 + 'px';
    
})


// ----------------for receaving the msg-----------------


const scriptURL = 'https://script.google.com/macros/s/AKfycbwpL_DU9GC7ToA7eSgdIpOgKYRcHnPOirt4r37e9coCpLSezu5Lft2dPaVDvrp9ejTn8w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

