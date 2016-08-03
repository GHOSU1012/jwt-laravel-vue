/* ============
 * Loader Util
 * ============
 *
 * Loader util to prevent relative directory hell
 */

export default {
  /**
   * Method used to load a file
   *
   * @param file The name of the file
   * @param async If the file should be loaded async
   *
   * @returns {*} The file
   */
  file(file, async = false) {
    if (async) {
      return (resolve) => {
        require([`./../${file}`], resolve);
      };
    }

    return require(`./../${file}`);
  },

  /**
   * Method used to load a page
   *
   * @param main The name of the main page
   * @param page The name of the page
   * @param async If the page should be loaded async
   *
   * @returns {*} The page
   */
  page(main, page, async = false) {
    const file = `pages/${main}/${page}/${page}.vue`;

    return this.file(file, async);
  },

  /**
   * Method used to load a layout
   *
   * @param layout The name of the layout
   * @param async If the layout should be loaded async
   *
   * @returns {*} The layout
   */
  layout(layout, async = false) {
    const file = `layouts/${layout}/${layout}.vue`;

    return this.file(file, async);
  },

  /**
   * Method used to load a component
   *
   * @param component The name of the component
   * @param async If the component should be loaded async
   *
   * @returns {*} The component
   */
  component(component, async = false) {
    const file = `components/${component}/${component}.vue`;

    return this.file(file, async);
  },
};
