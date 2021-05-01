const lines = new MultilineText;

const getLoremPart = (wordsCount) => {
    let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt consequuntur doloribus ab, ipsa nesciunt magnam odit fugit facilis accusamus laborum deleniti voluptatum nostrum maiores perspiciatis atque consectetur quis fuga.";
    const arr = lorem.split(" ");
    const to = wordsCount || Math.floor(Math.random() * arr.length) + 1;
    return arr.slice(0, to).join(" ");
}

const randomArrIndex = (arr) => Math.floor(Math.random() * arr.length);

//generate some test elements
for (let i=0; i<20; i++) {
    const tags = ["h1", "h2", "h3", "h4"];
    const el = document.createElement(tags[randomArrIndex(tags)]);
    el.innerText = getLoremPart();
    el.classList.add(`font${i % 5 + 1}`);
    document.querySelector(".container").append(el);
}

//add dynamic title with different class
const button = document.querySelector("#addH");
button.onclick = function() {
    button.disabled = true;
    const elements = document.querySelectorAll("h1, h2, h3, h4");
    elements.forEach((el, i) => {
        if (el.parentElement.classList.contains("container")) {
            const types = ["A", "B", "C", "D", "E"];
            el.classList.add(`style${types[i % types.length]}`)
        }
        lines.addElement(el)
    });
}