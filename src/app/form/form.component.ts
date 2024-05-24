import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; /* Importamos el modulo de FormControl para crear el formulario */
import { birthDateValidator } from 'src/validators/custom-validators';/* Traemos el custom validator que hemos creado */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileForm! : FormGroup;
  /* Creamos el form group de el registro de un usuario */

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', 
        Validators.required
      ),
      lastname: new FormControl('', 
        Validators.required
      ),
      birthdate: new FormControl('', [
        Validators.required,
        birthDateValidator
      ]),
      phone: new FormControl('',[
        Validators.required,
        /* Validamos que la longitud del telefono concuerda con el numero de digitos que suelen tener mundialmente */
        Validators.minLength(9),
        Validators.maxLength(10)
      ]),
      mail: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      adress: new FormControl('',
        Validators.required
      ),
      gender: new FormControl('',
        Validators.required
      )
  });

  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Procesar los datos del formulario
      console.log(this.profileForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
