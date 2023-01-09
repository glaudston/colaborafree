function playwork(){
const name = document.getElementById(`name`).value
const lastname = document.getElementById(`lastname`).value
const cpfnumber = document.getElementById(`cpfnumber`).value

const comfirm = confirm(`Iniciar jornada de ${name} ${lastname}\nCPF : ${cpfnumber}`)
if(comfirm){
    const daylist = document.getElementById(`daylist`)
    const datafree = document.createElement('li')
    datafree.id =  "dados" + cpfnumber
    datafree.innerText = 
    `nome : ${name} ${lastname}\n
    CPF : ${cpfnumber}\n

    `
    daylist.appendChild(datafree)

    document.getElementById(`name`).value = ''
    document.getElementById(`lastname`).value = ''
    document.getElementById(`cpfnumber`).value = ''
}}
function remove(){
    const cpfremove = document.getElementById("removerfree").value
  const nameToremove = document.getElementById("dados" + cpfremove)
    
const confirmation = confirm(`Deseja finalizar a jornada do colaborador :\n ${nameToremove.innerText}\n`)

if(confirmation){
    document.getElementById('daylist').removeChild(nameToremove)
}

}