import Foreground from "./components/Foreground";
import Background from "./components/background";

function App() {
  return <div className="relative w-full h-screen bg-zinc-800">
  <Background></Background>
  <Foreground></Foreground>
  </div>;

}

export default App;
