document.addEventListener('DOMContentLoaded', function () {
    const closedFaceElement = document.querySelector('.closed');
    const openFaceElement = document.querySelector('.open');

    function openFaceFunction() {
        if (closedFaceElement.classList.contains('closed')) {
            closedFaceElement.classList.remove('active');
            openFaceElement.classList.add('active');
        }
    }

    function closedFaceFunction() {
        if (openFaceElement.classList.contains('open')) {
            openFaceElement.classList.remove('active');
            closedFaceElement.classList.add('active');
        }
    }
    
    document.querySelector('.closed').onclick = closedFaceFunction;
    document.querySelector('.open').onclick = openFaceFunction;
});
