/* 

## Third Angle of the Triangle

Dado dos angulos interiores de un triangulo en grados.
Escribe una función que devuelva el tercer angulo.

PD: Solo se realizarán los tests con números enteros
*/

export function returnThirdAngle(angle1, angle2)
{
    angle1 = Math.round(angle1);
    angle2 = Math.round(angle2);
    return 180 - (angle1+angle2);
}