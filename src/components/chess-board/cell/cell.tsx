import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from './cell.scss?inline';


export default component$((props: { index: number }) => {
  useStylesScoped$(styles);

  function isCellWhite(index: number) {
    const row = Math.floor(index / 10);
    const col = index % 10;
    return (row + col) % 2 !== 0;
  }

  return (
    <div class={`cell ${isCellWhite(props.index) ? 'white' : 'black'}`}>

    </div>
  );
});
