const formatQuery = (string) => {
    if(string.search(/[\s]/g) !== -1) return string;

    const piCheck = string.split(/([?=+ ?=* ?=/ ?=× ?=÷ ?=%])/g);
    let pi = piCheck.map((element) => {
        if(element === "3.141592654") return "π";
        return element;
    });

    pi = pi.join("").replaceAll("**", "^").split("");

    let split = pi.join("").split(/([?=+ ?=* ?=/ ?=× ?=÷ ?=π ?=% ?=^])/g).join(" ");

    split = split.split("").map((element, index) => {
        let returnValue = "";
        if (element === "*") returnValue = "×";
        else if (element === "/") returnValue = "÷";
        else returnValue = element;


        if(element === " " && split[index - 1] === " "){
            return;
        } else if(element === "-" && /[0-9]/g.test(split[index - 1])){
            return " " + returnValue + " ";
        } else {
            return returnValue;
        };
    });

    return split.join("").trim();
};

module.exports = { formatQuery };