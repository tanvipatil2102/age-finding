let cl = console.log;

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const birthYear = document.getElementById("birthYear");
const btn = document.getElementById("btn");

let onShowBtn = (eve) => {
    
    let obj = {
        fName : firstName.value,
        lName : lastName.value,
        bYear : birthYear.value
    }

    let d = new Date();
    let getYear = d.getFullYear()
    let age = getYear - obj.bYear;
    cl(age);

    Swal.fire({
        title: `${age}`,
        text: `${obj.fName} ${obj.lName} your age is ${age} years`,
        icon: "success"
      });
}



btn.addEventListener("click", onShowBtn);