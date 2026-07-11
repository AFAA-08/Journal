import { useNavigate } from 'react-router-dom'
import Cuaderno from '../components/Cuaderno'

function Listas() {
  const navigate = useNavigate()

  // Las 5 clases con su ruta y un emoji temporal
  const clases = [
    { nombre: 'Libros', emoji: '📚', ruta: '/listas/libros' },
    { nombre: 'Manhwas', emoji: '📖', ruta: '/listas/manhwas' },
    { nombre: 'Películas', emoji: '🎬', ruta: '/listas/peliculas' },
    { nombre: 'Series', emoji: '📺', ruta: '/listas/series' },
    { nombre: 'Novelas', emoji: '📝', ruta: '/listas/novelas' },
  ]

  // Un botón de clase reutilizable
  const BotonClase = ({ clase }) => (
    <button
      onClick={() => navigate(clase.ruta)}
      className="bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer w-full"
    >
      <span className="text-4xl">{clase.emoji}</span>
      <span className="text-xl font-semibold text-gray-800">{clase.nombre}</span>
    </button>
  )

  return (
    <Cuaderno
      izquierda={
        <>
          <h2 className="text-5xl text-black font-lettering mb-6">Listas</h2>
          <div className="flex flex-col gap-4 flex-1">
            <BotonClase clase={clases[0]} />
            <BotonClase clase={clases[1]} />
            <BotonClase clase={clases[2]} />
          </div>
        </>
      }
      derecha={
        <>
          <h2 className="hidden sm:block text-5xl text-transparent font-lettering mb-6">.</h2>
          <div className="flex flex-col gap-4 flex-1">
            <BotonClase clase={clases[3]} />
            <BotonClase clase={clases[4]} />
          </div>
        </>
      }
    />
  )
}

export default Listas