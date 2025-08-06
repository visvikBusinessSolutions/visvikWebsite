import Banner from "./commonbanner";
import MobileAppServices from "./bridge";

const Website = () => {
  return (
    <>
      <div>
        <div>
          <Banner title="WEBSITE Develop" details="ALL GOOD" />
          <MobileAppServices pageKey="website" />
        </div>
      </div>
    </>
  );
};

export default Website;
