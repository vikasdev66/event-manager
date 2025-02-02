import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Form, Input, Button, Select, DatePicker } from "antd";
import "./EventFrom.scss"

const { Option } = Select;

const EventForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="event-form">
      <h2 className="event-title">Create New Event</h2>
      <div className="image-upload">
        <FaRegImage className="image-icon" />
        <Button className="upload-btn">Add Photo</Button>
      </div>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Select Community"
          name="community"
          initialValue="Indiranagar Run Club"
        >
          <Select>
            <Option value="Indiranagar Run Club">Indiranagar Run Club</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Event Title"
          name="eventTitle"
          rules={[{ required: true, message: "Event title is required" }]}
        >
          <Input placeholder="Enter event title" />
        </Form.Item>
        <Form.Item label="Starts" name="startTime" rules={[{ required: true }]}>
          <DatePicker showTime format="ddd, DD MMM [at] h:mm A" />
        </Form.Item>
        <Form.Item label="Ends" name="endTime" rules={[{ required: true }]}>
          <DatePicker showTime format="ddd, DD MMM [at] h:mm A" />
        </Form.Item>
        <Form.Item label="Choose Location" name="location">
          <Input placeholder="Enter location" />
        </Form.Item>
        <Form.Item label="Add Description" name="description">
          <Input.TextArea placeholder="Add a brief description to let others know what your event is about" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="create-event-btn">
            Create Event
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EventForm;
