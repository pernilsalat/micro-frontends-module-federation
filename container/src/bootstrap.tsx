import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import EventBus from "./eventBus";

(global as any).EventBus = EventBus();

ReactDOM.render(<App />, document.getElementById("root"));
