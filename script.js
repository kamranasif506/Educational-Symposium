const speakers = {
  speaker1: {
    name: 'Kamran Asif',
    title: 'Software Engineer',
    image: 'images/My project-1.png',
    chessIcon: 'images/chess.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  speaker2: {
    name: 'Rana Mudassir',
    title: 'Software Engineer',
    image: 'images/mudassir.png',
    chessIcon: 'images/chess.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  speaker3: {
    name: 'Mir Hamza',
    title: 'Software Engineer',
    image: 'images/pachal.jpg',
    chessIcon: 'images/chess.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  speaker4: {
    name: 'Zeeshan',
    title: 'Software Engineer',
    image: 'images/hamza.jpg',
    chessIcon: 'images/chess.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  speaker5: {
    name: 'Aarif Hameed',
    title: 'Software Engineer',
    image: 'images/zain.jpg',
    chessIcon: 'images/chess.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  speaker6: {
    name: 'Zahid Akbar',
    title: 'Software Engineer',
    image: 'images/zeeshan.jpg',
    chessIcon: 'images/chess.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
};
const humbergIcon = document.getElementById('navbar-btn');
const closeBtn = document.getElementById('close_nav');
const navbarNav = document.getElementById('navbarNav');

humbergIcon.addEventListener('click', () => {
  navbarNav.style.width = '100%';
  closeBtn.style.cssText += ';display:block !important;';
});
closeBtn.addEventListener('click', () => {
  navbarNav.style.width = '0%';
  closeBtn.style.display = 'none';
});
const menuItems = document.getElementsByClassName('nav-link');
Array.from(menuItems).forEach((li) => {
  li.addEventListener('click', () => {
    navbarNav.style.width = '0%';
    closeBtn.style.display = 'none';
  });
});
let speakersHtml = '';
let count = 0;
Object.values(speakers).forEach((speakers) => {
  if (count === 0) {
    speakersHtml += '<div class="row mt-5">';
  } else if (count === 2 || count === 4) {
    speakersHtml += '</div><div class="row mt-5">';
  }
  speakersHtml += `<div class="col-md col-12">
                        <div class="row">
                            <div class="col-4 parent_div">
                            <img src="${speakers.chessIcon}" alt="" class="chess first_chess">
                            <img src="${speakers.image}" alt="" class="user custom_height w-100 "></div>
                            <div class="col-8 justify-content-center">
                            <h2 class="d-block">${speakers.name}</h2>
                            <h4 class="d-block text-danger">${speakers.title}</h4>
                            <p class="d-block feature_description">${speakers.description}</p>
                            </div>
                        </div>
                    </div>`;
  if (count === 5) {
    speakersHtml += '</div>';
  }
  count += 1;
});
let speakerHeadHtml = ` <div class="container p-3 mb-5">
                            <h3 id="program_heading" class="text-center">Featured Speakers</h3>
                            <hr class="hr">

                            </div>

                            <div class="container">`;
speakerHeadHtml += speakersHtml;
speakerHeadHtml += '</div>';
const speakersSection = document.getElementById('speakers');
speakersSection.innerHTML = speakerHeadHtml;
