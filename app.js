// import datos from './datos.js'

// let datos=[{codigo:"3456777", cantidad: 2 }, {codigo:"78768684", cantidad:3},{codigo:"8763863", cantidad:5}]
// Initialize Cloud Firestore through Firebase

  

let consulta={};
let objeto={};
let index= 0


const ingresar=()=>{
    const codigoIng= document.getElementById('codigo').value;
    const cantidadIng=document.getElementById('cantidad').value;
    objeto.codigo=codigoIng;
    objeto.cantidad=cantidadIng;
    addElement();
    console.log(objeto);
consulta[index] = objeto
console.log(consulta);
index++;

};

const addElement= ()=> {
    let tdcodigo=document.createElement('p');
    tdcodigo.innerText= objeto.codigo;
    document.getElementById('resultado').appendChild(tdcodigo);
    let tdcantidad=document.createElement('p');
    tdcantidad.innerText=objeto.cantidad;
    document.getElementById('resultado').appendChild(tdcantidad);
}
