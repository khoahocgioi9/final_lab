import { Layout } from "antd";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import AllComponent from "./component/AllComponent";
import ActiveComponent from "./component/ActiveComponent";
import CompletedComponent from "./component/CompletedComponent";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";

const { Content } = Layout;

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    const storedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks")
    );
    if (storedCompletedTasks) {
      setCompletedTasks(storedCompletedTasks);
    }
  }, []);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };
  return (
    <BrowserRouter>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <HeaderComponent />
        <Layout>
          <Navbar/>
          <Content>
            <Routes>
              <Route path="/" element={<AllComponent tasks={tasks} completedTasks={completedTasks} />} />
              <Route path="/active" element={<ActiveComponent addTask={addTask}/>} />
              <Route path="/completed" element={<CompletedComponent completedTasks={completedTasks}/>} />
            </Routes>
          </Content>
        </Layout>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
