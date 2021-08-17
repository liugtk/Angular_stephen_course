import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { catchError, map } from "rxjs/operators"
import { of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: "root"
})
export class UniqueUserName implements AsyncValidator {

    constructor(private authService: AuthService) {
        this.validate = this.validate.bind(this)
    }

    validate(control: AbstractControl) {
        const { value } = control;
        console.log(value)

        return this.authService.usernameAvailable(value)
            .pipe(
                map((value) => {
                    console.log(value)
                    return null
                }),
                catchError((err) => {
                    console.log(err);
                    return of({ nonUniqueUsername: true })
                })

            )
    }
}
