// components/LoadingSpinner.tsx
export default function LoadingSpinner() {
    return (
      <div style={spinnerStyle}>
        <div className="dots-spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
  
  const spinnerStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    right: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  };
  