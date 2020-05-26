import tippy from 'tippy.js';

/**
 * Initializes Tippy tooltip.
 *
 * @param {string} selector DOM element selector.
 */
export default function Tippy(selector = '[data-toggle="tooltip"]')
{
    tippy(selector, {
        content(ctx)
        {
            return `<div className='tooltip-container ${getAttr(ctx, 'tooltip-classes')}'>${getAttr(ctx, 'data-toggle-content')}</div>`;
        },
        theme: 'light-border',
        animation: 'scale-extreme',
        allowHTML: true,
        arrow: true,
        inertia: true,
        hideOnClick: false,
        touch: true,
        delay: [ 80, 40 ],
        interactive: true
    });
}

/**
 * Extracts attribute from an DOM element.
 *
 * @param {any} ctx DOM element.
 * @param {string} attribute element attribute.
 * @returns {string} attribute value.
 */
function getAttr(ctx, attribute)
{
    const attr = ctx.getAttribute(attribute);
    ctx.removeAttribute(attribute);

    return attr;
}
