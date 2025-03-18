
const ramenMenu = document.getElementById('ramen-menu');
const detailImage = document.getElementById('detail-image');
const ratingDisplay = document.getElementById('Rating-display');
const commentDisplay = document.getElementById('Comment-display');
const newRamen = document.getElementById('new-ramen');

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

const ramenData = {
    'gyukotsu': { rating: '9/10', comment: 'Rich beef broth, very satisfying' },
    'kojiro': { rating: '8/10', comment: 'Spicy and flavorful' },
    'naruto': { rating: '10/10', comment: 'My absolute favorite' },
    'nirvana': { rating: '7/10', comment: 'Unique taste, worth trying' },
    'shoyu': { rating: '8.5/10', comment: 'Classic soy sauce perfection' }
};

ramenMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const ramenName = e.target.alt.split(' ')[0]; 
        const imageSrc = e.target.src;
        
        detailImage.src = imageSrc;
        detailImage.alt = e.target.alt;

        if (ramenData[ramenName]) {
            ratingDisplay.textContent = ramenData[ramenName].rating;
            commentDisplay.textContent = ramenData[ramenName].comment;
        }
    }
});

newRamen.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('new-name').value.toLowerCase();
    const rating = document.getElementById('new-rating').value + '/10';
    const comment = document.getElementById('new-comment').value;
    const imageUrl = document.getElementById('new-image').value;
    
    ramenData[name] = { rating, comment };
    
    const newRamenImg = document.createElement('img');
    newRamenImg.src = imageUrl; 
    newRamenImg.alt = `${name} ramen`;
    ramenMenu.appendChild(newRamenImg);
    
    newRamen.reset();
    
    alert(`Added ${name} ramen successfully!`);
});