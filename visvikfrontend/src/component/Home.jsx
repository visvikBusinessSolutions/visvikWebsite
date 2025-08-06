import MyCarousel from "./Homeslider";
import COMP from "./2nd";
import Client from "./Our-client";
import Contant from "./contant";
import Application from "./all-aplication";
import INFO from "./pages/contact/contactinfo";
import TestimonialsSection from "./testimonial";
function Home() {
  return (
    <>
      <MyCarousel />
      <COMP />
      <Client />
      <Contant />
      <Application />
      {/* <LatestPosts /> */}
      {/* temprary component */}
      <INFO />
      <TestimonialsSection />
    </>
  );
}

export default Home;
