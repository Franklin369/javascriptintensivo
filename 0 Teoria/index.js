const txt = document.getElementById("resp")
async function obtenerData(){
   await fetch("http://127.0.0.1:5501/0%20Teoria/data.json")
   .then(response=>response.json())
   .then(json=> console.log(json))
   .catch(error=>console.log('Solicitud fallido',error))
}
obtenerData();

