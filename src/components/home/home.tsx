import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from './home.scss?inline';
import ChessBoard from "~/components/chess-board/chess-board";
import LargeButton from "~/components/buttons/large-button/large-button";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <Header/>
      <ChessBoard/>
      <div class="buttons">
        <LargeButton>PLAY</LargeButton>
        <div class="login-buttons">
          <LargeButton>LOGIN</LargeButton>
          <LargeButton>SIGN UP</LargeButton>
        </div>
      </div>
      <Footer/>
    </div>
  );
});
