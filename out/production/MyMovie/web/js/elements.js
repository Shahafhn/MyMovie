function newBtn(title){
    let btn = document.createElement("button");
    btn.className = "btn btn-secondary";
    btn.innerHTML = title;
    return btn;
}

function newA(element,title,to,callback){
    let a = document.createElement("a");
    a.href = to;
    if(element)
        a.innerHTML = `<${element}>${title}</${element}>`;
    else
        a.innerHTML = title;
    a.onclick = callback;
    return a;
}


function newH(title){
    let h2 = document.createElement("h2");
    h2.innerHTML = title;
    return h2;
}

function newFrame(src,parent){
    let link = src.replace("watch?v=","embed/");
    let frame = document.createElement("iframe");
    frame.src = link;
    frame.style.width = "80%";
    frame.style.height = "100%";
    parent.appendChild(frame);

}

function newVideo(videoSrc,subtitleSrc,parent){
    let video = `<video playsinline controls preload="auto" width="95%" ><source src="${videoSrc}" type="video/mp4; codec=&quot;h264,acc&quot;"><track src="${subtitleSrc}" label="Hebrew" kind="subtitles" srclang="he"></video>`;
    parent.innerHTML = video;
}

function newImg(src,name){
    let img = document.createElement("img");
    img.className = name;
    img.src = src;
    return img;
}

function newPar(title,string,name){
    let p = document.createElement("p");
    p.innerHTML = title + string;
    if(name){
        p.className = name;
    }
    return p;
}

function newDiv(_class){
    let div = document.createElement("div");
    div.className = _class;
    return div;
}