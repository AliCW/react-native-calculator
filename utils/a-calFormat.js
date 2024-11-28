const aCalcFormat = (array) => {

    return [...array].map((element) => {
        if(element === "×") return "*";
        if(element === "÷") return "/";
        else return element
      }).join("");
}

module.exports = { aCalcFormat };