// import React, {useState, useContext} from "react";
// import emoji from "react-easy-emoji";
// import ThemeContext from "../../context/ThemeContext"
// import "./ThemeSwitch.scss";

// function ThemeSwitch(){
//   const {isDark} = useContext(ThemeContext);
//   const [isChecked, setChecked] = useState(isDark);
//   const ThemeContext = useContext(ThemeContext);

//   return (
//     <label className="switch">
//       <input
//         type="checkbox"
//         checked={isDark}
//         onChange={() => {
//           ThemeContext.changeTheme();
//           setChecked(!isChecked);
//         }}
//       />
//       <span className="slider round">
//         <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
//       </span>
//     </label>
//   );
// };
// export default ThemeSwitch;
import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import ThemeContext from "../../context/ThemeContext";
import "./ThemeSwitch.scss";

function ThemeSwitch() {
  const {isDark} = useContext(ThemeContext);
  const [isChecked, setChecked] = useState(isDark);
  const themeContext = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          themeContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};
export default ThemeSwitch;
