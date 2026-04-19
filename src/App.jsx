import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import './App.css';

const client = generateClient();

function App({ signOut, user }) {
  const [profileEmail, setProfileEmail] = useState('');

  useEffect(() => {
    async function loadProfile() {
      try {
        const owner = user?.signInDetails?.loginId || user?.username;

        const result = await client.models.UserProfile.list({
          filter: owner ? { profileOwner: { eq: owner } } : undefined,
        });

        if (result?.data?.length > 0) {
          setProfileEmail(result.data[0].email || '');
        } else {
          setProfileEmail(user?.signInDetails?.loginId || user?.username || '');
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        setProfileEmail(user?.signInDetails?.loginId || user?.username || '');
      }
    }

    loadProfile();
  }, [user]);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: '#ffffff',
          color: '#222222',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#222222', marginBottom: '0.5rem' }}>
          Build a Basic Web Application
        </h1>

        <h2 style={{ marginTop: '0.5rem', color: '#444' }}>
          Niranjan Paudel
        </h2>

        <p style={{ marginTop: '1rem', color: '#555' }}>
          This is my AWS Amplify Task 5 web application.
        </p>

        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ color: '#222222' }}>User Profile</h3>
          <p style={{ color: '#222222', fontSize: '18px' }}>
            <strong>Email:</strong>{' '}
            {profileEmail || user?.signInDetails?.loginId || user?.username || 'No email found'}
          </p>
        </div>

        <button
          onClick={signOut}
          style={{
            marginTop: '1.5rem',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '8px',
            background: '#232f3e',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}

export default App;