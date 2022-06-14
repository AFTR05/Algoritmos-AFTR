//mostrar por tablas 

//mostrar ventas

//mostrar 


//volver tabla a input para editar

import { url } from "./main.js";

// const divContainer= document.getElementById("container");
// const buttonAdd= document.getElementById("addBtn");
// const buttonDelete= document.getElementById("deleteBtn");
// const buttonListUser= document.getElementById("listUsersBtn");

// buttonAdd.addEventListener("click",addUser);
// buttonDelete.addEventListener("click",deleteUser);
// buttonListUser.addEventListener("click",getUsers);

let productos=[];

const getInfo=async(objeto)=>{
    const answer= await fetch(url+objeto);
    return answer.json();
}

async function getUsers(){
    productos=await getInfo("products");
    console.log(productos)
    console.log(productos[2]['nombre'])
    
    productos.forEach(product => {
    let image=document.createElement('img')
    image.setAttribute('class', 'imagenespro')
    image.setAttribute('src', `${product.imagen}`);
    divimagenes.appendChild(image);
    let boton=document.createElement('button')
    boton.setAttribute('class', 'botonagre')
    boton.setAttribute('class','btn btn-outline-dark')
    boton.innerHTML=`Agregar`
    divimagenes.appendChild(boton)
});
}

getUsers()

const divimagenes=document.getElementById('divcom')


// async function showInfo(){
//     divContainer.innerHTML="";
//     users.forEach(item=>{
//         divContainer.innerHTML+=item.nombre+"<br>";
//     })
// }

// function addUser(){
//     let nombre=prompt("Ingrese el nombre");
//     let edad= parseInt(prompt("ingrese la edad"));
//     let user={
//         nombre:nombre,
//         edad:edad
//     }
//     users.push(user);
//     showInfo();
//     saveUser(user);
// }
// function deleteUser(){
//     let id= prompt("ingrese el ID");
//     deleteFinalUser(id);
// }

// function deleteFinalUser(id){
//     fetch(url+"users/"+id,{
//         method:'DELETE'
//     })
//     .then(response=>response.json());
//     getUsers();
// }

// function saveUser(user){
//     fetch(url+"users",{
//         method:'POST',
//         body:JSON.stringify(user),
//         headers:{
//             "Content-type":"application/json"
//         }
//     })
//     .then(response=>response.json());
// }
