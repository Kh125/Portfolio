const menu = document.querySelector('.menu-icon');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const arrowBtn = document.getElementById('arrowBtn');
const portfolioBox = document.querySelector('.portfolio-box');
const secondary = document.querySelector('.secondary');
const toggleBtn = document.querySelectorAll('.toggle-mode');

const portfolioData = [
    {
        img: 'img/book renting.png',
        name: 'Book Renting System',
        tech: 'laravel, tailwind, javascript',
        github: 'https://github.com/Kh125/book_renting_system',
    },
    {
        img: 'img/bookInfo.png',
        name: 'Book Info',
        tech: 'laravel, tailwind, jquery',
        github: 'https://github.com/Kh125/bookInfo',
    },
    {
        img: 'img/movieInfo.png',
        name: 'MovieForU',
        tech: 'laravel, tailwind, livewire',
        github: 'http://floating-cove-95883.herokuapp.com/',
    },
    {
        img: 'img/covidInfo.png',
        name: 'Covid 19 Dashboard',
        tech: 'flask, bootstrap',
        github: 'https://github.com/Kh125/Covid-19',
    },
    {
        img: 'img/nothing.png',
        name: 'Ferry Management System',
        tech: 'php, javascript, mysql',
        github: 'https://github.com/Kh125/Ferry-Management-System-Third-Yr',
    },
    {
        img: 'img/nothing.png',
        name: 'GameDev',
        tech: 'php, javascript, mysql',
        github: '',
    },    
];

portfolioData.forEach((portfolio) => {
    const html = `<div class="portfolio-card max-w-[280px] portfolio-el my-4">
        <div class="card-img">
            <img src="${ portfolio.img }" alt="book renting">
        </div>
        <div class="card-content py-4 px-2">
            <h4 class="font-semibold text-sm">${ portfolio.name }</h4>
            <p class="font-bold text-gray-500 mt-1">${ portfolio.tech }</p>
        </div>
        <div class="card-btn px-2 mb-4">
            ${ portfolio.github ? `<a target="_blank" href="${ portfolio.github }" class="px-5 py-1">More</a>` : `<a class="px-5 py-1">No Info</a>` }
        </div>                
    </div>`;
    portfolioBox.insertAdjacentHTML('beforeend', html);
});

// wb_incandescent
function toggleMode() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        toggleBtn.forEach((btn) => {
            btn.textContent = "wb_incandescent";
            btn.style.transform = "rotate(180deg)";
        });
        document.body.style.transition = ".5s";
        document.body.style.animation = "ease-in";
    } else {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        toggleBtn.forEach((btn) => {
            btn.textContent = "brightness_2";
            btn.style.transform = "rotate(45deg)";
        });
        document.body.style.transition = ".5s";
        document.body.style.animation = "ease-in-out";
    }
}

function checkForm(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Field cannot be empty. Check the form again!');
        event.preventDefault();
    }
}

function scrollToTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrowBtn.classList.remove('hidden');
    } else {
        arrowBtn.classList.add('hidden');
    }
}

menu.addEventListener('click', function() {            
    sidebar.style.right = "0px";
    sidebar.style.transition = ".3s";
    sidebar.style.animation = "ease-in";
});

closeBtn.addEventListener('click', function() {
    sidebar.style.right = "-230px";
    sidebar.style.transition = ".3s";
    sidebar.style.animation = "ease-out";
});

window.onscroll = function () {
    scrollToTop();
};

arrowBtn.addEventListener('click', function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
});

