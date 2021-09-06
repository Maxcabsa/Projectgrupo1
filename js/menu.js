var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
})
var inputs = document.getElementsByClassName('formulario_input-text')
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
                this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar')
        }
    })
}
