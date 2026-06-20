import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [verContrasena, setVerContrasena] = useState(false)
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleLogin = async () => {
    setError('')
    setCargando(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: contrasena,
    })

    setCargando(false)

    if (error) {
      setError('Email o contraseña incorrectos')
      return
    }

    navigate('/inicio')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-sky-200 p-6">
      <div className="bg-white/70 rounded-3xl shadow-lg p-10 w-full max-w-sm">
        <h2 className="text-5xl font-bold text-black font-lettering text-center mb-8">
          Log-in
        </h2>

        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-purple-200 mb-4 focus:outline-none focus:border-purple-400"
          placeholder="tucorreo@ejemplo.com"
        />

        <label className="block text-gray-700 mb-1">Contraseña</label>
        <div className="relative mb-6">
          <input
            type={verContrasena ? 'text' : 'password'}
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-purple-200 focus:outline-none focus:border-purple-400"
            placeholder="Tu contraseña"
          />
          <button
            type="button"
            onClick={() => setVerContrasena(!verContrasena)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
          >
            {verContrasena ? '🙈' : '👁️'}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={cargando}
          className="w-full bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 rounded-full shadow-md transition-colors cursor-pointer mb-4 disabled:opacity-50"
        >
          {cargando ? 'Entrando...' : 'Entrar'}
        </button>

        <p className="text-center text-gray-700 text-sm">
          ¿Eres nuevo?{' '}
          <span
            onClick={() => navigate('/registro')}
            className="text-purple-600 font-semibold cursor-pointer hover:underline"
          >
            Crear cuenta
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login