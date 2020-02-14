import React from "react";
import Icon from "./component/assets/icons/iconList";
import Header from "./component/headers/Header";
const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#ff2626", height: "100vh", padding: 100 }}>
      <header>
        <Icon icon="amyIcon" size={75} color="#ffffff" />
        <Header
          title="good morning"
          subTitle="Mist enveloped the ship three hours out from port."
        />
      </header>
    </div>
  );
};

export default App;
