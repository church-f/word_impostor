import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AccordionPlayer from './component/AccordionPlayer'

function App() {
  const players = useSelector((state) => state.player.playerNames)
  return (
    <div style={{height: '100dvh', width: '100vw'}}>
      <AccordionPlayer/>
    </div>
  )
}

export default App
