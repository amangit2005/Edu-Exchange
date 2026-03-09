// App.jsx — root component, only handles tab routing and modal state
import { useState } from "react";
import Navbar    from "./components/Navbar";
import Modal     from "./components/Modal";
import Discover  from "./pages/Discover";
import Upload    from "./pages/Upload";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [tab,   setTab]   = useState("Discover");
  const [modal, setModal] = useState(null);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "var(--bg)" }}>

      <Navbar tab={tab} setTab={setTab} />

      {tab === "Discover"  && <Discover  onSelect={setModal} />}
      {tab === "Upload"    && <Upload />}
      {tab === "Dashboard" && <Dashboard />}

      {modal && <Modal m={modal} onClose={() => setModal(null)} />}

    </div>
  );
}
