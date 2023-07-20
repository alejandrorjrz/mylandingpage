import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes.tsx";
import { Provider } from "./context/App.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </Provider>
);
