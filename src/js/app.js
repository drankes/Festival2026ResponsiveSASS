document.addEventListener('DOMContentLoaded', function(){

    navegacionFija()
    crearGaleria()
    resaltarEnlace()
})


function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function(){
        window.addEventListener('scroll', function(){
            if(sobreFestival.getBoundingClientRect().bottom < 1){
                header.classList.add('fixed')
            }else{
                header.classList.remove('fixed')
            }
        })
    })

}

function crearGaleria(){

    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')



    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'imagen Galeria'

        //evento
        imagen.onclick = function(){
            mostrarImagen(i)

        }

        galeria.appendChild(imagen)
    }
}
function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'imagen Galeria'

    //generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'x'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    //agregar al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-Out')

    setTimeout(() =>{
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500)

}

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(sections =>{
            const sectionTop = sections.offsetTop
            const sectionHeight = section.clientHeight
            
            if(window.scrollY >= (sectionTop - sectionHeight / 3 )) {
                actual = section.id
            }

        })

        navLinks.forEach(link => {
            if(link.getAttribute('href') === '#' + actual)
                link.classList.add('active')
        })
    })
}




