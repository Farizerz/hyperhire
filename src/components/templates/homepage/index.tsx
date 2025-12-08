import { FC } from "react";
import Footer from "@/components/organisms/footer";
import HomepageContent from "@/components/organisms/homepage-content";

export const dynamic = "force-dynamic";

const Homepage: FC = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  const [carouselRes, sliderRes] = await Promise.all([
    fetch(`${baseUrl}/api/carousel`, {
      cache: "no-store",
    }),
    fetch(`${baseUrl}/api/slider`, {
      cache: "no-store",
    }),
  ]);

  const [carouselData, sliderData] = await Promise.all([
    carouselRes.json(),
    sliderRes.json(),
  ]);

  return (
    <>
      <HomepageContent
        rawCarouselData={carouselData}
        rawSliderData={sliderData}
      />
      <Footer />
    </>
  );
};

export default Homepage;
