
//prevent form to submit
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form submission cancelled.');
});


//check inputs
function formValidation() {
    //Select form from DOM
    const form = document.querySelector('form');

    //Create formData to have access to data
    var formData = new FormData(form)

    let first = formData.get('first')
    let last = formData.get('last')
    let email = formData.get('email')
    let birthdate = formData.get('birthdate')
    let quantity = formData.get('quantity')
    let location = formData.get('location')
    let checkbox1 = formData.get('checkbox1')
    let checkbox2 = formData.get('checkbox2')

    //Check if the firstName have at least two caracters
    function checkFirstName(firstName) {
        if (firstName.length > 1) {
            document.querySelector("#divFirst p").innerHTML = ""
            return true
        } else {
            document.querySelector("#divFirst p").innerHTML = "Votre prénom doit avoir deux caractères minimum."
            return false
        }
    }

    //Check if the lastName have at least two caracters
    function checkLastName(lastName) {
        if (lastName.length > 1) {
            document.querySelector("#divLast p").innerHTML = ""
            return true
        } else {
            document.querySelector("#divLast p").innerHTML = "Votre nom doit avoir deux caractères minimum."
            return false
        }
    }

    //Check if the email is valid
    function checkEmail(email) {
        if (/^\S+@\S+\.\S+$/.test(email)) {
            document.querySelector("#divEmail p").innerHTML = ""
            return true
        } else {
            document.querySelector("#divEmail p").innerHTML = "Veuillez rentrer une adresse email valide."
            return false
        }
    }

    //Check if the birthdate is good
    function checkBirthdate(birthdate) {
        if (birthdate !== "") {
            document.querySelector("#divBirthdate p").innerHTML = ""
            return true
        } else {
            document.querySelector("#divBirthdate p").innerHTML = "Veuillez entrer une date de naissance."
            return false
        }
    }

    //Check if the quantity is good
    function checkQuantity(quantity) {
        if (quantity !== "") {
            document.querySelector("#divQuantity p").innerHTML = ""
            return true
        } else {
            document.querySelector("#divQuantity p").innerHTML = "Veuillez entrer un nombre."
            return false
        }
    }

    //Check if the conditions are accepted
    function checkTerms(checkbox1) {
        if (checkbox1 !== null) {
            document.querySelector("#divTerms p").innerHTML = ""
            return true
        } else {
            document.querySelector("#divTerms p").innerHTML = "Veuillez accepter les conditions d'utilisations."
            return false
        }
    }


    console.log(first, last, email, birthdate, quantity, location, checkbox1, checkbox2, checkFirstName(first) , checkLastName(last) , checkEmail(email) , checkBirthdate(birthdate) , checkQuantity(quantity) , checkTerms(checkbox1))

    if (checkFirstName(first) && checkLastName(last) && checkEmail(email) && checkBirthdate(birthdate) && checkQuantity(quantity) && checkTerms(checkbox1)) {
        document.querySelector(".modal-body").innerHTML = '<br/><br/>Merci pour votre inscription ! <br/><br/><br/>  <input class="btn-submit" type="submit" class="button" value="Fermer" onClick="closeModal()"/>'
    }

}
