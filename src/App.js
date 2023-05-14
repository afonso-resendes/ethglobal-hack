import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  LensProvider,
  LensConfig,
  development,
  production,
} from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const { provider, webSocketProvider } = configureChains(
  [polygon, mainnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const lensConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

function App() {
  return (
    <html lang="en">
      <WagmiConfig client={client}>
        <LensProvider
          config={lensConfig}
          onError={(error) => console.log({ error })}
        >
          <Navbar />
          <Home />
        </LensProvider>
      </WagmiConfig>
    </html>
  );
}

export default App;
