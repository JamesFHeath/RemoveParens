/*
* James Heath
*/

//Removes extra parentheses from a string
function removeParens(s)
{
  var result = s.split('');
  var i = 0;
  var j = s.length - 1;

  while (i !== j)
  {
    if (result[i] !== '(')
    {
      i++;
    }
    else if (result[j] !== ')')
    {
      j--;
    }
    else
    {
      i++;
      j--;
      if (result[i] === '(' &&  result[j] === ')')
      {
          result[i] = ' ';
          result[j] = ' ';
      }
    }
  }
  return result.toString().replace(/ /gi, '').replace(/,/gi, '');
}

const testCases =
[
  ['abc', 'abc'],
  ['(abc)', '(abc)'],
  ['((abc))', '(abc)'],
  ['a(bc)', 'a(bc)'],
  ['a((bc))', 'a(bc)'],
  ['(a)(b)(c)', '(a)(b)(c)'],
  ['(a)((b)(c))', '(a)((b)(c))'],
  ['(a)(((b)(c)))', '(a)((b)(c))']
];

function testRemoveParens()
{
  testCases.forEach(function(casePair)
  {
      if (removeParens(casePair[0]) !== casePair[1])
      {
        console.log("Test failed, input: " + casePair[0] + ", result: " + removeParens(casePair[0]) + ", Expected: " + casePair[1]);
      }
  });
}

testRemoveParens();
