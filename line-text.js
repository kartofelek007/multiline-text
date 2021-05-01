class LinesText {
    constructor() {
        this._elements = [];
        this._bindEvents();
    }

    _bindEvents() {
        let t = setTimeout(() => {
            this.recalculateAllElements();
        }, 0)

        window.addEventListener("resize", e => {
            clearTimeout(t);
            setTimeout(() => {
                this.recalculateAllElements();
            }, 0)
        })
    }

    addElement(element) {
        this._prepareHTML(element);
        this._calculateLines(element);
        this._elements.push(element);
    }

    recalculateAllElements() {
        this._elements.forEach(el => {
            this._prepareHTML(el);
            this._calculateLines(el)
        });
    }

    _calculateLines(element) {
        const row = {};
        for (let el of element.children) {
            if (row[el.offsetTop] === undefined) row[el.offsetTop] = [];
            row[el.offsetTop].push(el);
        }

        // setTimeout(() => {
            element.innerHTML = "";

            for(let arr of Object.values(row)) {
                console.log(arr);
                const rowEl = document.createElement("div");
                rowEl.classList.add("lines-text__row")
                arr.forEach((el, i) => {
                    rowEl.append(el);
                });
                element.append(rowEl);
            }
        // }, 0);

    }

    _prepareHTML(element) {
        element.classList.add("line-text");

        if (element.dataset.textLines) {
            const span = element.querySelectorAll("span.line-text__word")
            element.innerHTML = [...span].map(el => `<span class="line-text__word">${el.innerText}</span>`).join(" ");
        } else {
            element.innerHTML = element.textContent
                .trim()
                .split(" ")
                .map(w => `<span class="line-text__word">${w}</span>`)
                .join(" ");
            element.dataset.textLines = true;
        }
    }

}