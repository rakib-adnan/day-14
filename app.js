const name = document.getElementById("name")
const formbtn = document.getElementById("form-btn")
const output = document.getElementById("output")




let rexp = /^[a-zA-Z ]{3,}$/;

formbtn.addEventListener("submit", function(e) {
    
output.innerHTML = `<p class="text-success">Loading your Data...</p>`

    e.preventDefault();
    setInterval(() => {

        let name = this.querySelector("input[type='text']").value
        let date = document.querySelector("input[type='date']").value
        let dot = document.querySelector("input[type='time']").value
        let gender = document.querySelector('input[type="radio"]:checked').value

        if (rexp.test(name) ==false || date == false || dot == false || gender.value == false){
            output.innerHTML = ` <p class="alert-danger alert"> All Feiled Requird</p>`
        } else{

         let currDate = new Date();
        let dobdate = new Date(date + " " + dot)

        let allsec = Math.floor(currDate.getTime() - dobdate.getTime()) / 1000;

        let min = Math.floor(allsec / 60);
        let hours = Math.floor(min / 60);
        let day = Math.floor(hours / 24);
        let month = Math.floor(day / 30);
        let year = Math.floor(month / 12);

        let total_month = month - (year * 12);
        let total_day = day - (year * 12 * 30) - (total_month * 30);

        let total_hr = hours - (year * 12 * 30 * 24) - (total_month * 30 * 24) - (total_day * 24);

        let total_min = Math.floor(min - (year * 12 * 30 * 24 * 60) - (total_month * 30 * 24 * 60) - (total_day * 24 * 60) - (total_hr * 60));
        let total_sec = Math.floor(allsec - (year * 12 * 30 * 24 * 60 * 60) - (total_month * 30 * 24 * 60 * 60) - (total_day * 24 * 60 * 60) - (total_hr * 60 * 60) - (total_min * 60));

        output.innerHTML = ` <p class="alert-success alert">Hello ${name} Your are ${gender} </br> ${zeroTime(year)}Year : ${zeroTime(total_month)} Month : ${zeroTime(total_day)} Day : ${zeroTime(total_hr)} Hours :${zeroTime(total_min)} Munite : ${zeroTime(total_sec)} Second Years Old</p>`
        
        
        
    
    }
    },2000);








})