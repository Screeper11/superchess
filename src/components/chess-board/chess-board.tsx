import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from './chess-board.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">

    </div>
  );
});
