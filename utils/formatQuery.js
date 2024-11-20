const formatQuery = (string) => {
    if(string.search(/[\s]/g) !== -1) return string;

    let split = string.split(/([?=+ ?=* ?=/ ?=× ?=÷])/g).join(' ');

    split = split.split('').map((element, index) => {
        let returnValue = "";
        if (element === '*') returnValue = "×";
        else if (element === "/") returnValue = "÷";
        else returnValue = element;

        if(element === "-" && /[0-9]/g.test(split[index - 1])){
            return " " + returnValue + " ";
        } else {
            return returnValue;
        };
    });

    return split.join('');
};

module.exports = { formatQuery };