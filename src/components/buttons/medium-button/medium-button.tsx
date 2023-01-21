import {component$, Slot, useStylesScoped$} from '@builder.io/qwik';
import styles from './medium-button.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <button>
      <Slot/>
    </button>
  );
});
