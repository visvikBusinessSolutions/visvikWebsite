import Banner from "./commonbanner";
import MobileAppServices from "./bridge";

const Devops = () => {
  return (
    <>
      <div>
        <div>
          <Banner title="Devops solution" details="ALL GOOD" />
          <MobileAppServices pageKey="devops" />
        </div>
      </div>
    </>
  );
};

export default Devops;
