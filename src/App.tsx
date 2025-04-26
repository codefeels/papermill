import icon from '../google.png'
import { useState } from 'react'
import BaseDialog from './BaseDialog'

import './toast.css'

export default function ButtonUsage() {
  const [showDialog, setShowDialog] = useState(false)
  const [temperature, setTemperature] = useState('')
  const [toastMessage, setToastMessage] = useState<React.ReactNode>('')

  const handleTemperatureSubmit = async () => {
    setShowDialog(false)
    await showNotification('Nice, good choice. Generating paper...')
    await showNotification('Gonna make it extra sloppy for ya...')
    await showNotification('Really ripping off this random paper from 2016...')
    await showNotification('Alright, this is gonna be 🔥 check it')
    window.location.href = 'https://arxiv.org/abs/2501.11218v1'
  }

  const showNotification = async (message: React.ReactNode, timeout = 4000) => {
    setToastMessage(message)
    await new Promise<void>(res => setTimeout(res, timeout))
    setToastMessage('')
  }

  return (
    <div className="stack">
      <div className="box">
        <img className="headerimg" src={icon} width={400} />
      </div>
      <div className="box">
        <label htmlFor="paper">Generate any paper your heart desires</label>
        <input id="paper" type="text" />
        <select>
          <option>AI/ML</option>
          <option>CS</option>
        </select>
      </div>
      <div className="box">
        <button
          onClick={async () => {
            await showNotification('Minimizing mean squared blunders (MSE)...')
            await showNotification('Applying head part examination (PCA)...')
            await showNotification(
              'Sick, found some nice scanty tourist spots for Fig 1 👌',
            )
            await showNotification('Alright, paper generated')
            window.location.href = 'https://arxiv.org/abs/2501.11218v1'
          }}
        >
          I'm feeling lucky
        </button>
        <button onClick={() => setShowDialog(true)}>Cook it up son</button>
        <button
          onClick={async () => {
            await showNotification('Generating reply...')
            await showNotification('Deflecting responsibility...')
            await showNotification('Downplaying situation...')
            await showNotification(
              'Making sure the reply sounds like it is written by AI also...',
            )
            await showNotification(
              '"Boom! roasted" haha. PubPeer, lol, what a bunch of ninnies',
            )
            window.location.href =
              'https://retractionwatch.com/2025/04/24/google-ai-engineer-withdraws-arxiv-preprint-tortured-phrases-genai/'
          }}
        >
          Respond to anonymous PubPeer commenter
        </button>
      </div>
      <div style={{ marginTop: 500, fontWeight: 100, fontSize: 8 }}>
        Please don't sue me
      </div>

      {showDialog && (
        <BaseDialog open onClose={() => setShowDialog(false)}>
          <div className="dialog">
            <h3>Enter Temperature</h3>
            <p>Please enter a temperature value:</p>
            <input
              type="number"
              value={temperature}
              onChange={e => setTemperature(e.target.value)}
              placeholder="Enter temperature"
            />
            <div className="dialog-buttons">
              <button onClick={() => setShowDialog(false)}>Cancel</button>
              <button onClick={handleTemperatureSubmit}>Submit</button>
            </div>
          </div>
        </BaseDialog>
      )}

      {toastMessage && (
        <div className="toast-container">
          <div className="toast">{toastMessage}</div>
        </div>
      )}
    </div>
  )
}
