import AppComponentgrp from "./componemt/AppComponentgrp";
import Yellow from "./componemt/Yellow";
import Red from "./componemt/Red";
import Blue from "./componemt/Blue";

function App() {
  return (
    <div className="App">
      <AppComponentgrp className="AppComponentgrp">
        <Yellow />
        <Yellow />
      </AppComponentgrp>
      <AppComponentgrp className="AppComponentgrp">
        <Red />
      </AppComponentgrp>
      <AppComponentgrp className="AppComponentgrp">
        <Blue />
        <Blue />
        <Blue />
      </AppComponentgrp>
    </div>
  );
}

export default App;
