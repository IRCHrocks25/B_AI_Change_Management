import LandingPage from "../imports/LandingPage";
import { RegistrationProvider } from "./contexts/RegistrationContext";

export default function App() {
  return (
    <RegistrationProvider>
      <div className="w-full overflow-x-hidden">
        <LandingPage />
      </div>
    </RegistrationProvider>
  );
}
