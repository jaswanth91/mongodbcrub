export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>404 - Page Not Found</h1>
      <p>The page you are looking for doesn’t exist.</p>
    </div>
  );
}
