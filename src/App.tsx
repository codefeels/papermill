import icon from '../google.png'
import { useState } from 'react'
import BaseDialog from './BaseDialog'

import './toast.css'

export default function ButtonUsage() {
  const [showDialog, setShowDialog] = useState(false)
  const [temperature, setTemperature] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleDialogClose = () => {
    setShowDialog(false)
  }

  const handleTemperatureSubmit = () => {
    setShowDialog(false)
    showNotification('Nice, good choice. Generating paper')
    setTimeout(() => {
      window.location.href = 'https://arxiv.org/abs/2501.11218v1'
    }, 1000)
  }

  const showNotification = (message: string) => {
    setToastMessage(message)
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 1500)
  }

  return (
    <div className="stack">
      <div className="box">
        <img src={icon} width={400} />
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
          onClick={() => {
            showNotification('Minimizing mean squared blunders (MSE)...')
            setTimeout(() => {
              showNotification('Looks good, generating paper!')
              setTimeout(() => {
                window.location.href = 'https://arxiv.org/abs/2501.11218v1'
              }, 1500)
            }, 1500)
          }}
        >
          I'm feeling lucky
        </button>
        <button onClick={() => setShowDialog(true)}>Cook it up son</button>
        <button
          onClick={() =>
            showNotification(
              'Boom! roasted. Made sure to downplay the situation and deflect responsibility',
            )
          }
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
              <button onClick={handleDialogClose}>Cancel</button>
              <button onClick={handleTemperatureSubmit}>Submit</button>
            </div>
          </div>
        </BaseDialog>
      )}

      {showToast && (
        <div className="toast-container">
          <div className="toast">{toastMessage}</div>
        </div>
      )}
    </div>
  )
}
