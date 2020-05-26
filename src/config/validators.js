
import Rut from '../utils/Rut';

const Validators = {
    rut: (value, attributes, attributeName, options, constraints) =>
    {
        if (Rut.IsValid(value, false))
        {
            return null;
        }

        return {
            rut: {
                message: '${value} no es un RUT válido'
            }
        };
    },
    phone: (value, attributes, attributeName, options, constraints) =>
    {
        // const isValid = /^\(?\+?(\d{2})?\)?\s?([2|9]|(?![2|9])\d{2})\s?(\d{7,10}?)$/
        const isValid = /^\+?56\d{9}$/
            .test(value.replace(/\s/g, ''));

        if (isValid)
        {
            return null;
        }

        return {
            phone: {
                message: '${value} no es un Teléfono válido'
            }
        };
    }
};

export default Validators;
