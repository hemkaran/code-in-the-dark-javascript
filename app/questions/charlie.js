var question = {
    statement: [
        'function sym() {',
        '   var retArr = []',
        '',
        '   return retArr;',
        '}'
],
    type: 'javascript',
    editLine: 3,
    prepend: '<script>',
    append: ';function checkResult(){for(var t=document.getElementById("results"),u=0;u<cases.length;u++){var n=compareArray(sym.apply(window,cases[u].input),cases[u].output),e=document.createElement("li"),p=n?"green":"red";e.innerHTML="<span style=\'color:"+p+";font-weight:bold\'>"+n+"</span> -- "+JSON.stringify(cases[u].input)+" == "+JSON.stringify(cases[u].output),t.appendChild(e)}}function compareArray(t,u){if(t=t.sort(),u=u.sort(),t.length!=u.length)return!1;for(var n=0;n<u.length;n++)if(t[n]!==u[n])return!1;return!0}var cases=[{input:[[1,2,3],[5,2,1,4]],output:[3,4,5]},{input:[[1,2,5],[2,3,5],[3,4,5]],output:[1,4,5]},{input:[[1,1,2,5],[2,2,3,5],[3,4,5,5]],output:[1,4,5]},{input:[[3,3,3,2,5],[2,1,5,7],[3,4,6,6],[1,2,3]],output:[2,3,4,6,7]},{input:[[3,3,3,2,5],[2,1,5,7],[3,4,6,6],[1,2,3],[5,3,9,8],[1]],output:[1,2,4,5,6,7,8,9]},{input:[[1,2,3]],output:[1,2,3]},{input:[[],[1,2]],output:[1,2]},{input:[[3,4],[]],output:[3,4]},{input:[],output:[]},{input:[[]],output:[]}];;</script><body onload=checkResult()><ul id=\'results\'></ul></body>'
};
question.statement = question.statement.join('\n');
module.exports = question;