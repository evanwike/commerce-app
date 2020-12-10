import { Directive } from '@angular/core';
import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]'
})
export class PasswordValidatorDirective {

  constructor() { }

}

export const matchPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('password').value;
  const confirm = control.get('confirmPassword').value;

  return pass === confirm ? null : {notMatch: true};
};
