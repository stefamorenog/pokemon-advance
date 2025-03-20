import Aside from "./components/Aside"
import Pokemons from "./components/Pokemons"

function App() {
  return (
    <section className="bg-[#F6F8fc]">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen ">
        <Pokemons />
        <Aside />
      </main>
    </section>
  )
}

export default App
