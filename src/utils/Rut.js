
/**
 * Handle RUT format.
 *
 * @date 2020-04-01
 * @export
 * @class Rut
 */
export default class Rut
{
    static Type = {
        UNDEFINED: -1,
        RUT: 0,
        NRO_DOC: 1
    }

    // Removes all dots and the hyphen.
    static Clean(rut, removeCD)
    {
        return rut ? removeCD ? rut.replace(/[.-]/g, '').slice(0, -1) : rut.replace(/[.-]/g, '') : '';
    }

    // Verifies if the rut/ci or document number is valid.
    static IsValid(rut, type = Rut.Type.RUT)
    {
        rut = Rut.Clean(rut);
        if (type === Rut.Type.NRO_DOC && typeof rut === 'number')
        {
            return true;
        }

        if (rut.length < 7)
        {
            return false;
        }

        let dv = rut.charAt(rut.length - 1);
        dv = dv === 'k' ? 'K' : dv;

        const dvC = Rut.CalculateCheckDigit(rut.substring(0, rut.length - 1));

        return dv === dvC.toString();
    }

    // Returns a formatted rut/ci string.
    static Format(rut, old, withDots = true)
    {
        if (rut === '')
        {
            return '';
        }
        let regex = new RegExp('(^\\d{1,3}?)(\\d{0,3})(\\d{0,3})([0-9kK]{0,1}$)');
        const match = regex.exec(rut);

        if (match === null)
        {
            return old;
        }

        // Builds the formatted RUN string.
        let partial_rut = match[1];
        // Gets the last value (possible verification digit) matched.
        const last = match[match.length - 1];

        const divisor = withDots ? '.' : '';

        // Concatenates the values in the middle.
        for (let i = 2; i < match.length - 1; i++)
        {
            if (match[i] === '')
            {
                break;
            }
            else
            {
                partial_rut = partial_rut + (divisor + match[i]);
            }
        }

        if (last !== '')
        {
            partial_rut = partial_rut + ('-' + last);
        }

        return partial_rut;
    }

    // Returns a formatted document number string.
    static FormatNroDoc(rut, old)
    {
        if (rut.length > 9)
        {
            return old;
        }

        return rut.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // Returns the check digit of a rut/ci.
    static CalculateCheckDigit(rut)
    {
        let sum = 0;
        let mul = 2;

        for (let i = rut.length - 1; i >= 0; i--)
        {
            sum = sum + rut.charAt(i) * mul;
            mul = (mul + 1) % 8 || 2;
        }

        switch (sum % 11)
        {
            case 1:
                return 'K';
            case 0:
                return 0;
            default:
                return 11 - (sum % 11);
        }
    }
}
