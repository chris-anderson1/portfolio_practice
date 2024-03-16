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
