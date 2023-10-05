window.onload = function () {
    window.addEventListener('resize', function() {
        alert('Size matters');
    })
}
document.querySelector('img').addEventListener('mouseover', function() {
    alert('Pretty, isn’t it?');
});
