import Content from "./components/content/content";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import { useSelector } from "react-redux";
import { useState } from "react";
function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const lang = useSelector((state) => state.language?.lang);

  const changeDir = (lang) => {
    return lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="app" dir={changeDir(lang)}>
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-12">
            <SideBar openSidebar={openSidebar} />
          </div>
          <div className="col-md-9 col-12">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
