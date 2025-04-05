export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀 Welcome to T3TRUST</h1>
      <p>This is your MVP homepage deployed using Next.js App Router.</p>
      <p>You can now start building the Login, Dashboard, and Loan Features here.</p>
    </main>
  );
}
