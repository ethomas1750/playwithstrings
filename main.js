/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
  let newstr = ''
  for(let char of str){
    newstr = newstr + "x"
  }
  return newstr
}

function yellingChars(str){
  let newstr = ''
  for(let char of str){
    newstr = newstr + char + "!"
  }
  return newstr
}

function indexedChars(str){
  let newstr = ''
  let num = 0
  for(let char of str){
    newstr = newstr + num + char
    num = num + 1
  }
  return newstr
}

function numberedChars(str){
  let newstr = ''
  let num = 1
  for(let char of str){
    newstr = newstr + "(" + num + ")" + char
    num = num + 1
  }
  return newstr
}

function exclaim(str){
  let newstr = ''
  for(let char of str){
    if(char === "?" || char === "."){
      newstr = newstr + "!"
    } else {
      newstr = newstr + char
    }
  }
  return newstr
}

function repeatIt(str, num){
  let newstr = ""
  for (let i = 0; i < num; i++){
    newstr = newstr + str
  }
  return newstr
}

function truncate(str){
  let newstr = ""
  if (str.length < 18){
    return str
  } else {
    for(let i = 0; i < 15;i++){
      newstr = newstr + str[i]
    }
    return newstr + "..."
  }
}

function emailify(str){
  let str1 = str.toLowerCase()
  let num = str1.indexOf(" ") + 1
  newstr = ""
  for (let i = num; i < str1.length;i++){
    newstr = newstr + str1[i]
  }
  return str1[0] + newstr + ".prsvr@gmail.com"
}

function reverse(str){
  let newstr = ''
  for(let i = str.length-1;i>= 0;i--){
    newstr = newstr + str[i]
  }
  return newstr
}

function onlyVowels(str){
  let onvow = ''
  let vowels = "aeiouAEIOU"
  for (let char of str){
    if(vowels.indexOf(char) !== -1){
      onvow = onvow + char
    }
  }
  return onvow
}

function crazyCase(str){
  let newstr = ''
  for(let i = 0; i < str.length; i++){
    if(i % 2 === 0){
      newstr = newstr + str[i].toLowerCase()
    } else {
      newstr = newstr + str[i].toUpperCase()
    }
  }
  return newstr
}
function titleCase(str){
  let newstr = str[0].toUpperCase()
  
  for(let i = 1; i < str.length;i++){
    if(str[i-1]=== " "){
      newstr = newstr + str[i].toUpperCase()
    } else {
      newstr = newstr + str[i].toLowerCase()
    }
  }
  return newstr
}

function camelCase(str){
  let str1 = "b" + str
  let str2 = titleCase(str1)
  let str3 = ""
  for (let i = 1; i < str2.length; i++){
    if(str2[i]=== " "){
      str3 = str3
    } else {
      str3 = str3 + str2[i]
    }
  }
  return str3
}

function crazyCase2ReturnOfCrazyCase(str){
  newstr = ""
  count = 1

  for(let i = 0;i < str.length; i++){
    if(str[i]=== " "){
      count ++
    }
    if(count % 2 !== 0){
      newstr = newstr + str[i].toLowerCase()
      count ++
    } else {
      newstr = newstr + str[i].toUpperCase()
      count ++
    }
  }
  return newstr
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
