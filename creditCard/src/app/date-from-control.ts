import { FormControl } from "@angular/forms";

export class DateFromControl extends FormControl {
    setValue(value: string | null, options: any) {

        if (!value) {
            super.setValue("", { ...options, emitModelToViewChange: true })
            return
        }
        console.log(value, value.length, this.value, value.match(/[^0-9|\/]/gi));
        let setValue = value;
        if (value.match(/[^0-9|\/]/gi)) { // if found any non digital and non / char
            setValue = this.value // existing value
        }
        if (value.length > 5) {
            setValue = this.value
        }
        if (value.length === 2 && this.value.length != 3) {
            setValue = value + '/'
        }
        super.setValue(setValue, { ...options, emitModelToViewChange: true })
    }
}
