let list = document.querySelectorAll('.tm-row .card');
list.forEach (item =>{
    item.addEventListener('click', function(event){
        if (event.target.classList.contains('bi-cart-plus')){
            var itemN = item.cloneNode(true);
            document.querySelector('.list-cart').appendChild(itemN);
        }
    })
})