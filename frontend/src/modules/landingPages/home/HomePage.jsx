import HeroSection from './components/HeroSection';
import AwardsSection from './components/AwardsSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import EducationSection from './components/EducationSection';
import OpenAccount from '../../../shared/components/openAccount/OpenAccount';

function HomePage() {
    return ( 
        <>
            <HeroSection />
            <AwardsSection />
            <StatsSection />
            <PricingSection />
            <EducationSection />
            <OpenAccount />
        </>
    );
}

export default HomePage;