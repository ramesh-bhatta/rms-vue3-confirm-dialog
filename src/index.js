import ConfirmDialog from './components/ConfirmDialog.vue';
import { showDialog } from './useDialog.js'; // Import the function

export default {
  install(app) {
    app.component('ConfirmDialog', ConfirmDialog);
  },
};

export { ConfirmDialog, showDialog }; // Export both
