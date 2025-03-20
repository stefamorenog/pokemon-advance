import { IconSearch } from '@tabler/icons-react'
const pokemons = () => {
    return (
        <section className='p-4 py-5'>
            <form>
                <div className='bg-white p-2 flex rounded-2xl text-lg'>
                    <input className='outline-none flex-1' type="text" placeholder="Buscar" />
                    <button className='bg-orange-500 p-2 rounded-xl shadow-lg shadow-yellow-500/50 hover:bg-orange-400 transition-colors'>
                        <IconSearch color='white' stroke={3} />
                    </button>
                </div>
            </form>
        </section>
    )
}

export default pokemons