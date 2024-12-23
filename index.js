const inputNum = document.getElementById("num")
const lengthP = document.getElementById("length")
const volumeP = document.getElementById("volume")
const massP = document.getElementById("mass")
const convertBtn = document.getElementById("btn")


function convert() {
    vol=""
    len=""
    masse=""
    const number =  inputNum.value
    if(!number){
        alert("enter a number")
    }
    else{
        converted_length_m = (number * 3.281).toFixed(3)
        converted_length_f = (number / 3.281).toFixed(3)
        converted_volume_l = (number * 0.264).toFixed(3)  
        converted_volume_g= (number / 0.264).toFixed(3)
        converted_mass_kg = (number * 2.204).toFixed(3)
        converted_mass_p = (number / 2.204).toFixed(3)
        len = `${number} meters = ${converted_length_f} feet | ${number} feet = ${converted_length_m} meters`
        vol = `${number} liters = ${converted_volume_g} gallons | ${number} gallons = ${converted_volume_l} liters`
        masse = `${number} kilos = ${converted_mass_kg} pounds | ${number} pounds = ${converted_mass_p} kilos`
        lengthP.textContent = len 
        volumeP.textContent = vol
        massP.textContent = masse
    }
}

convertBtn.addEventListener("click" , () => {
    convert()
})