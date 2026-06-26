import { useState } from 'react'
import Cuaderno from '../components/Cuaderno'

function Inicio() {
  const [abierto, setAbierto] = useState(false)

  // VISTA 1: La portada (cuaderno cerrado)
  if (!abierto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-sky-200 p-4">
        <div
          onClick={() => setAbierto(true)}
          className="cursor-pointer w-full max-w-md"
        >
          <div className="flex justify-center gap-3 mb-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-3 h-6 bg-gray-400 rounded-full shadow-sm"></div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-700 rounded-2xl shadow-2xl aspect-[3/4] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-100 rounded-full opacity-80 blur-sm"></div>
            <div className="bg-white/90 rounded-lg shadow-lg px-8 py-6 rotate-[-3deg]">
              <h1 className="text-5xl font-bold text-purple-700 font-lettering text-center">
                Journal
              </h1>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-4">Toca para abrir</p>
        </div>
      </div>
    )
  }

  // VISTA 2: El cuaderno abierto con el índice dentro
  return (
    <Cuaderno
     izquierda={
        <>
          <h2 className="text-5xl text-black font-lettering mb-4">Índice</h2>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {['Listas','Checklist','Calendario','Estadísticas','Review','Librería'].map((seccion) => (
              <button
                key={seccion}
                onClick={() => alert('Sección: ' + seccion)}
                className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl text-center text-gray-800 font-semibold shadow-sm transition-colors cursor-pointer text-lg flex items-center justify-center p-2"
              >
                {seccion}
              </button>
            ))}
          </div>
        </>
      }
     derecha={
        <>
          <h2 className="hidden sm:block text-5xl text-black font-lettering mb-4">Más</h2>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {['Álbum','Misiones','Trackers','Insignias','Favoritos','Cuenta'].map((seccion) => (
              <button
                key={seccion}
                onClick={() => alert('Sección: ' + seccion)}
                className="bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-xl text-center text-gray-800 font-semibold shadow-sm transition-colors cursor-pointer text-lg flex items-center justify-center p-2"
              >
                {seccion}
              </button>
            ))}
          </div>
        </>
      }
    />
  )
}

export default Inicio