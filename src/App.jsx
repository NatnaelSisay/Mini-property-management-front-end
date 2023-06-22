import "./App.css";
import PageRouter from "./routes/PageRouter";
import { tokenAddInterceptor } from "./apis/axiosInterceptors";

function App() {
  return (
    <>
      <div>
        <PageRouter />
      </div>
    </>
  );
}

export default App;
