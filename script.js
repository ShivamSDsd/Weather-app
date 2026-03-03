const city = document.getElementById("city");
const btn = document.getElementById("btn");
const temp = document.getElementById("temp");
const humi = document.getElementById("humi");
const cond = document.getElementById("cond");
const reset = document.querySelector(".reset");

const api = async()=>{
        const value = city.value;
    if(value === ""){
        alert("please enter city");
        return;
    }
const url=`https://api.weatherapi.com/v1/current.json?key=c4192b0954874cf1bdd104503260303&q=${value}&aqi=no`
let fetc = await fetch(url);
let jso =  await fetc.json();
try{
temp.innerHTML = `Temparature: ${jso.current.temp_c}°C`
humi.innerHTML = `Humidity: ${jso.current.humidity}%`;
cond.innerHTML =`Condition: ${jso.current.condition.text}`;
console.log(jso);
document.querySelector(".d2").style.display="flex";}
catch(error){
    alert("city nto found");
}
}
btn.addEventListener("click",api)
reset.addEventListener("click",()=>{
   city.value ="";
    temp.innerHTML = "";
    cond.innerHTML ="";
    humi.innerHTML = "";
})
city.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        api();
    }
})
