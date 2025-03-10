import { createApp } from 'vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue'; // Adjust the path as needed

export function showDialog(props) {
  return new Promise((resolve, reject) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const app = createApp(ConfirmDialog, {
      ...props,
      onConfirm: (value) => {
        resolve(value);
        cleanup();
      },
      onCancel: () => {
        // reject(new Error('User canceled'));
        resolve(null); // Resolve with null (or 'cancel') instead of rejecting
        cleanup();
      },
    });

    app.mount(container);

    function cleanup() {
      if (document.body.contains(container)) {
        app.unmount();
        document.body.removeChild(container);
      }
    }
  });
}
