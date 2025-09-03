import { useEffect, useRef, useState } from "react";

export default function Ex6() {
  const [isOn, setIsOn] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (isOn && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOn]);
  return (
    <div>
      <h3>Ung dung React voi Modal voi Focus Input</h3>
      <button onClick={() => setIsOn(true)}>Mo modal</button>
      {isOn && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "max-content",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <h4>Dang nhap</h4>
            <input type="text" ref={inputRef} />
            <button onClick={() => setIsOn(false)}>Dong</button>
          </div>
        </div>
      )}
    </div>
  );
}