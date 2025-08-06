import Banner from "./commonbanner";
import MobileAppServices from "./bridge";
const Mobile = () => {
  return (
    <>
      <div>
        <div>
          <Banner
            probs={{ title: "Mobile development", details: "ALL GOOD" }}
          />
          <MobileAppServices pageKey="mobile" />
        </div>
      </div>
    </>
  );
};

export default Mobile;
