/**
 * Created by hemkaran on 27/04/17.
 */
var question = {
    statement: [
        'function pair(arr, arg) {',
        '',
        '   return arg;',
        '}'
    ],
    type: 'javascript',
    editLine: 2,
    prepend: '<script>',
    append: 'function checkResult(){for(var t=document.getElementById("results"),u=0;u<cases.length;u++){var e=pair.apply(window,cases[u].input)==cases[u].output,n=document.createElement("li"),p=e?"green":"red";n.innerHTML="<span style=\'color:"+p+";font-weight:bold\'>"+e+"</span> -- "+JSON.stringify(cases[u].input)+" == "+JSON.stringify(cases[u].output),t.appendChild(n)}}var cases=[{input:[[1,4,2,3,0,5],7],output:11},{input:[[1,3,2,4],4],output:1},{input:[[1,1,1],2],output:2},{input:[[0,0,0,0,1,1],1],output:1},{input:[[],100],output:0},{input:[[7,9,11,13,15],20],output:6}];;</script><body onload=checkResult()><ul id=\'results\'></ul></body>'
};
question.statement = question.statement.join('\n');
module.exports = question;
