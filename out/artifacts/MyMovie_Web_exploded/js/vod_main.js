let movies_json;
const genres = ["Year","Action","Mystery","Sci-Fi","Thriller","Adventure","Comedy"];


$(function(){
    idbg.style.backgroundImage = "url(http://35.204.167.3/movies/pictures?pic=background)";
    fetchJson();
})

function closeWindow(){
    idark.style.display = "none";
    idbox.innerHTML = "";
    idframe.innerHTML = "";
    idframe.style.height = "60%";
    idbg.style.overflowY = "scroll";
    document.body.style.overflow = "auto";
}

function fetchJson() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4){
            movies_json = JSON.parse(this.response);
            generateAllMovies();
        }
    }
    xhttp.open("GET", "http://35.204.167.3/movies/movies.json", true);
    xhttp.send();
}

function showAPI() {
    idbrowse.innerHTML = "";
    idh1.innerHTML = "Movies json API";
    idapi.style.display = "block";
}

function showSeries() {
    idapi.style.display = "none";
    idbrowse.innerHTML = "";
    idnav.style.display = "none";
    idh1.innerHTML = "Browse Movies";
    idh1.style.display = "block";
    if (!idbg.style.backgroundImage.includes("background")) {
        idbg.style.backgroundImage = "url(http://35.204.167.3/movies/pictures?pic=background)";
    }
    for (let item of movies_json) {
        if (item.series.length > 0) {
            let link = new Series(item);
            link.generateLink(idbrowse)
        }
    }
}

function showCategories(){
    idapi.style.display = "none";
    generateAllMovies();
    idnav.style.display = "block";
    idcat.innerHTML = "";
    idh1.style.display = "none";
    let yearCategory;
    for(let i in genres){
        let categoryNav = new Category(idcat,genres[i]);
        categoryNav.addCategory();
        if(genres[i] == "Year"){
            yearCategory = categoryNav;
        }
        categoryNav.setYear(yearCategory);
    }
}

function generateAllMovies() {
    idapi.style.display = "none";
    idh1.style.display = "block";
    idh1.innerHTML = "Browse Movies";
    idnav.style.display = "none";
    idbrowse.innerHTML = "";
    if (!idbg.style.backgroundImage.includes("background")) {
        idbg.style.backgroundImage = "url(http://35.204.167.3/movies/pictures?pic=background)";
    }
    for (let item of movies_json) {
        if (item.series.length > 0) {
            generateMovies(item.movies, function (movie) {
                return true;
            });
        }
    }
}


function generateMovies(content, condition) {
    for (let movie of content) {
        if (condition(movie)) {
            let generated = new VODCard(movie);
            generated.addToHtml(idbrowse);
        }
    }
}