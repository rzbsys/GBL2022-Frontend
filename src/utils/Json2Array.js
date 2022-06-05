function Json2Array(json) {
    var array = [];
    for (var i in json) {
        array.push([i, json[i]]);
    }
    return array;
}

export default Json2Array;