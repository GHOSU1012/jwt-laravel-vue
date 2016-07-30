export default {
  /**
   * Method used to transform an incoming pagination
   *
   * @param {object} pagination The incoming pagination
   *
   * @returns {object} The transformed pagination
   */
  receive(pagination) {
    return {
      totalCount: pagination.total_count,
      totalPages: pagination.total_pages,
      currentPage: pagination.current_page,
      limit: pagination.limit,
    };
  },

  /**
   * Method used to transform an outgoing pagination
   *
   * @param {object} pagination The outgoing pagination
   *
   * @returns {object} The transformed pagination
   */
  send(pagination) {
    return {
      total_count: pagination.totalCount,
      total_pages: pagination.totalPages,
      current_page: pagination.currentPage,
      limit: pagination.limit,
    };
  },
};
