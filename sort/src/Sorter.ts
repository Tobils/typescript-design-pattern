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

export abstract class Sorter {
  abstract get length(): number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
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
