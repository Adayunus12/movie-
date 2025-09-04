const input = document.querySelector('input')
const carts = document.querySelector('.carts')
const btns = document.querySelectorAll('button')
const pegination = document.querySelector('.futter')
let currentPage = 1
let totalPages = 1

input.addEventListener("input", search)

function showMovie(films){
    carts.innerHTML = ""
    films.forEach(item => {
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
    // if(input.value === ""){
    //     btns.forEach(item => {
    //         item.style.display = "none"
    //     })
    // } 
}

function search(page = 1){
    console.log(page)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f83941526089cc5eb682dc744508f2a8&language=tr-TR&query=${input.value}&page=${page}`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            console.log(result)
            showMovie(result.results)
            updatePage()
            totalPages = result.total_pages
        })
        .catch((error) => {
            console.log(error)
        })    
        // btns.forEach(item => {
        //     item.style.display = "inline"
        // })
}
// if(input.value === ""){
//     btns.forEach(item => {
//         item.style.display = "none"
//     })
// } 

function updatePage(){
    pegination.innerHTML = ""
    const previou = createElement('button')
    previou.textContent = '<'
    previou.disabled = currentPage <= 1
    previou.addEventListener('click', search(currentPage - 1))
    const next = createElement('button')
    next.textContent = '>'
    next.disabled = currentPage >= totalPages
    next.addEventListener('click', search(currentPage + 1))
    pegination.append(previou, next)
}
