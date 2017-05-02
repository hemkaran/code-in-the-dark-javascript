/**
 * Created by hemkaran on 27/04/17.
 */
var cases = [{
    input: [[1, 4, 2, 3, 0, 5], 7],
    output: 11
}, {
    input: [[1, 3, 2, 4], 4],
    output: 1
},{
    input: [[1, 1, 1], 2],
    output: 2
}, {
    input: [[0, 0, 0, 0, 1, 1], 1],
    output: 1
}, {
    input: [[], 100],
    output: 0
}, {
    input: [[7, 9, 11, 13, 15], 20],
    output: 6
}];

function checkResult () {
    var result = document.getElementById('results');
    for(var i = 0; i < cases.length; i++) {
        var output = pair.apply(window, cases[i].input) == cases[i].output;
        var li = document.createElement('li');
        var color = output ? 'green' : 'red';
        li.innerHTML = '<span style=\'color:' + color + ';font-weight:bold\'>' + output + '</span>' + ' -- ' + JSON.stringify(cases[i].input) + ' == ' + JSON.stringify(cases[i].output);
        result.appendChild(li);
    }
}