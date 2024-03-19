let view = document.getElementById('tech')
let closed = document.getElementById('cloz')

let open = function() {
    tech.style.display = 'none';
    techs.style.display = 'block';
    cloz.style.display = 'block';
}

let close = function(){
    tech.style.display = 'block';
    techs.style.display = 'none';
    cloz.style.display = 'none';
}

view.addEventListener('click', open)

closed.addEventListener('click', close)



let projects = document.getElementById('pro')
let none = document.getElementById('no')

let check = function() {
    pros.style.display = 'block';
}

let stop = function() {
    pros.style.display = 'none';
}

projects.addEventListener('click', check)
none.addEventListener('click', stop)


