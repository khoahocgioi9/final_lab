import { Button, Checkbox, List, Space } from "antd";
import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const CompletedComponent = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks")
    );
    if (storedCompletedTasks) {
      setCompletedTasks(storedCompletedTasks);
    }
  }, []);

  const handleDeleteTask = (task) => {
    const updatedTasks = completedTasks.filter((item) => item !== task);
    setCompletedTasks(updatedTasks);
    localStorage.setItem("completedTasks", JSON.stringify(updatedTasks));
  };

  const handleDeleteAll = () => {
    setCompletedTasks([]);
    localStorage.removeItem("completedTasks");
  };

  return (
    <Space.Compact
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Completed Tasks</h2>

      <List
        bordered
        dataSource={completedTasks}
        renderItem={(item) => (
          <List.Item>
            <Checkbox defaultChecked disabled style={{ marginRight: 30 }} />
            {item}
            <Button
              onClick={() => handleDeleteTask(item)}
              type="primary"
              icon={<DeleteOutlined />}
              style={{ marginLeft: 30 }}
            />
          </List.Item>
        )}
      />
      <Button danger onClick={handleDeleteAll}>
        {" "}
        <DeleteOutlined /> Delete All
      </Button>
    </Space.Compact>
  );
};

export default CompletedComponent;
