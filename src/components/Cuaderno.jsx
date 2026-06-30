import { useNavigate, useLocation } from 'react-router-dom'

const secciones = [
  { nombre: 'Índice', corto: 'Índ', ruta: '/inicio' },
  { nombre: 'Listas', corto: 'List', ruta: '/listas' },
  { nombre: 'Checklist', corto: 'Chk', ruta: '/checklist' },
  { nombre: 'Calendario', corto: 'Cal', ruta: '/calendario' },
  { nombre: 'Estadísticas', corto: 'Stat', ruta: '/estadisticas' },
  { nombre: 'Review', corto: 'Rev', ruta: '/review' },
  { nombre: 'Librería', corto: 'Lib', ruta: '/libreria' },
  { nombre: 'Álbum', corto: 'Álb', ruta: '/album' },
  { nombre: 'Misiones', corto: 'Mis', ruta: '/misiones' },
  { nombre: 'Trackers', corto: 'Trk', ruta: '/trackers' },
  { nombre: 'Insignias', corto: 'Log', ruta: '/insignias' },
  { nombre: 'Favoritos', corto: 'Fav', ruta: '/favoritos' },
  { nombre: 'Cuenta', corto: '⚙️', ruta: '/cuenta' },
]

const colores = [
  'bg-pink-300 hover:bg-pink-400',
  'bg-purple-300 hover:bg-purple-400',
  'bg-sky-300 hover:bg-sky-400',
  'bg-amber-200 hover:bg-amber-300',
  'bg-green-300 hover:bg-green-400',
]

// Espiral metálica realista
function Anillo() {
  return (
    <div className="flex items-center justify-center my-[3px]">
      <div className="w-7 h-[9px] rounded-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-500 border border-slate-500 shadow-md"></div>
    </div>
  )
}

// Un pos-it individual
function Posit({ seccion, indice, activo, navigate }) {
  return (
    <button
      onClick={() => navigate(seccion.ruta)}
      className={`${colores[indice % colores.length]} text-gray-800 text-[11px] font-semibold px-2 py-1.5 rounded-t-md shadow-sm transition-all cursor-pointer whitespace-nowrap ${activo ? 'brightness-75' : ''}`}
    >
      {seccion.corto}
    </button>
  )
}

function Cuaderno({ izquierda, derecha, positsIzquierda = [] }) {
  const navigate = useNavigate()
  const location = useLocation()
  const rutaActual = location.pathname

  // Repartir las secciones según la lista positsIzquierda
  const seccionesIzq = secciones.filter((s) => positsIzquierda.includes(s.nombre))
  const seccionesDer = secciones.filter((s) => !positsIzquierda.includes(s.nombre))

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-sky-200 p-2 sm:p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-gray-800 rounded-3xl p-3 sm:p-5 shadow-2xl">

        {/* POS-ITS ARRIBA — izquierda y derecha (solo computadora) */}
        <div className="hidden sm:flex relative z-10 mb-[-4px]">
          {/* Mitad izquierda */}
          <div className="w-1/2 flex justify-start gap-[2px] pl-2">
            {seccionesIzq.map((s) => {
              const indiceReal = secciones.findIndex((x) => x.nombre === s.nombre)
              return (
                <Posit
                  key={s.nombre}
                  seccion={s}
                  indice={indiceReal}
                  activo={s.ruta === rutaActual}
                  navigate={navigate}
                />
              )
            })}
          </div>
          {/* Mitad derecha */}
          <div className="w-1/2 flex justify-end gap-[2px] pr-2">
            {seccionesDer.map((s) => {
              const indiceReal = secciones.findIndex((x) => x.nombre === s.nombre)
              return (
                <Posit
                  key={s.nombre}
                  seccion={s}
                  indice={indiceReal}
                  activo={s.ruta === rutaActual}
                  navigate={navigate}
                />
              )
            })}
          </div>
        </div>

        {/* ===== VERSIÓN COMPUTADORA: dos hojas ===== */}
        <div className="hidden sm:flex">
          <div className="flex-1 bg-white rounded-l-2xl p-6 min-h-[78vh] flex flex-col shadow-[inset_-12px_0_15px_-12px_rgba(0,0,0,0.3)]">
            {izquierda}
          </div>

          <div className="flex flex-col justify-around bg-gray-800 w-8 items-center">
            {Array.from({ length: 22 }).map((_, i) => (
              <Anillo key={i} />
            ))}
          </div>

          <div className="flex-1 bg-white rounded-r-2xl p-6 min-h-[78vh] flex flex-col shadow-[inset_12px_0_15px_-12px_rgba(0,0,0,0.3)]">
            {derecha}
          </div>
        </div>

        {/* ===== VERSIÓN CELULAR: una sola hoja ===== */}
        <div className="flex sm:hidden">
          <div className="flex flex-col justify-around py-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <Anillo key={i} />
            ))}
          </div>

          <div className="flex-1 bg-white rounded-r-2xl p-4 min-h-[80vh] flex flex-col">
            {izquierda}
            {derecha}
          </div>

          <div className="flex flex-col gap-1 pl-1">
            {secciones.map((s, i) => {
              const activo = s.ruta === rutaActual
              return (
                <button
                  key={s.nombre}
                  onClick={() => navigate(s.ruta)}
                  className={`${colores[i % colores.length]} text-gray-800 text-[8px] font-semibold px-1.5 py-1 rounded-r-md shadow-sm cursor-pointer ${activo ? 'brightness-75' : ''}`}
                >
                  {s.corto}
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cuaderno