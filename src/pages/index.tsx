import Button from 'components/Button'

export default function Home() {
  return (
    <main
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center'
      }}
    >
      <Button size="large" onClick={() => alert('Thanks bro!')}>
        Alert me!
      </Button>
    </main>
  )
}
