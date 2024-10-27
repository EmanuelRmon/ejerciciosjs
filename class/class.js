//     const productos=[
//         {nombre: "televisor", precio: 300},
//         {nombre: "celular", precio: 200},
//         {nombre: "laptop", precio: 1000},
//         {nombre: "tablet", precio: 150}
//      ]
//     for (let i = 0; i < productos.length; i++) {
//          const element = productos[i];

//          if(element.precio > 200){
//             element.precio -= element.precio * 0.10
//          }
//      }
    
// console.log(productos);

//-------------------------------------------------------------------------//

// const usuarios = [
//     {nombre: "laura", activo: true},
//     {nombre: "pedro", activo: false},
//     {nombre: "marta", activo: true},
//     {nombre: "jorge", activo: false}
// ]
// let activos = []
// for (let index = 0; index < usuarios.length; index++) {
//     const element = usuarios[index];
    
//     if(element.activo){
//         activos.push(element)
        
        
//     }
// }
// console.log(usuarios);

// console.log(activos);

//-------------------------------------------------------------------------//


//  const usuarios = [
//      {nombre: "laura", edad: 30, activo: true},
//      {nombre: "pedro", edad: 25, activo: false},
//      {nombre: "marta", edad: 28, activo: true},
//      {nombre: "jorge", edad: 35, activo: false},
//      {nombre: "ana", edad: 40, activo: true}
//  ]
//  let activos = []
//  let promedio = 0
//  for (let index = 0; index < usuarios.length; index++) {
//     const element = usuarios[index];
    
//     if (element.activo) {
//         activos.push(element)
//     }

//     for (let i = 0; i < activos.length; i++) {
//         const elementos = activos[i];
        
//         promedio += elementos.edad / activos.length;

//     }
    
//  }
// console.log(activos);

// console.log(promedio.toFixed(0));      //---------(este esa mal)-----------//

//-------------------------------------------------------------------------------//
