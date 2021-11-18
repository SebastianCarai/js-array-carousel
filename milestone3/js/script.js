const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let itemIndex=0;
const imgContainer = document.querySelector('.img_container');
const textContainer = document.querySelector('.texts');
const thumbContainer = document.querySelector('.thumbnails_container');

for (i=0; i<items.length; i++) {
    const singleItem = items[i];
    const singleTitle = title[i];
    const singleText = text[i];

    // Adding big image
    const singleImage = `
    <img src="../${singleItem}" alt="Image ${i}" class="single_image">
    `;
    imgContainer.innerHTML += singleImage;

    // Adding texts
    const singleTitleText =`    
    <div class="single_text">
        <h4>${singleTitle}</h4>
        <p>${singleText}</p>
    </div>
    `;
    textContainer.innerHTML += singleTitleText;

    // Adding Thumbnails
    const singleThumb=`
    <div class="thumb grayscale">
        <img src="../${singleItem}" alt="">
    </div>
    `;
    thumbContainer.innerHTML += singleThumb;
}

const inactiveImages = document.getElementsByClassName('single_image');
inactiveImages[itemIndex].classList.add('active');
const inactiveTexts = document.getElementsByClassName('single_text');
inactiveTexts[itemIndex].classList.add('active');
const inactiveThumbs = document.getElementsByClassName('thumb');
inactiveThumbs[itemIndex].classList.remove('grayscale');


// EVENTS MENAGER
const prevBtn = document.querySelector('.btn_top');
const nextBtn = document.querySelector('.btn_bottom');
// Prev
prevBtn.addEventListener('click', function(){
    inactiveImages[itemIndex].classList.remove('active');
    inactiveTexts[itemIndex].classList.remove('active');
    inactiveThumbs[itemIndex].classList.add('grayscale');

    itemIndex--;
    if (itemIndex<0){
        itemIndex= items.length-1;
    }
    inactiveImages[itemIndex].classList.add('active');
    inactiveTexts[itemIndex].classList.add('active');
    inactiveThumbs[itemIndex].classList.remove('grayscale');
})
// Next
nextBtn.addEventListener('click', function(){
    inactiveImages[itemIndex].classList.remove('active');
    inactiveTexts[itemIndex].classList.remove('active');
    inactiveThumbs[itemIndex].classList.add('grayscale');

    itemIndex++;
    if (itemIndex > items.length - 1){
        itemIndex= 0;
    }
    inactiveImages[itemIndex].classList.add('active');
    inactiveTexts[itemIndex].classList.add('active');
    inactiveThumbs[itemIndex].classList.remove('grayscale');
})