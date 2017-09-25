document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded$');

    var list = document.getElementsByClassName('list')[0];

    list.addEventListener('click', function (event) {
        if (event.target.classList[0] === 'button') {
            var textElement = event.target.parentNode.nextElementSibling;
            var headerElement = event.target.parentNode;
            
            if (textElement.classList.contains('container__item__text__wrapper__inactive')) {
                headerElement.classList.remove('container__item__inactive');
                textElement.classList.remove('container__item__text__wrapper__inactive');
                event.target.innerHTML = '˄';
            } else {
                headerElement.classList.add('container__item__inactive');
                textElement.classList.add('container__item__text__wrapper__inactive');
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