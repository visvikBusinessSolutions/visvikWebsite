import Banner from "./commonbanner";
import MobileAppServices from "./bridge";

const UI = () => {
  return (
    <>
      <div>
        <div>
          <Banner title="UI & UX Design" details="ALL GOOD" />
          <MobileAppServices pageKey="ui&ux" />
        </div>
      </div>
    </>
  );
};

export default UI;
