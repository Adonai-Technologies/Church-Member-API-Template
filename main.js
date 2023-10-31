let submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", submit);

function submit() {
    let inputVal = document.getElementById("name").value;
    let inputVal2 = document.getElementById("location").value;
    let inputVal3 = document.getElementById("contact").value;
    let inputVal4 = document.getElementById("marital_status").value;

    class Churchmembers {
        constructor(name) {
            this.name = name;
        }
        PayWelfare() {
            console.log("contributor to warefare");
        }
        present() {
            console.log("Present @ Church today");
        }
        absent() {
            console.log("absent @ church today");
        }
    }

    class Memberdetails extends Churchmembers {
        constructor(name, location, contact, maritalStatus) {
            super(name);
            this.location = location;
            this.contact = contact;
            this.maritalstatus = maritalStatus;
        }
    }

    let newComer = new Memberdetails(`${inputVal}`, `${inputVal2}`, `${inputVal3}`, `${inputVal4}`);

    console.log(newComer);

    localStorage.setItem(b,x)
    localStorage.getItem(b)
}
