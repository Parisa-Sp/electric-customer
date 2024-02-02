const PERSIAN_NUMBERS = {
  0: "۰",
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
};

const persianNeeded = document.querySelectorAll(".persian-number");
persianNeeded.forEach((elem)=>{
    elem.innerText = toPersianNumber(elem.innerText);
})

function toPersianNumber(text = "") {
  return text
    .split("")
    .map((letter) => PERSIAN_NUMBERS[letter] ?? letter)
    .join("");
}
