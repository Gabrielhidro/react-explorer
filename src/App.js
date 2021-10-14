import { GlobalStyle } from "./assets/GlobalStyles/styles";
import RepositoryList from "./components/RepositoryList";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RepositoryList />
    </div>
  );
}

export default App;
