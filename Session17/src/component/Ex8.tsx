import { useState, type ChangeEvent } from "react";

export default function Checkbox() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h2>Sở thích: [{selected.map((s) => `"${s}"`).join(", ")}]</h2>
      <label>
        <input type="checkbox" value="Đi chơi" onChange={handleChange} />
        Đi chơi
      </label>
      <br />
      <label>
        <input type="checkbox" value="Code" onChange={handleChange} />
        Code
      </label>
      <br />
      <label>
        <input type="checkbox" value="Bơi lội" onChange={handleChange} />
        Bơi lội
      </label>
      <br />
      <label>
        <input type="checkbox" value="Nhảy dây" onChange={handleChange} />
        Nhảy dây
      </label>
    </div>
  );
}
