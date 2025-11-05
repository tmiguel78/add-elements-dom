 // Aquí tu código

const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', () => {
    const elemento = prompt('Agrega un elemento');
    const elementoLista = document.createElement('li');
    lista.appendChild(elementoLista);
    elementoLista.textContent = elemento;
})