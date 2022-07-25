/*const btnEnviarForm = document.querySelector('#btnEnviar')
btnEnviarForm.addEventListener('click', () =>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Formulario enviado',
        showConfirmButton: false,
        timer: 1500
      })

})*/
function guardarDatos(){
    let campo_nombre = document.getElementById("formNombre").value;
    let campo_apellido = document.getElementById("formApellido").value;
    let campo_mail = document.getElementById("formMail").value;
    let campo_opinion = document.getElementById("formOpinion").value;
    localStorage.setItem("datos_formulario", JSON.stringify({nombre:campo_nombre, apellido:campo_apellido, mail:campo_mail, opinion:campo_opinion}));
    console.log("Los datos del formulario se guardaron en la LocalStorage!");
}

function formEnviado(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Fomulario enviado',
        showConfirmButton: false,
        timer: 1500
      })
}

function mostrarErrorCampo(campo){
    swal.fire({
        icon: 'error',
        title: 'Error!',
        text:'Complete el campo '+ campo,
        confirmButtonText: 'Aceptar'
    });
}
function validarFormulario(){
    let campo_nombre = document.getElementById("formNombre").value;
    let campo_apellido = document.getElementById("formApellido").value;
    let campo_mail = document.getElementById("formMail").value;
    let campo_opinion = document.getElementById("formOpinion").value;

    if(campo_nombre.length == 0){
        mostrarErrorCampo("Nombre");
        return false;
    }
    if(campo_apellido.length == 0){
        mostrarErrorCampo("Apellido");
        return false;
    }
    if(campo_mail.length == 0){
        mostrarErrorCampo("Mail");
        return false;
    }
    if(campo_opinion.length == 0){
        mostrarErrorCampo("Opinion");
        return false;
    }
    
        guardarDatos();
        formEnviado();
    
}

document.getElementById("btnEnviar").addEventListener("click", validarFormulario);











actualizarBotonCarrito();







/*function cantidadLatas(){
    Swal.fire({
        title: 'How old are you?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Your age',
        inputAttributes: {
          min: 8,
          max: 24,
          step: 1
        },
        inputValue: 1
      })
}*/

function borrarPedidoAlerta(){


Swal.fire({
    title: '¿Deseas borrar tu pedido?',
    text: "No podras recuperarlo",
    icon: 'warning',
    showCancelButton: true,
    CancelButtonText:'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        vaciarCarrito(),
        '¡Listo!',
        'Tu pedido ha sido borrado',
        'success'
      )
    }
  })
}