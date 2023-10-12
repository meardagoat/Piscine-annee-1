const imagesData  = [['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
    ['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif', 'Happy sausage'],
    ['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif', 'Stripes'],
    ['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif', 'Tornadoes'],
    ['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif', 'Walking squares'],
    ['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif', 'Cubes'],
    ['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif', 'Hairy'],
    ['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif', 'The Beanstalk'],
    ['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif', 'Tiles'],
    ['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif', 'In and Out'],
    ['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif', 'Switching points']]

generateCards(imagesData)

// Enable horizontal mouse wheel scrolling
document.querySelector("#cards-list").addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollLeft += ((e.deltaY || e.deltaX) * 30);
}, { passive: false });

// Zoom in card on click
window.addEventListener('DOMContentLoaded', (event) => {
    let cards = document.querySelectorAll(".card");
    for(let i=0; i<cards.length; i++) {
        cards[i].addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.card.active').forEach((card) => {
                card.classList.remove('active');
            });
            this.classList.add('active');
        });
    }
});

// Zoom out card on pressing Escape key
document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.card.active').forEach((card) => {
            card.classList.remove('active');
        });
    }
});
