
export function checkVariable(number)
{
    return number.typeOf();
}

export function checkIfIsInteger(number)
{
    return Number.isInteger(number);
}

export function checkIfNumberIsInfinite(number)
{
    /* Tendrás que utilizar un condicional / if ... */
    return (!Number.isFinite(number)) ? 'Number is Infinite': 'Number is Finite' ;
        
}

export function sum(numb1, numb2)
{
    /* Completa la function utilizando el operador de suma + */
    return numb1 + numb2;
}

export function subtract(numb1, numb2)
{
    /* Completa la function utilizando el operador de sustracción - */
    return numb1 - numb2;
}

export function multiply(numb1, numb2)
{
    /* Completa la function utilizando el operador de sustracción - */
    return numb1*numb2;

}

export function divide(numb1, numb2)
{
    /* Completa la function utilizando el operador de división / */
    return numb1/numb2;
}

export function checkIfNumbIsDivisibleByThree(numb1, numb2)
{
    /* Completa la function utilizando el operador modulus y utiliza el conditional if() */
    return (numb1 % numb2 == 0) ? `Number is divisible by ${numb2}` : `Number no is divisible by ${numb2}`;
    
}