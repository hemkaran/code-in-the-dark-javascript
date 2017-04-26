/**
 * Created by hemkaran on 27/04/17.
 */
var cases = [{
    input: [[1, 2, 3], [5, 2, 1, 4]],
    output: [3, 4, 5]
}, {
    input: [[1, 2, 5], [2, 3, 5], [3, 4, 5]],
    output: [1, 4, 5]
},{
    input: [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]],
    output: [1, 4, 5]
}, {
    input: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]],
    output: [2, 3, 4, 6, 7]
}, {
    input: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]],
    output: [1, 2, 4, 5, 6, 7, 8, 9]
}, {
    input: [[1,2,3]],
    output: [1,2,3]
}, {
    input: [[], [1,2]],
    output: [1,2]
}, {
    input: [[3,4], []],
    output: [3,4]
}, {
    input: [],
    output: []
}, {
    input: [[]],
    output: []
}];

function checkResult () {
    var result = document.getElementById('results');
    for(var i = 0; i < cases.length; i++) {
        var output = compareArray(sym.apply(window, cases[i].input), cases[i].output);
        var li = document.createElement('li');
        var color = output ? 'green' : 'red';
        li.innerHTML = '<span style=\'color:' + color + ';font-weight:bold\'>' + output + '</span>' + ' -- ' + JSON.stringify(cases[i].input) + ' == ' + JSON.stringify(cases[i].output);
        result.appendChild(li);
    }
}

function compareArray(arr1, arr2) {
    arr1 = arr1.sort(); arr2 = arr2.sort();
    if (arr1.length != arr2.length) return false;
    for (var i = 0; i < arr2.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}