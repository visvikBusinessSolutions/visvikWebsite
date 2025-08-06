import Banner from "./commonbanner";
import MobileAppServices from "./bridge";

const Aws = () => {
  return (
    <>
      <div>
        <div>
          <Banner title="Aws Services" details="ALL GOOD" />
          <MobileAppServices pageKey="aws" />
        </div>
      </div>
    </>
  );
};

export default Aws;
