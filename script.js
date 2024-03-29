const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const imgElement = document.getElementById('main-image');
function opentab(tabname){
    for(const tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(const tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    if(tabname == 'skills'){
        imgElement.src = 'icons/Programming-amico.svg';
    }
    else if(tabname == 'experience'){
        imgElement.src = 'icons/Version control-bro.svg';
    }
    else if(tabname == 'education'){
        imgElement.src = 'icons/boy on graduation-amico.svg';
    }
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxcPL3qCn3h2sNDucbxSQB6VCFh5uJ_88Yzpdy_mRiJWJg77mKDpzqB80cAUhboxRNH/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

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