import { ValidatorFn } from '@angular/forms';

export function urlValidator(): ValidatorFn {
    const pattern = new RegExp(`(https:\/\/|http:\/\/)(.+)`);

    return (control) => {
        
        return control.value === '' || pattern.test(control.value)
            ? null
            : { urlValidator: true };
    };
}