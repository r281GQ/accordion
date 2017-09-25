document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded$');

    var list = document.getElementsByClassName('list')[0];

    list.addEventListener('click', function (event) {
        if (event.target.classList[0] === 'button') {
            if (event.target.parentNode.nextElementSibling.classList.contains('container__item__text__wrapper__inactive')) {
                event.target.parentNode.classList.remove('container__item__inactive');
                event.target.parentNode.nextElementSibling.classList.remove('container__item__text__wrapper__inactive');
                event.target.innerHTML = '˄';
            } else {
                event.target.parentNode.classList.add('container__item__inactive');
                event.target.parentNode.nextElementSibling.classList.add('container__item__text__wrapper__inactive');
                event.target.innerHTML = 'ˇ';
            }
        }
    });

    axios.get('http://design.propcom.co.uk/buildtest/accordion-data.json')
        .then(function (response) {
            var data = response.data.blocks;

            var sectionItems = document.getElementsByClassName('container__item');

            for (var i = 0; i < sectionItems.length; i++) {
                sectionItems[i].firstElementChild.innerHTML = data[i].heading;
                sectionItems[i].nextElementSibling.firstElementChild.innerHTML = data[i].content;
            }
        });
});