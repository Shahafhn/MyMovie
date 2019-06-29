class Series{
    constructor(_item){
        this.item = _item;
    }
    generateLink(_parent){
        let content = newDiv("col-sm-8 col-11 cont");
        _parent.appendChild(content);

        let link = newA("h2",this.item.series,"#",function(){
            idbrowse.innerHTML = "";
            idbg.style.backgroundImage = `url(${this.item.cover})`;
            idh1.innerHTML = this.item.series;
            generateMovies(this.item.movies,function(movie){
                return true;
            });
        }.bind(this))
        content.appendChild(link);
    }
}