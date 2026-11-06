function random_color() {
    this.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function big() {
    this.style.fontSize = `${18 * 2}px`;
}

function small() {
    this.style.fontSize = `18px`;
}

function print_insides() {
    console.log(this.innerHTML);
}

function change_inner() {
    this.innerHTML = "powiat krakowski";
}

function size_up() {
    this.size = this.size + 1;
}

function number(e) {
    if (e.key >= '0' && e.key <= '9') {
        document.querySelector('#liczba').innerText += e.key;
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    const element = document.querySelector('#kontener');
    element.addEventListener('click', random_color);
    element.addEventListener('mouseenter', big);
    element.addEventListener('mouseleave', small);

    const element2 = document.querySelector(".wyroznione");
    element2.addEventListener('mouseenter', print_insides);
    element2.addEventListener('dblclick', change_inner);

    const element3 = document.querySelector("#artykul");
    element3.addEventListener('keyup', size_up);
    element3.addEventListener('keydown', number);
});