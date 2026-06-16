import { useNavigate } from 'react-router-dom'

function Bienvenida() {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate('/que-es')}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-sky-200 cursor-pointer"
    >
      <h1 className="text-8xl font-bold text-black font-lettering">
        Journal
      </h1>
    </div>
  )
}

export default Bienvenida