const form = document.querySelector('#memeForm');
const memeImg = document.querySelector('input[name="image"]');
const textTop = document.querySelector('input[name="textTop"]');
const textBottom = document.querySelector('input[name="textBottom"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(memeImg.value + "MEME IMG");
    console.log(textTop.value + "TEXT TOP");
    console.log(textBottom.value + "TEXT BOTTOM");
    const newMeme = makeMeme (
        memeImg.value,
        textTop.value,
        textBottom.value
    );
    results.appendChild(newMeme);
});

function makeMeme (img, top, bottom) {
    const meme = document.createElement('figure');
    meme.innerHTML = `<div class="image"><img src="${img}">
        <p class="top">${top}</p>
        <p class="bottom">${bottom}</p>
    </div>
    `;
    return meme;
}

results.addEventListener('click', function(e) {
    e.target.parentElement.parentElement.remove();
});