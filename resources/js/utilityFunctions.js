/**
 * Function to downscale the font size based on the length of the text
 * @param {number} length - The length of the text
 * @param {number} expectedMaxLength - The expected maximum length of the text
 * @param {number} baseFontSize - The base font size
 * @param {number} minFontSize - The minimum font size
 * @returns {number} The new font size
 */
export function downscale(length, expectedMaxLength, baseFontSize, minFontSize) {
    const scalingFactor = 1 - Math.min(1 / expectedMaxLength * length, 1);
    return Math.ceil(Math.max(scalingFactor * (baseFontSize - minFontSize) + minFontSize, minFontSize));
}
