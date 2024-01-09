document.addEventListener('DOMContentLoaded', function() {
    const cookieWall = document.getElementById('cookieWall');
    const pageContent = document.getElementById('pageContent');
    const acceptButton = document.getElementById('acceptButton');

    acceptButton.addEventListener('click', function() {
        pageContent.style.display = 'block';
        cookieWall.style.display = 'none';
    });
});
