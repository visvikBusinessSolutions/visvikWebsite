import Banner from "./commonbanner";
import MobileAppServices from "./bridge";

const Software = () => {
  return (
    <>
      <div>
        <div>
          <Banner title="software solution" details="ALL GOOD" />
          <MobileAppServices pageKey="software" />
        </div>
      </div>
    </>
  );
};

export default Software;
