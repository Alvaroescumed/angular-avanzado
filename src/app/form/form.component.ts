import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; /* Importamos el modulo de FormControl para crear el formulario */
import { birthDateValidator, phoneValidator } from 'src/validators/custom-validators';/* Traemos el custom validator que hemos creado */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Creamos el FormGrouop
  profileForm!: FormGroup;

  // Inicializamos el formulario de registro con los validadores que queremos
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      birthdate: new FormControl('', [Validators.required, birthDateValidator]),
      phone: new FormControl('', [
        Validators.required,
        phoneValidator
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      address: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });
  }

  // Creamos la función para que en el caso de que todos los campos sean correctos se complete el registro
  onSubmit() {
    if (this.profileForm.valid) {
      // Procesar los datos del formulario
      console.log(this.profileForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
