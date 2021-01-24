const reduce = (list, reduceFunction, value) => {
    if(list.length == 0) return value;
    if(value == undefined) return reduceAllElements(list, reduceFunction, 0);
    return reduceFunction(value, reduceAllElements(list, reduceFunction, 0));
};

const reduceAllElements = (list, reduceFunction, currentPosition) => {
    if(currentPosition == list.length - 1) return list[currentPosition];
    return reduceFunction(list[currentPosition], reduceAllElements(list, reduceFunction, currentPosition + 1));
};

module.exports = reduce;
