const map = (list, mapFunction) => {
    var start = 0;
    mapCurrentPosition(list, mapFunction, start);
    return list;
}

const mapCurrentPosition = (list, mapFunction, currentPosition) => {
    if(currentPosition == list.length) return;
    list[currentPosition] = mapFunction(list[currentPosition]);
    mapCurrentPosition(list, mapFunction, currentPosition + 1);
}

module.exports = map;