import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import store from "store";
import { Provider } from "react-redux";


import { Helmet, HelmetProvider} from "react-helmet-async";
import AnimatedRoutes from "AnimatedRoutes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Alan Mtz | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://github.com/alan-martinez" />
        <meta name="author" content='Alan Mtz' />
        <meta name="publisher" content='Alan Mtz' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Alan Mtz | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://github.com/alan-martinez" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='Alan Mtz | Software Agency' />
        <meta
            name="twitter:description"
            content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
        />
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>
            <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>

  );
}

export default App;
