/*learned how to parse data here: https://www.w3schools.com/js/js_json_parse.asp */
const letterA = JSON.parse('{"letter":"A", "value":1, "amount":9}');
const letterB = JSON.parse('{"letter":"B", "value":3, "amount":2}');
const letterC = JSON.parse('{"letter":"C", "value":3, "amount":2}');
const letterD = JSON.parse('{"letter":"D", "value":2, "amount":4}');
const letterE = JSON.parse('{"letter":"E", "value":1, "amount":12}');
const letterF = JSON.parse('{"letter":"F", "value":4, "amount":2}');
const letterG = JSON.parse('{"letter":"G", "value":2, "amount":3}');
const letterH = JSON.parse('{"letter":"H", "value":4, "amount":2}');
const letterI = JSON.parse('{"letter":"I", "value":1, "amount":9}');
const letterJ = JSON.parse('{"letter":"J", "value":8, "amount":1}');
const letterK = JSON.parse('{"letter":"K", "value":5, "amount":1}');
const letterL = JSON.parse('{"letter":"L", "value":1, "amount":4}');
const letterM = JSON.parse('{"letter":"M", "value":3, "amount":2}');
const letterN = JSON.parse('{"letter":"N", "value":1, "amount":5}');
const letterO = JSON.parse('{"letter":"O", "value":1, "amount":8}');
const letterP = JSON.parse('{"letter":"P", "value":3, "amount":2}');
const letterQ = JSON.parse('{"letter":"Q", "value":10, "amount":1}');
const letterR = JSON.parse('{"letter":"R", "value":1, "amount":6}');
const letterS = JSON.parse('{"letter":"S", "value":1, "amount":4}');
const letterT = JSON.parse('{"letter":"T", "value":1, "amount":6}');
const letterU = JSON.parse('{"letter":"U", "value":1, "amount":4}');
const letterV = JSON.parse('{"letter":"V", "value":4, "amount":2}');
const letterW = JSON.parse('{"letter":"W", "value":4, "amount":2}');
const letterX = JSON.parse('{"letter":"X", "value":8, "amount":1}');
const letterY = JSON.parse('{"letter":"Y", "value":4, "amount":2}');
const letterZ = JSON.parse('{"letter":"Z", "value":10, "amount":1}');

var boardLetters = [];
var rackLetters = [];


function StartGame(){
    var randomNum;
    for(let i = 0; i < 7; i++){
        randomNum = Math.floor(Math.random() * 26) + 1; /*learned how to make random values here: https://www.w3schools.com/js/js_random.asp*/

        switch(randomNum){
            case 1:
                
        }
    }

}