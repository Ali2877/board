const container = document.querySelector('.container')
const  amount  = 1989;
const colors = ["#F67047","#D44B3D","#EB5171","#EB5171","#D43DA7","#E347F6","#F6D059","#D4A64C","#EBAD60","#D4834C","#F68159","#B5F656","#CBD44A","#EBE05D","#D4BA4A","#F6C856","#56F6B3","#4AD473","#5DEB60","#77D44A","#C2F656","#5B5FF6","#4E75D4","#63ADEB","#4EBBD4","#5BF6E9","#A14FF6","#6444D4","#585FEB","#4471D4","#4FAFF6"];
for (let i = 0; i < amount; i++) {
    const element = document.createElement('div')
    element.classList.add('Square')
    element.addEventListener("mouseover",()=>{
        let color = colors[getColor()]
        element.style.backgroundColor = color
        element.style.boxShadow =  `0px 0px 5px ${color},0px 0px 5px ${color}`
    })
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor = '#111'
        element.style.boxShadow =  `0px 0px 5px black`
    })
    container.append(element)
}
function getColor(){
    const idx =  Math.floor(Math.random() * colors.length)
    return idx
}