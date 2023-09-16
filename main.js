const statement = document.querySelector("#statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.querySelector("#explanation");

const fact = {
    statement: "Strings can be mutated.",
    answer: false,
    explanation:
        "Strings are immutable in JS. They are wrapped inside of a String object that allows changing strings by making new ones/copies.",
};
statement.textContent = fact.statement;
const disable = (btn) => btn.setAttribute("disabled", "");
const enable = (btn) => btn.removeAttribute("disabled");
const isCorrect = (guessString) => guessString === fact.answer.toString();
for (let btn of optionButtons) {
    btn.addEventListener("click", () => {
        explanation.textContent = fact.explanation;
        for (let btn of optionButtons) {
            disable(btn);
        }
        if (btn.name === fact.answer.toString()) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("incorrect");
        }
    });
}
