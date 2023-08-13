import { ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
    const pattern = new RegExp(`(.+)@(.+)\.(com|bg|io)`);

    return (control) => {
        
        return control.value === '' || pattern.test(control.value)
            ? null
            : { emailValidator: true };
    };
}
