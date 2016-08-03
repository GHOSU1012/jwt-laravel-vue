/* ============
 * Post Transformer
 * ============
 *
 * The transformer for the post
 */

import Transformer from './transformer';

export default class PostTransformer extends Transformer {

  /**
   * Method used to transform a fetched post
   *
   * @param post The fetched post
   * @returns {Object} The transformed post
   */
  static fetch(post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
    };
  }

  /**
   * Method used to transform a send post
   *
   * @param post The post to be send
   * @returns {object} The transformed post
   */
  static send(post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
    };
  }
}
