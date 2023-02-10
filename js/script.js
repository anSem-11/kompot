document.addEventListener('DOMContentLoaded', () => {
    let phoneInput = document.querySelector('.content__form-input');
    let form = document.querySelector('.content__form');

    // mask
    phoneInput && createMask();

    function createMask() {
        var elements = document.getElementsByClassName('content__form-input');
        for (var i = 0; i < elements.length; i++) {
            new IMask(elements[i], {
                mask: '+7(000)-000 00 00',
            });
        }
    }

    

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'URL', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.send(new FormData(form));
    });

})