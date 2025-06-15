import RandomUserComponent from "@/components/RandomUser";

export default function UserPage() {
  return (
    <>
      <a
        href="https://csslibraries-app1.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'underline',
          display: 'block',
          marginBottom: '20px',
          color: '#0070f3',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
      Todo App
      </a>

      <RandomUserComponent />
    </>
  );
}
