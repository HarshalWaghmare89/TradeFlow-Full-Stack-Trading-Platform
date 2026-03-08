import HeroSection from "./components/HeroSection";
import InvestmentOptionsSection from "./components/InvestmentOptionsSection";
import AccountOpeningStepsSection from "./components/AccountOpeningStepsSection";
import BenefitsSection from "./components/BenefitsSection";
import AccountTypesSection from "./components/AccountTypesSection";
import FaqSection from "./components/FaqSection";
import OpenAccount from "../../../../shared/components/openAccount/OpenAccount";

function SignupPage() {
  return (
    <>
      <HeroSection />
      <InvestmentOptionsSection />
      <AccountOpeningStepsSection />
      <BenefitsSection />
      <AccountTypesSection />
      <FaqSection />
      <OpenAccount />
    </>
  );
}

export default SignupPage;
