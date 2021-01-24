const filter = (list, filterItem) => {
    let result = [];
    let start = 0;
    filterCurrentPosition(list, filterItem, result, start);
    return result;
}

function filterCurrentPosition(list, filterItem, result, currentPosition){
    if(currentPosition == list.length) return;
    if(filterItem(list[currentPosition])) result.push(list[currentPosition]);
    filterCurrentPosition(list, filterItem, result, currentPosition + 1);
}

module.exports = filter;