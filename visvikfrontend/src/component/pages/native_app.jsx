import Banner from "./commonbanner";
import MobileAppServices from "./bridge";

const Native = () => {
  return (
    <>
      <div>
        <div>
          <Banner title="Native App Development" details="ALL GOOD" />
          <MobileAppServices pageKey="native_app" />
        </div>
      </div>
    </>
  );
};

export default Native;
