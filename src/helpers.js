// Create a random string
export function createString() {
    const length = 6;
    let result = '';
    const characters = 'ABCDEF0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Convert Hex code to RGB code
export function hexToRGB(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    return result ? "" + r + ", " + g + ", " + b : null;
}

// Convert Hex code to HSL code
export function hexToHSL(Hex) {

    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    r = "0x" + Hex[1] + Hex[2];
    g = "0x" + Hex[3] + Hex[4];
    b = "0x" + Hex[5] + Hex[6];

    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let min = Math.min(r,g,b),
        max = Math.max(r,g,b),
        delta = max - min,
        h = 0,
        s = 0,
        l = 0;

    if (delta === 0)
        h = 0;
    else if (max === r)
        h = ((g - b) / delta) % 6;
    else if (max === g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (max + min) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(0);
    l = +(l * 100).toFixed(0);

    return "" + h + ", " + s + "%, " + l + "%";
}