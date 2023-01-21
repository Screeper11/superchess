import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from './home.scss?inline';
import ChessBoard from "~/components/chess-board/chess-board";
import LargeButton from "~/components/buttons/large-button/large-button";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import MediumButton from "~/components/buttons/medium-button/medium-button";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <Header/>
      <ChessBoard/>
      <div class="buttons">
        <div class="play-button">
          <LargeButton desc={"as guest"}>PLAY</LargeButton>
        </div>
        <div class="login-buttons">
          <MediumButton>LOGIN</MediumButton>
          <MediumButton>SIGN UP</MediumButton>
        </div>
      </div>
      <Footer/>
    </div>
  );
});
