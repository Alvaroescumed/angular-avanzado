import { AbstractControl, ValidationErrors } from '@angular/forms';

/* Creamos una funcion que nos crea un validador que comprueba que la fecha de nacimiento del furmulario sea inferior a la fecha actual */
export function birthDateValidator(control: AbstractControl): ValidationErrors | null{
    /* creamos la fecha actual y traemos como valor de control la fecha que ha puesto el usuario en el fomulario */
    const today = new Date();
    const birthDate = new Date(control.value)

    
    /* Si la fecha no es correcta lanzamos error */
    if(birthDate > today){
        return{ birthDateInvalid: true }
    }
    return null
}