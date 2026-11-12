import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-3">
          <i className="bi bi-shield-lock-fill text-primary me-2"></i>
          Security Check
        </h2>
        <div className="d-flex flex-column gap-3">
          <PasswordInput />
          <SubmitButton />
        </div>
      </div>
    </div>
  )
}

export default App
