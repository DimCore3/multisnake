import './styles/index.scss';
import { withProviders } from "./providers";
import { Routing } from "pages";
import { Header } from 'widgets';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default withProviders(App);