class VODCard{
    constructor(_movie){
        this.movie = _movie;
    }
    addToHtml(_parent){
        let container = newDiv("col-11 cont col-sm-8");
        _parent.appendChild(container);

        let row = newDiv("row");
        container.appendChild(row);

        let imgDiv = newDiv("col-sm-3 col-12 p-4 box");
        row.appendChild(imgDiv);

        let contentDiv = newDiv("col-sm-9 col-11 pt-3 pb-2");
        row.appendChild(contentDiv);

        let img = newImg(this.movie.image);
        img.style.maxWidth = "100%";
        imgDiv.appendChild(img);

        let descriptable = newDiv("");
        contentDiv.append(descriptable);

        descriptable.innerHTML = `<h2>${this.movie.name}</h2>`;
        descriptable.appendChild(newPar("Year: ",this.movie.year));
        descriptable.appendChild(newPar("Rating: ",this.movie.rating));
        descriptable.appendChild(newPar("Genre: ",this.movie.genre));
        descriptable.appendChild(newPar("",this.movie.story,"story"));

        let btnTrailer = newBtn("Trailer");
        contentDiv.appendChild(btnTrailer);

        let btnWatch = newBtn("Watch Now");
        contentDiv.appendChild(btnWatch);


        descriptable.onclick = function(){
            idark.style.display = "block";
            idbox.style.display = "block";
            document.body.style.overflow = "hidden";

            let nested = newDiv("nested");
            idbox.appendChild(nested);
            
            let img = newImg(this.movie.image,"mr-4 float-left");
            img.style.maxHeight = "400px";
            nested.appendChild(img);
            nested.appendChild(newH(this.movie.name));
            nested.appendChild(newPar("Year: ",this.movie.year));
            nested.appendChild(newPar("Length: ",this.movie.length));

            let desc = newPar("",this.movie.description);
            nested.appendChild(desc);

        }.bind(this)

        btnTrailer.onclick = function(){
            idark.style.display = "block";
            idbox.style.display = "none";
            newFrame(this.movie.trailer,idframe);
            document.body.style.overflowY = "hidden"
        }.bind(this)

        btnWatch.onclick = function(){
            idark.style.display = "block";
            idbox.style.display = "none";
            newVideo(this.movie.video,this.movie.subtitles,idframe);
            document.body.style.overflowY = "hidden"
        }.bind(this)
    }

}
