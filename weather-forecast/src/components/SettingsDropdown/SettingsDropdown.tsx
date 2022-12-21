import React, { useContext } from "react";
import { store } from "../../App";
import "./SettingsDropdown.scss";
import { ReactComponent as Animations } from "../../resources/images/svg/animations.svg";
import { ReactComponent as Airdrop } from "../../resources/images/svg/airdrop.svg";
import { ReactComponent as Tick } from "../../resources/images/svg/tick.svg";
import { ReactComponent as Notch } from "../../resources/images/svg/notch.svg";
import toggleWallpaperVis from "../../utils/helpers/toggleWallpaperVis";

export default function SettingsDropdown() {
  const [state, dispatch] = useContext(store);

  const setSystemColor = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    dispatch({
      type: "settings/SETCOLOR",
      payload: target.id,
    });

    if (target.id === "orange") {
      document.documentElement.style.setProperty('--user-color', "#ff9d0a");
    } else if (target.id === "green") {
      document.documentElement.style.setProperty('--user-color', "#2ed157");
    } else if (target.id === "babyblue") {
      document.documentElement.style.setProperty('--user-color', "#66d4ff");
    } else if (target.id === "blue") {
      document.documentElement.style.setProperty('--user-color', "#0a85ff");
    } else if (target.id === "purple") {
      document.documentElement.style.setProperty('--user-color', "#5e5ce6");
    } else if (target.id === "violet") {
      document.documentElement.style.setProperty('--user-color', "#bf5af2");
    } else if (target.id === "red") {
      document.documentElement.style.setProperty('--user-color', "#ff3860");
    }
  };

  const toggleAnimations = () => {
    dispatch({
        type: 'settings/ANIMATIONS'
    });
  }

  const toggleAirdrop = () => {
    dispatch({
        type: 'settings/AIRDROP'
    });
  }

  const toggleNotch = () => {
    dispatch({
        type: 'settings/NOTCH'
    });
  }

  const openWallpaperWindow = (e: React.MouseEvent) => {
    if (state.settings.wallpaper.open) {
      toggleWallpaperVis(e);
    }

    dispatch({
      type: 'wallpaper/TOGGLE'
    });
  }

  return (
    <div
      className={`settings-dropdown set ${
        state.settings.open ? "settings-open" : "settings-closed"
      }`}
    >
      <section className="functions set">
        <div className="func set" onClick={toggleAirdrop}>
          <button
            className="airdrop-btn set"
            type="button"
            style={{
              backgroundColor: !state.settings.airdrop
                ? "#2f3541"
                : state.settings.color === "blue"
                ? "#0a85ff"
                : state.settings.color === "orange"
                ? "#ff9d0a"
                : state.settings.color === "green"
                ? "#2ed157"
                : state.settings.color === "babyblue"
                ? "#66d4ff"
                : state.settings.color === "purple"
                ? "#5e5ce6"
                : state.settings.color === "violet"
                ? "#bf5af2"
                : "#ff3860",
            }}
          >
            <Airdrop fill={state.settings.airdrop ? "black" : "white"} style={{ transition: "0.25s all" }}/>
          </button>
          Airdrop
        </div>

        <div className="func set" onClick={toggleAnimations}>
          <button
            className="set"
            type="button"
            style={{
              backgroundColor: !state.settings.animations
                ? "#2f3541"
                : state.settings.color === "blue"
                ? "#0a85ff"
                : state.settings.color === "orange"
                ? "#ff9d0a"
                : state.settings.color === "green"
                ? "#2ed157"
                : state.settings.color === "babyblue"
                ? "#66d4ff"
                : state.settings.color === "purple"
                ? "#5e5ce6"
                : state.settings.color === "violet"
                ? "#bf5af2"
                : "#ff3860",
            }}
          >
            <Animations fill={state.settings.animations ? "black" : "white"} style={{ transition: "0.25s all" }}/>
          </button>
          Animations
        </div>
      </section>

      <section className="sys-colors set">
        System Color
        <div className="colors set">
          <div className="color orangey set" id="orange" onClick={setSystemColor}>
            {state.settings.color === "orange" ? <Tick /> : null}
          </div>
          <div className="color greeny set" id="green" onClick={setSystemColor}>
            {state.settings.color === "green" ? <Tick /> : null}
          </div>
          <div
            className="color babybluey set"
            id="babyblue"
            onClick={setSystemColor}
          >
            {state.settings.color === "babyblue" ? <Tick /> : null}
          </div>
          <div className="color bluey set" id="blue" onClick={setSystemColor}>
            {state.settings.color === "blue" ? <Tick /> : null}
          </div>
          <div className="color purpley set" id="purple" onClick={setSystemColor}>
            {state.settings.color === "purple" ? <Tick /> : null}
          </div>
          <div className="color violety set" id="violet" onClick={setSystemColor}>
            {state.settings.color === "violet" ? <Tick /> : null}
          </div>
          <div className="color redy set" id="red" onClick={setSystemColor}>
            {state.settings.color === "red" ? <Tick /> : null}
          </div>
        </div>
      </section>

      <section className="wallpaper-container" id="opener" onClick={openWallpaperWindow}>
        <img className="preview" src={require(`../../resources/images/preview_${state.settings.wallpaper.surname}.jpg`)} />
        <div className="desc">
            <h2 className="title">{state.settings.wallpaper.name}</h2>
            <h3 className="type">Dynamic Wallpaper</h3>
        </div>
      </section>

      <section className="notch-container set" onClick={toggleNotch}>
        <button 
          className="notch-btn set"
          style={{
            backgroundColor: !state.settings.notch
              ? "#2f3541"
              : state.settings.color === "blue"
              ? "#0a85ff"
              : state.settings.color === "orange"
              ? "#ff9d0a"
              : state.settings.color === "green"
              ? "#2ed157"
              : state.settings.color === "babyblue"
              ? "#66d4ff"
              : state.settings.color === "purple"
              ? "#5e5ce6"
              : state.settings.color === "violet"
              ? "#bf5af2"
              : "#ff3860",
          }}
        >
            <Notch fill={state.settings.notch ? "black" : "white"} style={{ transition: "0.25s all" }}/>
        </button>
        Notch
      </section>
    </div>
  );
}