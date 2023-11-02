import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })


  useEffect(() => {
    console.log(`Effect: ${enabled}`)

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })

    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>

  )
}


function App() {

  const [mounted, setMounted] = useState(true)

  return (
    <main>
      <h3>Mouse Follower</h3>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse Component</button>
    </main>
  )
}

export default App
