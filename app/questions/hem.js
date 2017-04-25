/**
 * Created by hemkaran on 25/04/17.
 */

var question = {
    statement: [
        '<!-- Print the star pattern given in the image -->',
        '<s'+ 'cript>',
        'function printStar() {',
        '',
        '}',
        '<' + '/script>',
        '<body onload="printStar()">',
        '   <div id="star-pattern"></div>',
        '</body>'
    ],
    type: 'html',
    editLine: 3,
    prepend: '',
    append: ''
};
question.statement = question.statement.join('\n');
module.exports = question;