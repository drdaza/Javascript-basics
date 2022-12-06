export function returnHello(word)
{
    return word;
}

export function returnAString()
{
    /* Completa la function */
    return "Hello World";
}

export function concatenateStrings(Thirdword)
{
    /* Completa la function */
    const firstWord = 'I';
    const secondWord = 'Love';

    return `${firstWord} ${secondWord} ${Thirdword}`;
    
}

export function giveOneLetter(param1, param2)
{
    /* Completa la function */
    const separateWord = param1.split("");

    if(separateWord.includes(param2)){
        return param2;
    }
}

export function giveTheIndexOfWord(word)
{
    const wordToSearch = 'Butterfly';
    let result = 0;
    const phrase = 'Once upon a time!!!';
    const array = phrase.split(' ');
    console.log(array);
    result= array.indexOf(word);

    return result;
}

export function replaceFishWords(word)
{
    let phrase = 'Give a Man a Fish';

    return phrase.replace('Fish',word);
    
}

export function giveAllLettersInUppercase(word)
{
    let phrase = word;
    return phrase.toUpperCase()
}

export function removeWhiteSpaces(word)
{
    let phrase = word;
    return phrase.trim();
}