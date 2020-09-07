import { Player } from "@lottiefiles/react-lottie-player";

export default function App() {
  return (
    <div class="container">
      <div class="app">
        Hola <span class="devs">Developers !</span>
      </div>
      <div>
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_3vbOcw.json"
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </div>
  );
}
