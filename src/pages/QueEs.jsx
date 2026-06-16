import { useNavigate } from 'react-router-dom'

function QueEs() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-sky-200 p-6">
      <div className="bg-white/60 rounded-3xl shadow-lg p-10 max-w-xl text-center">
        <h2 className="text-5xl font-bold text-black font-lettering mb-6">
          Qué es
        </h2>

        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Journal es una App web que te permitirá organizar tus lecturas,
          manhwas, libros, películas, series y novelas. Permitiéndote resumir
          ideas, registrar experiencias, emociones y guardar tus reflexiones e ideas.
        </p>

        <button
          onClick={() => navigate('/login')}
          className="bg-purple-400 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors cursor-pointer"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

export default QueEs