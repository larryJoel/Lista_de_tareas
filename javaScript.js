//seleccionar los elementos del dom
const input = document.getElementById('ingresa-tarea');
const boton = document.querySelector('button');
const ListaDeTareas = document.getElementById('lista-de-tareas');

//eventos
function agregarTarea(){
    if(input.value){
      //crear un elemento nuevo
      let tareaNueva = document.createElement('div');
      //crear una clase al elemento nuevo
      tareaNueva.classList.add('tarea');

      //texto ingresado por el usuario
      let texto = document.createElement('p');
      //agregar en la propiedad innerText-> el valor de elemento input
      texto.innerText = input.value;
      //agregamos un nodo hijo a la tarea nueva
      tareaNueva.appendChild(texto);

      //crear y agregar contenedor de iconos
      let iconos = document.createElement('div');
      iconos.classList.add('iconos');
      tareaNueva.appendChild(iconos);

      //iconos
      let completar = document.createElement('i');
      //agregando iconos de bootstrap
      completar.classList.add('bi', 'bi-check-circle-fill','icono-completar');
      completar.addEventListener('click', completarTarea);

      let eliminar = document.createElement('i');
      eliminar.classList.add('bi', 'bi-trash3-fill','icono-eliminar');
      eliminar.addEventListener('click', eliminarTarea);

      iconos.append(completar,eliminar);

      //agregar la tarea nueva a la lista
      ListaDeTareas.appendChild(tareaNueva)
      input.value = "";
    }else{
      alert('Por favor ingresa una tarea');
    }
}

//definir funcion completar tarea
function completarTarea (e){
  // tarea obtiene el valor el signo de confirmación
  let tarea = e.target.parentNode.parentNode;
  //agregar el metodo toggle: permite alternar el valor de la clase
  tarea.classList.toggle('completada');
}

function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}


//agregar un evento de escucha al botón
boton.addEventListener('click', agregarTarea); 
//otro tipo de evento con el enter evento al presionar una tecla
input.addEventListener('keydown',(e)=>{
  if(e.key === 'Enter' ){
    agregarTarea() ;
  }
});