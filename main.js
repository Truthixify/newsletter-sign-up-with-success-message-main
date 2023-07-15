addEventListener("DOMContentLoaded", () => {
    let formContainer = document.querySelector(".container")
    let successContainer = document.querySelector(".success")

    let submitBtn = document.querySelector("#btn")
    let dismissBtn = document.querySelector(".success button")

    let email = document.querySelector("#email")

    email.addEventListener("input", (e) => {
        let emailHolder = document.querySelector(".success p span")
        let errorText = document.querySelector("form div p")

        if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            console.log(e)
            email.setAttribute("invalid", false)

            email.classList.remove("input-error")
            errorText.classList.add("hide")

            submitBtn.classList.add("submit-enabled")
            submitBtn.disabled = false

            submitBtn.addEventListener("click", (e) => {
                e.preventDefault()

                formContainer.classList.add("hide")
                successContainer.classList.remove("hide")
    
                emailHolder.textContent = email.value
        
                dismissBtn.addEventListener("click", () => {
                    successContainer.classList.add("hide")
                    formContainer.classList.remove("hide")
        
                    email.value = ""
                })
            })
        }
        else {
            email.setAttribute("invalid",true)
            
            submitBtn.classList.remove("submit-enabled")
            submitBtn.disabled = true

            email.classList.add("input-error")
            errorText.classList.remove("hide")
        }
        
    })
})