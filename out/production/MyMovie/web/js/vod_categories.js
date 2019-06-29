class Category {
    constructor(_parent, _string) {
        this.string = _string;
        this.parent = _parent;
        this.rising = true;
    }

    addCategory() {
        let link = newA(false, this.string, "#", function () {
            idbrowse.innerHTML = "";
            if (!this.string.includes("Year")) {
                for (let item of movies_json) {
                    generateMovies(item.movies, function (movie) {
                        return movie.genre.includes(this.string);
                    }.bind(this))
                }
                this.yearCategory.rising = true;
            }
            else {
                let allMovies = [];
                for (let series of movies_json) {
                    for (let movie of series.movies) {
                        allMovies[allMovies.length] = movie;
                    }
                }
                mergeSort(allMovies, 0, allMovies.length - 1);
                if (this.rising) {
                    this.rising = !this.rising;
                    reverse(allMovies);
                }else {
                    this.rising = !this.rising;
                }
                generateMovies(allMovies, function (movie) {
                    return true;
                })
            }
        }.bind(this))
        this.parent.appendChild(link);
    }

    setYear(_yearCategory){
        this.yearCategory = _yearCategory;
    }
}

function mergeSort(arr, l, r) {
    if (arr[l].year >= arr[r].year)
        return;
    let m = Math.floor(l + (r - l) / 2)
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = [];
    let R = [];

    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];  //L[0] = arr[l]
    for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }

    let i = 0
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
        if (L[i].year <= R[j].year) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
