function getValues(event) {

    event.preventDefault();
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var cvc = document.getElementById("cvc");

    var validate = validateInputs(name.value, number.value, month.value, year.value, cvc.value);

    if (validate !== -1) {
        var mbname = document.getElementById("mb-cardname");
        var mbcardnumber = document.getElementById("mb-cardnumber");
        var mbyymm = document.getElementById("mb-yymm");
        var mbcvc = document.getElementById("mb-cvc");

        mbname.innerText = name.value;
        mbcardnumber.innerText = number.value;
        mbyymm.innerHTML = month.value + "/" + year.value;
        mbcvc.innerHTML = cvc.value;


        var cardnumber = document.getElementById("cardnumber");
        var cardname = document.getElementById("cardname");
        var mmyy = document.getElementById("mmyy");
        var cardcvc = document.getElementById("cardcvc");

        cardnumber.innerHTML = number.value;
        cardname.innerHTML = name.value;
        mmyy.innerHTML = month.value + "/" + year.value;
        cardcvc.innerHTML = cvc.value;

        var thankyoutab = document.getElementById("thankyou-tab");
        thankyoutab.classList.toggle("hidden");

        var formtab = document.getElementById("form-tab");
        formtab.classList.toggle("hidden");
    }


}

function validateInputs(inputName, inputNumber, inputMonth, inputYear, inputCVC) {

    var nameError = document.getElementById("name-error");
    var nameInput = document.getElementById("name");


    if (inputName === "") {
        nameError.innerText = "Can't be Blank";
        nameError.classList.remove("hidden");
        nameInput.classList.remove("border-gray-400");
        nameInput.classList.add("border-red-700");
        return -1
    } else {
        nameError.classList.add("hidden");
        nameInput.classList.add("border-gray-400");
        nameInput.classList.remove("border-red-700");
    }

    var numberError = document.getElementById("number-error");
    var numberInput = document.getElementById("number");
    inputNumber = inputNumber.replace(/ /g, "");

    let regExp = /^\d+$/;
    console.log("Length of string " + inputNumber + "is " + inputNumber.length);
    if (inputNumber.length !== 16 || !regExp.test(inputNumber)) {
        numberError.innerText = "Incorrect Card number";
        numberError.classList.remove("hidden");
        numberInput.classList.remove("border-gray-400");
        numberInput.classList.add("border-red-700");
        return -1;
    } else {
        numberError.classList.add("hidden");
        numberInput.classList.add("border-gray-400");
        numberInput.classList.remove("border-red-700");
    }

    var mmyycvcError = document.getElementById("mmyycvc-error");

    var monthInput = document.getElementById("month");
    var yearInput = document.getElementById("year");
    var cvcInput = document.getElementById("cvc");

    if (inputMonth === "") {
        mmyycvcError.innerText = "Can't be Blank";
        mmyycvcError.classList.remove("hidden");
        monthInput.classList.remove("border-gray-400");
        monthInput.classList.add("border-red-700");
        return -1;
    } else {
        mmyycvcError.classList.add("hidden");
        monthInput.classList.add("border-gray-400");
        monthInput.classList.remove("border-red-700");
    }

    if (inputYear === "") {
        mmyycvcError.innerText = "Can't be Blank";
        mmyycvcError.classList.remove("hidden");
        yearInput.classList.remove("border-gray-400");
        yearInput.classList.add("border-red-700");
        return -1;
    } else {
        mmyycvcError.classList.add("hidden");
        yearInput.classList.add("border-gray-400");
        yearInput.classList.remove("border-red-700");
    }

    if (inputCVC === "") {
        mmyycvcError.innerText = "Can't be Blank";
        mmyycvcError.classList.remove("hidden");
        cvcInput.classList.remove("border-gray-400");
        cvcInput.classList.add("border-red-700");
        return -1;
    } else {
        mmyycvcError.classList.add("hidden");
        cvcInput.classList.add("border-gray-400");
        cvcInput.classList.remove("border-red-700");
    }
}