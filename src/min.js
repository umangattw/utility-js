const min = (list) => {
    return minElement(list, 0);
}

function minElement(list, currentPosition){
    if(currentPosition == list.length - 1) return list[currentPosition];
        return Math.min(list[currentPosition], minElement(list, currentPosition + 1));
}

module.exports = min;