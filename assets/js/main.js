const token = "VOTRE TOKEN RECU PAR MAIL"
const urlBase = "http://146.59.242.125:3009/"
const addForm = document.querySelector('#addForm')

async function getPromos() {
   const response = await fetch(urlBase + "promos", {
    method:"GET",
    headers: {
        Authorization : "Bearer " + token
    }
   })
   const data = await response.json()
   console.log(data);
}


addForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    let data = {
        name : document.querySelector('#name').value,
        startDate : document.querySelector('#startDate').value,
        endDate: document.querySelector('#endDate').value,
        formationDescription : document.querySelector('#formationDescription').value,
    }
    data = JSON.stringify(data)
    const response = await fetch(urlBase + "promos", {
        method:"POST",
        headers: {
            Authorization : "Bearer " + token,
            "Content-type": "Application/json"
        },
        body: data
       })
       getPromos()
})



function create(params) {
    console.log("Voila mon etudiant");
}
function direbonjour(params) {
    console.log("Salut");
    
}

getPromos()