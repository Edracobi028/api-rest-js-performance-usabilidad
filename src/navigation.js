//Escuchar cuando click al boton busqueda y cambiar el hash search
searchFormBtn.addEventListener('click', () => {
    
    
    location.hash = '#search=' + searchFormInput.value;
});
//Llamar boton ver mas
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

// Escuchar al dar click para Mandar a home
arrowBtn.addEventListener('click', () => {
    history.back(); //Para ir hacia atras segun lo visto
    //location.hash = '#home';
});
window.addEventListener('DOMContentLoaded', navigator, false); //Escuchar evento al cargar la app + llamar la funcion + false
window.addEventListener('hashchange', navigator   , false); //Escuchar evento hashchange + llamar la funcion + false


//Para leer el hash cuando cargue la app y al cambiar el hash
function navigator() {
    console.log({location});
    
    //leer si empieza con trends
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if (location.hash.startsWith('#search=')){
        searchPage();
    }else if (location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
    //location.hash;
    document.body.scrollTop = 0; //Posicione inicialmente hasta arriba
    document.documentElement.scrollTop = 0; //Posicione inicialmente hasta arriba (Safari)

}

function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long'); //Ocultar
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.remove('header-arrow--white'); //Aparecer
    headerTitle.classList.add('inactive'); //Ocultar
    headerCategoryTitle.classList.remove('inactive'); //Aparecer
    searchForm.classList.add('inactive'); //Ocultar

    trendingPreviewSection.classList.add('inactive'); //Aparecer
    categoriesPreviewSection.classList.add('inactive'); //Aparecer
    genericSection.classList.remove('inactive'); //Ocultar    
    movieDetailSection.classList.add('inactive'); //Ocultar

    headerCategoryTitle.innerHTML = 'Tendencias';  //Nombrar tendencias

    getTrendingMovies();
}
function searchPage() {
    console.log('Search!!');

    headerSection.classList.remove('header-container--long'); //Ocultar
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.remove('header-arrow--white'); //Aparecer
    headerTitle.classList.add('inactive'); //Ocultar
    headerCategoryTitle.classList.add('inactive'); //Aparecer
    searchForm.classList.remove('inactive'); //Aparecer

    trendingPreviewSection.classList.add('inactive'); //Aparecer
    categoriesPreviewSection.classList.add('inactive'); //Aparecer
    genericSection.classList.remove('inactive'); //Ocultar    
    movieDetailSection.classList.add('inactive'); //Ocultar

    // ['#search', 'buscardor']
    const [_,query] = location.hash.split('='); //Nombramos sus dos partes y Separamos en dos la url
    getMoviesBySearch(query); //envia lo que el usuario busca
}
function movieDetailsPage() {
    console.log('Movie!!');
    /* MODIFICACION DEL DOM */
    headerSection.classList.add('header-container--long'); //remover la clase 
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.add('header-arrow--white'); //Ocultar
    headerTitle.classList.add('inactive'); //Aparecer
    headerCategoryTitle.classList.add('inactive'); //Ocultar
    searchForm.classList.add('inactive'); //Ocultar
    trendingPreviewSection.classList.add('inactive'); //Ocultar
    categoriesPreviewSection.classList.add('inactive'); //Ocultar
    genericSection.classList.add('inactive'); //Ocultar    
    movieDetailSection.classList.remove('inactive'); //Aparecer 

    // ['#movie', 'id']
    const [_,movieId] = location.hash.split('='); //Dividir y nombrar sus dos partes y separamos en dos la url (hash)
    
    
    getMovieByID(movieId); //Obtener detalles de pelicula pasando el id de la pelicula
}
function categoriesPage() {
    console.log('Categories!!');

    headerSection.classList.remove('header-container--long'); //aparecer
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.remove('header-arrow--white'); //Aparecer
    headerTitle.classList.add('inactive'); //Aparecer
    headerCategoryTitle.classList.remove('inactive'); //Aparecer
    searchForm.classList.add('inactive'); //Aparecer

    trendingPreviewSection.classList.add('inactive'); //Aparecer
    categoriesPreviewSection.classList.add('inactive'); //Aparecer
    genericSection.classList.remove('inactive'); //Ocultar    
    movieDetailSection.classList.add('inactive'); //Ocultar 

    //Obtener el id para enviar en la funcion
    const [_,categoryData] = location.hash.split('='); //Nombramos sus dos partes y Separamos en dos la url 
    const [categoryId, categoryName] =  categoryData.split('-'); //Dividir el id y nombre de categoria

    headerCategoryTitle.innerHTML = categoryName;  //insertar el nombre de la categoria usando el extraido
    getMoviesByCategory(categoryId); //Llamar a la funcion que trae las categorias
       
}
function homePage() {
    //Cuando entremos a home
    console.log('Home !!');

    headerSection.classList.remove('header-container--long'); //remover la clase 
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.add('inactive'); //Ocultar flecha
    arrowBtn.classList.remove('header-arrow--white'); //Ocultar
    headerTitle.classList.remove('inactive'); //Aparecer
    headerCategoryTitle.classList.add('inactive'); //Aparecer
    searchForm.classList.remove('inactive'); //Aparecer

    trendingPreviewSection.classList.remove('inactive'); //Aparecer
    categoriesPreviewSection.classList.remove('inactive'); //Aparecer
    genericSection.classList.add('inactive'); //Ocultar 
    movieDetailSection.classList.add('inactive'); //Ocultar

    //Ocultar
    getTrendingMoviesPreview(); //Llamar a la funcion
    getCategoriesPreview(); //Llamar a la funcion
}
