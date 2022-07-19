import { css } from "styled-components";

const sizes = {
    desktop: 1120,
    special: 975,
    tablet: 755,
    mobile: 420,
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(...args)}
        }
    `
    return acc;
}, {})