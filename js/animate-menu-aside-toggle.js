let list = document.querySelectorAll('.menu__responsive-list');
for(let i = 0; i<list.length; i++){
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'menu__responsive-list';
        }
        list[i].className = 'menu__responsive-list active';
    }
}

let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.menu__responsive');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('activemen').style="transition: width 0.45s;";
}

