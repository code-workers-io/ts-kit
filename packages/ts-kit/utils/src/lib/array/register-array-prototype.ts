/*
declare global {
  interface Array<T> {
    getPreviousValue(elem: T): T | undefined;
    getNextValue(elem: T): T | undefined;
  }
}

export function enhanceArrayPrototype() {
  if (Array.prototype.getPreviousValue) {
    return;
  }
  Array.prototype.['getPreviousValue'] = function(value: unknown) {
    const currentIndex = this.indexOf(value);
    if (currentIndex === -1) return undefined;
    return this[(currentIndex - 1) % this.length];
    };

    if (Array.prototype.getNextValue) {
      return;
    }
    Array.prototype.['getNextValue'] = function(value: unknown) {
      const currentIndex = this.indexOf(value);
      if (currentIndex === -1) return undefined;
      return this[(currentIndex + 1) % this.length];
      };
}


 */
