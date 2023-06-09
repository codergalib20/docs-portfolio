import Header from "@/@core/components/header";
import Hero from "@/@core/components/hero";
import Stack from "@/@core/components/stack";

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