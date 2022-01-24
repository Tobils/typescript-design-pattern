"use strict";
/**
 * interface
 * => setsup contract between diferent classes
 * => use when we have different object that we want to work together
 * => promotes loose coupling
 *
 * abstract is used for parents only with no definition and will be define in child class
 * => setsup contract between diferent classes
 * => use when we are trying to build up a definition of an object
 * => strongly couples classes together
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
