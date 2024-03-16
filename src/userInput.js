const input = document.querySelector("input");
const errorLabel = document.querySelector("span.error");

export default function checkErrors() {
    if (input.validity.valueMissing) {
        input.classList.add("no-val");
        errorLabel.textContent = "This field cannot be empty.";
        
    } else {
        errorLabel.textContent = "";
        input.classList.remove("no-val");
        return false;
    }
    
    return true;
}