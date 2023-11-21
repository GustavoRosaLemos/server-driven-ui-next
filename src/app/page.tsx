import { SignalProvider } from "./components/Provider";
import View from "./components/View";

export default function Home() {
  return (
    <SignalProvider>
      <View route="/itens" />
    </SignalProvider>
  )
}
