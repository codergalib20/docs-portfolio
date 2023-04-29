import Header from "@/components/header";
import Hero from "@/components/hero";
import Stack from "@/components/stack";

const Home = () => {
  return (
    <div>
      <div className="pb-16 z-50 relative">
        <Header />
      </div>
      <div>
        <Hero />
        <Stack />
      </div>
    </div>
  )
}

export default Home;