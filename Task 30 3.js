const input = document.querySelector('input')
const carts = document.querySelector('.carts')

function showMovie(films) {
    carts.innerHTML = ""
    films.forEach(item => {
        console.log(item)
        const cart = document.createElement('div')
        cart.classList = 'cart'
        const h3 = document.createElement('h3')
        h3.innerHTML = item.title
        const img = document.createElement('img')
        img.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
        const reyting = document.createElement('div')
        reyting.className = 'reyting'
        const p = document.createElement('p')
        p.innerHTML = `⭐${item.vote_average}`
        reyting.append(p)
        cart.append(img, h3, reyting)
        carts.append(cart)
        img.addEventListener('click', function(){
            const name = item.title
            const img = `https://image.tmdb.org/t/p/original/${item.poster_path}`
            const summary = item.overview
            const reyting = item.vote_average
            const year = item.release_date
            
            const obj = {
                name,
                img,
                summary,
                reyting,
                year
            }

            localStorage.setItem('obj',JSON.stringify(obj))
            window.location.href = 'Task 30 2.html'
        })
    })
}

function searchMoive() {
    if (input.value === "") {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f83941526089cc5eb682dc744508f2a8&language=tr-TR`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                console.log(result.results)
                showMovie(result.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    else {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=f83941526089cc5eb682dc744508f2a8&language=tr-TR&query=${input.value}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                console.log(result.results)
                showMovie(result.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

searchMoive()

input.addEventListener('input', function () {
    searchMoive()
})
