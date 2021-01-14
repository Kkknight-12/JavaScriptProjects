import people from './data.js'

const container= document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

container.innerHTML = people
    .map( (person, slideIndex) => {
        const { img, name, job, text } = person;
        let position =  'next'

        if(slideIndex === 0){
            position = 'active'
        } if( slideIndex === people.length -1 ){
            position = 'last'
        }

        return `
        <article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>
        `
    }).join('')

const startSlider = (type) => {
    const activeEle = document.querySelector('.active');
    const lastEle = document.querySelector('.last');
    let nextEle = activeEle.nextElementSibling;

    // 'last | active | next'
    
    if(!nextEle){
        nextEle = container.firstElementChild;
    }
    activeEle.classList.remove(['active'])
    lastEle.classList.remove(['last'])
    nextEle.classList.remove(['next'])

    if( type === 'prev' ){
    activeEle.classList.add(['next'])
    lastEle.classList.add(['active'])
    nextEle = lastEle.previousElementSibling; // activeEle
    if( !nextEle ){
        nextEle = container.lastElementChild; // nextEl
    }
    // when you assign new next which was active element 
    // will come with the class of next assigned in line 52
    nextEle.classList.remove(['active']);

    nextEle.classList.add(['last']);
    return
    }

    activeEle.classList.add(['last'])
    lastEle.classList.add(['next'])
    nextEle.classList.add(['active'])
}

nextBtn.addEventListener( 'click', ()=> {
    startSlider();
})
prevBtn.addEventListener( 'click', ()=> {
    startSlider('prev');
})

