// let btnBg = document.getElementById("bg")
// btnBg.addEventListener("click", (evento)=>{
//     const color1 = '#' + Math.floor(Math.random()*12345689).toString(16);
//     color = color1
//     document.body.style.backgroundColor = color
//     console.log(color);
    
// })

let btnBg = document.getElementById("bg")
btnBg.addEventListener("click", (evento)=>{
    const color1 = Math.floor(Math.random()*123456789).toString(16);
    color = '#' + '${color1}'
    document.body.style.backgroundColor = color
})