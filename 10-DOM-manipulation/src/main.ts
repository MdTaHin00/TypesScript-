
const form = document.querySelector<HTMLFormElement>("#registerFrom") ;

const username = document.querySelector<HTMLInputElement>("#username") ;

const email = document.querySelector<HTMLInputElement>("#email") ;

const message = document.querySelector<HTMLParagraphElement>("#message")
form?.addEventListener('submit', (e: Event) =>{
    e.preventDefault() ;

    const usernameValue = username?.value.trim();
    const emailValue = email?.value.trim()
    if(!usernameValue || !emailValue){
        if(message){
            message.textContent = "Input not found"
        }
        return ;
    }

    if(message){
        message.style.color='green' ;
        message.style.marginTop="10px"
        message.textContent = `Welcome , ${usernameValue}`
    }

    form.reset();
    console.log(usernameValue, emailValue);
    
})
