import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from './game.scss?inline';
import ChessBoard from "~/components/chess-board/chess-board";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="game-layout">
      <div class="opponent-tray">
        OPPONENT
      </div>
      <div class="chess-board">
        <ChessBoard/>
      </div>
      <div class="player-tray">
        PLAYER
      </div>
    </div>
  );
});
