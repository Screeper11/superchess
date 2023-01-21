import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from './chess-board.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      {[...Array(10)].map((_, row) => (
        <div class="row">
          {[...Array(10)].map((_, col) => (
            <div class="cell" style={{backgroundColor: (row + col) % 2 ? 'white' : 'black'}}/>
          ))}
        </div>
      ))}
    </div>
  );
});
