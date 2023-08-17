const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
button.addEventListener('click', () => {
	nav.classList.toggle('activo');
});

const whatsappIcon = document.querySelector('.whatsapp-icon');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const footerPosition = footer.getBoundingClientRect().top;

    whatsappIcon.classList.toggle('show', scrollY > 200 && scrollY < footerPosition);
});

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
	toggleIndicadores('next');
});

flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
	toggleIndicadores('previous');
});

const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
	const indicador = document.createElement('button');
	indicador.classList.toggle('activo', i === 0);
	document.querySelector('.indicadores').appendChild(indicador);

	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;
		toggleActiveIndicator(e.target);
	});
}

fila.addEventListener('mouseleave', () => {
	peliculas.forEach((pelicula) => pelicula.classList.remove('hover'));
});

function toggleIndicadores(direction) {
	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (direction === 'next' && indicadorActivo.nextSibling) {
		toggleActiveIndicator(indicadorActivo.nextSibling);
	} else if (direction === 'previous' && indicadorActivo.previousSibling) {
		toggleActiveIndicator(indicadorActivo.previousSibling);
	}
}

function toggleActiveIndicator(indicador) {
	const activeIndicator = document.querySelector('.indicadores .activo');
	activeIndicator.classList.remove('activo');
	indicador.classList.add('activo');
}

function search() {
	const searchText = document.getElementById('searchInput').value.toLowerCase();
	const rows = document.querySelectorAll('.tabla tr');

	for (let i = 0; i < rows.length; i++) {
		const description = rows[i].getElementsByTagName('td')[0];
		if (description) {
			const descriptionText = description.textContent || description.innerText;
			rows[i].style.display = descriptionText.toLowerCase().includes(searchText) ? '' : 'none';
		}
	}
}