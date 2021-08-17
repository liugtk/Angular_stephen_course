import { AbstractControl, FormGroup, Validator } from "@angular/forms";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    validate(formGroup: AbstractControl) { // we will validate on the formGroup
        const { password, confirmPassword } = formGroup.value;
        if (password !== confirmPassword) {
            return {
                passwordDonMatch: true
            }
        }
        return null;
    }
}
