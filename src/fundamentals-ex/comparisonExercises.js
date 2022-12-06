export function isJane(name)
{
    /* La function debe devolver Jane, obligatorio el uso del comparador == */
    return (name=='Jane') ? 'Jane' : 'is not Jane';

}

export function compareNumbers(number1, number2)
{
    /* La function debe devolver 10, obligatorio el uso del comparador === */
    return (number1===number2) ? parseInt(number1) : 0; 
}

export function isGreaterThan10(quantitity)
{
    return (Math.max(quantitity, 10)) ? quantitity : 10;
}

export function isGreaterThan10AndEqualTo20(numb1, numb2)
{
    return (numb1>numb2 && numb1===20) ? numb1 : 0;
}