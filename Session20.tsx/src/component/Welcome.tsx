import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Component da duoc render lan dau");
  }, []);
  return (
    <div>
      <h3>Bai 3</h3>
      <h4>Chao mung ban den voi ung dung cua chung toi</h4>
    </div>
  );
}