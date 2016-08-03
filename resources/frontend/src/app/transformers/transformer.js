/* ============
 * Transformer
 * ============
 *
 * The base transformer
 */

export default class Transformer {
  /**
   * Method used to transform a fetched collection
   *
   * @param items The items to be transformed
   * @returns {Array} The transformed items
   */
  static fetchCollection(items) {
    const newCollection = [];

    items.forEach((item) => {
      newCollection.push(this.fetch(item));
    });

    return newCollection;
  }

  /**
   * Method used to transform a collection to be send
   *
   * @param items The items to be transformed
   * @returns {Array} The transformed items
   */
  static sendCollection(items) {
    const newCollection = [];

    items.forEach((item) => {
      newCollection.push(this.send(item));
    });

    return newCollection;
  }
}
