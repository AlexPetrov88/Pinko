import { ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {
    const pattern = new RegExp(`^\d+$`);

    return (control) => {
        const value = Number(control.value);
        if (isNaN(value)) {
           return { numberValidator: true };
        } else {
            return null
        }
    };
}