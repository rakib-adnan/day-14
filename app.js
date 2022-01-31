const form_btn= document.getElementById('form_btn');
const namee = document.getElementById('name');
const output = document.getElementById('output');

let rexp = /^[a-zA-Z ]{3,}$/;

form_btn.addEventListener('submit', function(e){
    
    // output.innerHTML=`<p class="text-success">Loading....</p>`

    e.preventDefault();
        setInterval( () => {
            let name = this.querySelector("input[type='text']").value
        let date = document.querySelector("input[type='date']").value
        let dot = document.querySelector("input[type='time']").value
        let gender = document.querySelector('input[type="radio"]:checked').value;
       
        
        if(rexp.test(name) == false || date == false || dot == false || gender == false){
            output.innerHTML=`<p class=" alert-danger alert">All Feiled Are Required</p>`
        }else{
            let curr_date =new Date();
            let date_time= new Date(date + ' ' + dot);
            let allsec =Math.abs( Math.floor(curr_date.getTime() - date_time.getTime()) /1000);
            let min = Math.floor(allsec /60);
            let hours = Math.floor(min /60);
            let day = Math.floor(hours /24);
            let month = Math.floor(day /30);
            let year = Math.floor(month /12);

            let total_month = month -(year *12);
           
            let total_day = day -(year *12 *30) - (total_month *30);
            let total_hr = hours - (year * 12 * 30 * 24) - (total_month * 30 * 24) -(total_day *24);
            let total_min = Math.floor(min -(year *12 * 30 * 24 * 60) - (total_month * 30 * 24 * 60) - (total_day * 24 * 60) - (total_hr * 60));
            total_sec = Math.floor(allsec - (year * 12 * 30 * 24 * 60 * 60) - (total_month * 30 * 24 * 60 * 60) - (total_day * 24 * 60 * 60) - (total_hr * 60 * 60) - (total_min * 60));
            
            output.innerHTML=`<p class="alert alert-success"> Hello ${name} You are ${ gender} <br> 
            ${zeroTime(year)} Year : ${zeroTime(total_month)} Month
            : ${zeroTime(total_day)} Day : ${zeroTime(total_hr)}<br>
             Hours : ${zeroTime(total_min)}<br> 
             Minute : ${zeroTime(total_sec)} Second Years Old</p>`

        }
              
    
        },2000);
        

});