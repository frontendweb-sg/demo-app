import Hero from "@/components/common/Hero";
import { useAppSelector } from "@/redux-store";

const HomePage = () => {
  const store = useAppSelector((state) => state.category);

  return (
    <div>
      Home pages {JSON.stringify(store)}
      <Hero />
    </div>
  );
};

export default HomePage;
