const inputs = document.querySelectorAll(".form-input input");
const errorsMsg = document.querySelectorAll(".error-msg");
const errorsIcon = document.querySelectorAll(".error-icon");
const submit = document.querySelector(".submit");

inputs.forEach((input, index) => {
    input.addEventListener("keyup",()=>{
        input.required = true;
        if(input.checkValidity()){
            errorsIcon[index].classList.remove("active");
            errorsMsg[index].classList.remove("active");
        } else{
            errorsIcon[index].classList.add("active");
            errorsMsg[index].classList.add("active");
            
        };
    })
});

submit.addEventListener("click", (event)=>{

    if(inputsValid(inputs) != inputs.length){
        event.preventDefault();
    }
})

function inputsValid(inputs){
    let valid = 0;
    inputs.forEach(input => {
        if((input.checkValidity()) && input.value != ''){
            valid++;
        }
    });

    return valid;
}