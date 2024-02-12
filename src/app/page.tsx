import Hero from "../components/Hero"
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#C0C2C9]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero/>
      </div>
    </main>
  );
}
