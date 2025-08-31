import React, { useState } from "react";
import IconButton from "./components/IconButton";

const App = () => {
  const moods = ["😃", "😐", "😢"];
  const [counts, setCounts] = useState(
    moods.reduce((acc, mood) => ({ ...acc, [mood]: 0 }), {})
  );

  const incrementCount = (mood) => {
    setCounts((prev) => ({ ...prev, [mood]: prev[mood] + 1 }));
  };

  const resetAll = () => {
    setCounts(moods.reduce((acc, mood) => ({ ...acc, [mood]: 0 }), {}));
  };

  return (
    <div className="emoji-container">
      {moods.map((mood) => (
        <div key={mood}>
          <IconButton
            mood={mood}
            count={counts[mood]}
            increment={() => incrementCount(mood)}
          />
        </div>
      ))}

      <button onClick={resetAll} style={{ marginTop: "20px" }}>
        Reset All
      </button>
    </div>
  );
};

export default App;
