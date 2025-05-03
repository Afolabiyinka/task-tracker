import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import {
  Calendar,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Badge,
  List,
  Typography,
  Tag,
  Popover,
  Switch,
  Row,
  Col,
} from "antd";
import {
  PlusOutlined,
  SettingOutlined,
  BulbOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Drawer } from "@material-tailwind/react";

const TaskCalendar = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [taskDrawerOpen, setTaskDrawerOpen] = useState(false);
  const [selectedDateTasks, setSelectedDateTasks] = useState([]);
  const [taskDetailsDrawerOpen, setTaskDetailsDrawerOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Categories for task types
  const categories = [
    { name: "Work", color: "#ff4d4f" },
    { name: "Personal", color: "#52c41a" },
    { name: "Study", color: "#1890ff" },
    { name: "Health", color: "#722ed1" },
    { name: "Other", color: "#faad14" },
  ];

  useEffect(() => {
    // Mock tasks
    const mockTasks = [
      {
        id: 1,
        title: "Team Meeting",
        date: dayjs().format("YYYY-MM-DD"),
        time: "10:00",
        category: "Work",
        description: "Discuss project",
      },
      {
        id: 2,
        title: "Dentist Appointment",
        date: dayjs().add(2, "day").format("YYYY-MM-DD"),
        time: "14:30",
        category: "Health",
        description: "Dental checkup",
      },
      {
        id: 3,
        title: "Study JavaScript",
        date: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
        time: "18:00",
        category: "Study",
        description: "Learn React",
      },
      {
        id: 4,
        title: "Grocery Shopping",
        date: dayjs().format("YYYY-MM-DD"),
        time: "17:00",
        category: "Personal",
        description: "Buy groceries",
      },
    ];
    setTasks(mockTasks);
  }, []);

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const newTask = {
        id: tasks.length + 1,
        title: values.title,
        date: values.date.format("YYYY-MM-DD"),
        time: values.time.format("HH:mm"),
        category: values.category,
        description: values.description,
      };
      setTasks([...tasks, newTask]);
      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const showModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
    form.setFieldsValue({
      date: date,
      time: dayjs("09:00", "HH:mm"),
      category: "Work",
    });
  };

  const handleDateSelect = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const filteredTasks = tasks.filter((task) => task.date === formattedDate);
    setSelectedDateTasks(filteredTasks);
    setSelectedDate(date);
    setTaskDrawerOpen(true);
  };

  const showTaskDetails = (task) => {
    setSelectedTask(task);
    setTaskDetailsDrawerOpen(true);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setTaskDetailsDrawerOpen(false);
  };

  const dateCellRender = (value) => {
    const formattedDate = value.format("YYYY-MM-DD");
    const dateTaskList = tasks.filter((task) => task.date === formattedDate);
    return (
      <div onClick={() => handleDateSelect(value)}>
        {dateTaskList.length > 0 &&
          dateTaskList.map((task) => {
            const category = categories.find(
              (cat) => cat.name === task.category
            );
            return (
              <Badge
                key={task.id}
                color={category?.color || "#1890ff"}
                text={task.title}
              />
            );
          })}
      </div>
    );
  };

  const headerRender = ({ value, onChange }) => {
    return (
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title level={4}>
            <CalendarOutlined /> Task Calendar
          </Typography.Title>
        </Col>
        <Col>
          <Popover
            content={<Switch checked={isDarkMode} onChange={setIsDarkMode} />}
            // trigger="click"
          >
            <Button icon={<SettingOutlined />} />
          </Popover>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => showModal(value)}
          >
            Add Task
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Calendar
        fullscreen={false}
        headerRender={headerRender}
        dateCellRender={dateCellRender}
        onSelect={handleDateSelect}
      />

      <Modal
        title="Add Task"
        visible={isModalOpen}
        onOk={handleModalOk}
        onCancel={() => setIsModalOpen(false)}
        okText="Add"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="time" label="Time">
            <TimePicker />
          </Form.Item>
          <Form.Item name="category" label="Category">
            <Select>
              {categories.map((category) => (
                <Select.Option key={category.name} value={category.name}>
                  <Badge color={category.color} text={category.name} />
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>

      <Drawer
        title={`Tasks for ${selectedDate.format("MMMM D, YYYY")}`}
        placement="right"
        visible={taskDrawerOpen}
        onClose={() => setTaskDrawerOpen(false)}
        width={400}
      >
        <List
          itemLayout="horizontal"
          dataSource={selectedDateTasks}
          renderItem={(task) => (
            <List.Item
              actions={[
                <Button onClick={() => showTaskDetails(task)}>Details</Button>,
              ]}
            >
              <List.Item.Meta title={task.title} description={task.time} />
            </List.Item>
          )}
        />
      </Drawer>

      <Drawer
        title="Task Details"
        placement="right"
        visible={taskDetailsDrawerOpen}
        onClose={() => setTaskDetailsDrawerOpen(false)}
        width={400}
      >
        {selectedTask && (
          <>
            <Typography.Title level={4}>{selectedTask.title}</Typography.Title>
            <p>{selectedTask.time}</p>
            <Tag color="blue">{selectedTask.category}</Tag>
            <p>{selectedTask.description}</p>
            <Button danger onClick={() => deleteTask(selectedTask.id)}>
              Delete
            </Button>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default TaskCalendar;
