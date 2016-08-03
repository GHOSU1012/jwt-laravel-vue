/* ============
 * Pagination Component
 * ============
 */

export default {
  props: {
    switchFunction: {
      type: Function,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },

  computed: {
    /**
     * Computed property which will check
     * if the previous page is disabled
     *
     * @returns {boolean} If the previous page is disabled
     */
    previousDisabled() {
      return this.pagination.currentPage <= 1;
    },

    /**
     * Computed property which will check
     * if the next page is disabled
     *
     * @returns {boolean} If the next page is disabled
     */
    nextDisabled() {
      return this.pagination.currentPage >= this.pagination.totalPages;
    },
  },

  methods: {
    /**
     * Method used to go to a different page
     *
     * @param {int} page The page number
     */
    goToPage(page) {
      this.switchFunction(page, this.pagination.limit);
    },

    /**
     * Method used to go to the previous page
     */
    previousPage() {
      if (!this.previousDisabled) {
        this.goToPage(this.pagination.currentPage - 1);
      }
    },

    /**
     * Method used to go to the next page
     */
    nextPage() {
      if (!this.nextDisabled) {
        this.goToPage(this.pagination.currentPage + 1);
      }
    },
  },
};
