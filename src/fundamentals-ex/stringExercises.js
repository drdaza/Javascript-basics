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

export function giveTheIndexOfWord()
{
    const wordToSearch = 'Butterfly';
    const result = 0;
    const phrase = "Once upon a time!!!";
    const array = phrase.split(" ");

        result = array.indexOf("once");

    return result;
}

export function replaceFishWords()
{
    let phrase = 'Give a Man a Fish';
    
}

export function giveAllLettersInUppercase()
{
    let phrase = 'Ride Him, Cowboy!';
    
}

export function removeWhiteSpaces()
{
    let phrase = '    Hands Down    ';
    
}