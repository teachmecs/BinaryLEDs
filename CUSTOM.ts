/**
 * Custom blocks
 */
//% weight=100 color=#f6a800 icon=""
namespace binary {
    /**
     * Binary: Displays decimal number as Binary LEDs
     * @param n eg: decimalNumber
     */
    //% block
    export function displayBinaryLeds(n: number): void {
        decimalNumber = n
        binaryLEDs();
    }
}
