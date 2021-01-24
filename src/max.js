const max = (list) => {
    return maxElement(list, 0);
}

function maxElement(list, currentPosition){
    if(currentPosition == list.length - 1) return list[currentPosition];
        return Math.max(list[currentPosition], maxElement(list, currentPosition + 1));
}

module.exports = max;