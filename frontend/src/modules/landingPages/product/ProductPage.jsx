import HeroSection from "./components/HeroSection";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import UniverseSection from "./components/UniverseSection";

function ProductPage() {
  return (
    <>
      <HeroSection />
      <LeftSection
        imageURL={
          "https://res.cloudinary.com/dhcllqvkz/image/upload/v1769281259/products-kite_tu43bp.png"
        }
        productName={"Kite"}
        productDescription={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"true"}
        tryDemoLink={"#"}
        learnMore={"true"}
        learnMoreLink={"#"}
        linkText1={"Try demo "}
        linkText2={"Learn more "}
        googlePlay={"#"}
        appStore={"#"}
      />

      <RightSection
        imageURL={
          "https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279342/products-console_wg7uyl.png"
        }
        productName={"Console"}
        productDescription={
          "The central dashboard for your TradeFlow account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        prouctLink={"#"}
        linkText={"Learn more "}
      />

      <LeftSection
        imageURL={
          "https://res.cloudinary.com/dhcllqvkz/image/upload/v1769279234/products-coin_it4fig.png"
        }
        productName={"Coin"}
        productDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={true}
        tryDemoLink={"#"}
        learnMore={false}
        linkText1={"Coin "}
        googlePlay={"#"}
        appStore={"#"}
      />

      <RightSection
        imageURL={
          "https://res.cloudinary.com/dhcllqvkz/image/upload/v1769280159/landing_msshyp.svg"
        }
        productName={"Kite Connect API"}
        productDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        prouctLink={"#"}
        linkText={"Kite Connect"}
      />

      <LeftSection
        imageURL={
          "https://res.cloudinary.com/dhcllqvkz/image/upload/v1769281022/varsity-products_e6ichp.svg"
        }
        productName={"Varsity mobile"}
        productDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        tryDemo={false}
        learnMore={false}
        googlePlay={"#"}
        appStore={"#"}
      />

      <UniverseSection />
    </>
  );
}

export default ProductPage;
