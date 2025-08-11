import MyCarousel from "./Homeslider";
import COMP from "./2nd";
// import Client from "./Our-client";
import Contant from "./contant";
import Application from "./all-aplication";
import INFO from "./pages/contact/contactinfo";
import TestimonialsSection from "./testimonial";
import Tech from "./tech";
// test only

function Home() {
  return (
    <>
      <MyCarousel />
      <COMP />
      {/* <Client /> */}
      <Contant />
      <Tech />
      <Application />
      {/* <LatestPosts /> */}
      {/* temprary component */}
      <INFO />
      <TestimonialsSection />
      {/* tested only */}
    </>
  );
}

export default Home;
