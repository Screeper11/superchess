import {component$, Slot, useStylesScoped$} from '@builder.io/qwik';
import styles from './large-button.scss?inline';

export default component$((props: { desc: string }) => {
  useStylesScoped$(styles);

  return (
    <button>
      <span class="title">
        <Slot/>
      </span>
      <br/>
      {props.desc &&
        <span class="desc">
          {props.desc}
        </span>}
    </button>
  );
});
