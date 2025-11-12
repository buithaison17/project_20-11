import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { StorySection } from "../components/StorySection";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TestimonialSection } from "../components/TestimonialSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CallToActionSection } from "../components/CallToActionSection";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <div className="relative w-full">
      <Header></Header>
      <Banner></Banner>
      <StorySection></StorySection>
      <TestimonialSection></TestimonialSection>
      <CallToActionSection></CallToActionSection>
      <div
        className="fixed bottom-10 right-10 w-12 h-12 bg-gray-400/40 hover:bg-gray-400/80 rounded-full flex justify-center items-center cursor-pointer 
             transition-all duration-300 transform hover:scale-110 hover:opacity-100 shadow-lg"
      >
        <ArrowUpwardIcon className="text-white"></ArrowUpwardIcon>
      </div>
    </div>
  );
};
