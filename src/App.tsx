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
          subTitle="Banking your way. 
What would you like
to do today?"
        />
      </header>
    </div>
  );
};

export default App;
