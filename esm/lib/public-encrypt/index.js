import publicEncrypt from "./publicEncrypt";
import privateDecrypt from "./privateDecrypt";
export function privateEncrypt(key, buf) {
    return exports.publicEncrypt(key, buf, true);
}
export function publicDecrypt(key, buf) {
    return exports.privateDecrypt(key, buf, true);
}
export { publicEncrypt };
export { privateDecrypt };
