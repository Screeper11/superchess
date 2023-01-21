import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from './chess-board.scss?inline';
import Cell from "~/components/chess-board/cell/cell";

export const boardSize = 8;

export default component$(() => {
  useStylesScoped$(styles);
  const numberOfCells = (boardSize + 2) ** 2;

  return (
    <div class="cells">
      {[...Array(numberOfCells)].map((_, i) =>
        <Cell key={i} index={i}/>
      )}
    </div>
  );
});
