console.log("JS loaded OK");

function submitData() {
    let firstname = document.querySelector('input[name="firstname"]').value;
    let lastname = document.querySelector('input[name="lastname"]').value;
    let ageDom = document.querySelector('input[name="age"]');
    let genderDom = document.querySelector('input[name="gender"]:checked');
    let interestDoms = document.querySelectorAll('input[name="interest"]:checked');
    let descriptionDom = document.querySelector('textarea[name="description"]');

    let interests = "";
    for (let i = 0; i < interestDoms.length; i++) {
        interests += interestDoms[i].value;
        if (i !== interestDoms.length - 1) {
            interests += ", ";
        }
    }

    let userData = {
        firstname: firstname,
        lastname: lastname,
        age: ageDom ? ageDom.value : "",
        gender: genderDom ? genderDom.value : "",
        interests: interests,
        description: descriptionDom ? descriptionDom.value : ""
    };

    console.log("submitData:", userData);
}
