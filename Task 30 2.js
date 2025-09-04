const obj = JSON.parse(localStorage.getItem('obj'))

const name = obj.name
const img = obj.img
const reyting = obj.reyting
const summary = obj.summary
const year = obj.year

const back = document.querySelector('.back')
const image = document.querySelector('.img')
const title = document.querySelector('.name')
const average = document.querySelector('.reyting')
const story = document.querySelector('.summary')

back.addEventListener('click', function(){
    window.location.href = 'Task 30.html'
})
console.log(title);

image.src = img
title.innerHTML = `${name} (${year})`
average.innerHTML = `⭐${reyting}`
story.innerHTML = summary || '🚫 Oh sorry, summary is not assigned'