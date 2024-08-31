const form = document.querySelector("form");

form.addEventListener("submit", 
    function(e){
        // default condition
        e.preventDefault()
        // collect data when we sumbit form
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const results = document.querySelector("#results");
        
        // conditions
        if(height === '' || height < 0 || isNaN(height)){
            results.innerHTML = "Enter Valid Height";
        }
        else if(weight === '' || weight < 0 || isNaN(weight)){
            results.innerHTML = "Enter Valid Weight";
        }
        else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi < 18.6){
            results.innerHTML = `<span>BMI - ${bmi}</span> <br> <p>"You are in under weigth categary"</p>`;
        }
        else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span>BMI - ${bmi}</span> <br> <p>"You are in normal weigth categary"</p>`;
        }else {
            results.innerHTML = `<span>BMI - ${bmi}</span> <br> <p>"You are in over weigth categary"</p>`;
        }
        }
    }
)