import Hero from "@/components/common/Hero";
import { useAppSelector } from "@/redux-store";

const HomePage = () => {
  const store = useAppSelector((state) => state.category);

  return (
    <div>
      Home page
      <Hero />
    </div>
  );
};

export default HomePage;
