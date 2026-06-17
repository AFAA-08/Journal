import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Registro() {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [verContrasena, setVerContrasena] = useState(false)
  const [error, setError] = useState('')

  const handleRegistro = () => {
    if (contrasena !== confirmar) {
      setError('Las contraseñas no coinciden')
      return
    }
    if (contrasena.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }
    setError('')
    alert('Datos correctos. (Aquí conectaremos Supabase después)')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-sky-200 p-6">
      <div className="bg-white/70 rounded-3xl shadow-lg p-10 w-full max-w-sm">
        <h2 className="text-4xl font-bold text-black font-lettering text-center mb-8">
          Crear cuenta
        </h2>

        <label className="block text-gray-700 mb-1">Usuario</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 mb-4 focus:outline-none focus:border-purple-400"
          placeholder="Elige un usuario"
        />

        <label className="block text-gray-700 mb-1">Contraseña</label>
        <div className="relative mb-4">
          <input
            type={verContrasena ? 'text' : 'password'}
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-purple-200 focus:outline-none focus:border-purple-400"
            placeholder="Crea una contraseña"
          />
          <button
            type="button"
            onClick={() => setVerContrasena(!verContrasena)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
          >
            {verContrasena ? '🙈' : '👁️'}
          </button>
        </div>

        <label className="block text-gray-700 mb-1">Confirmar contraseña</label>
        <input
          type={verContrasena ? 'text' : 'password'}
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 mb-4 focus:outline-none focus:border-purple-400"
          placeholder="Repite la contraseña"
        />

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <button
          onClick={handleRegistro}
          className="w-full bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 rounded-full shadow-md transition-colors cursor-pointer mb-4"
        >
          Registrarse
        </button>

        <p className="text-center text-gray-700 text-sm">
          ¿Ya tienes cuenta?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-purple-600 font-semibold cursor-pointer hover:underline"
          >
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  )
}

export default Registro