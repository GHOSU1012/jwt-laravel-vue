export default {
  props: {
    style: {
      type: String,
      required: false,
      default() {
        return 'primary';
      },
    },
    message: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    closeFunction: {
      type: Function,
      required: true,
    },
  },

  methods: {
    /**
     * Method used to fire the countdown
     */
    startTimer() {
      setTimeout(() => {
        this.closeFunction(this.id);
      }, 5000);
    },
  },

  computed: {
    classNames() {
      const classNames = ['alert'];

      classNames.push(`alert-${this.style}`);

      return classNames;
    },
  },

  ready() {
    this.startTimer();
  },
};
