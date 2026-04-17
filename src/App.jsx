import './App.css';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f4f6f8',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '360px',
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '10px' }}>Amplify Task 5 Demo</h1>
        <h2 style={{ marginTop: '0', color: '#444' }}>Niranjan Paudel</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Simulated sign in interface for AWS web application tutorial
        </p>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />

        <button
          style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            background: '#232f3e',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          Sign In
        </button>

        <button
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #232f3e',
            borderRadius: '8px',
            background: 'white',
            color: '#232f3e',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Create Account
        </button>

        <p style={{ marginTop: '18px', fontSize: '14px', color: '#777' }}>
          Sample user email: niranjan@example.com
        </p>
      </div>
    </div>
  );
}

export default App;