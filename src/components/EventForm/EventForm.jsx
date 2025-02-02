import React from "react";
import dayjs from "dayjs";
import { FaRegImage } from "react-icons/fa";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useMediaHandler, useLocalStorage } from "../../hooks";
import "./EventForm.scss";

const { Option } = Select;

const EventForm = () => {
  const [form] = Form.useForm();
  const [events, setEvents] = useLocalStorage("events", []);
  const { media, handleMediaChange, mediaPreview } = useMediaHandler();

  const handleSubmit = (values) => {
    const newEvent = {
      id: Date.now(),
      community: values.community,
      title: values.eventTitle,
      date: `${dayjs(values.startTime).format(
        "dddd, MMMM D, YYYY h:mm A"
      )} - ${dayjs(values.endTime).format("dddd, MMMM D, YYYY h:mm A")}`,
      location: values.location,
      description: values.description,
      media,
    };
    setEvents([...events, newEvent]);
    handleMediaChange(null);
    form.resetFields();
    console.log("Form Values:", newEvent);
  };

  return (
    <div className="event-form">
      <h2 className="event-title">Create New Event</h2>
      <div className="image-upload">
        {mediaPreview ? (
          <img src={mediaPreview} alt="Media Preview" className="image-icon" />
        ) : (
          <FaRegImage className="image-icon" />
        )}
        <input
          type="file"
          id="file-input"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleMediaChange}
        />
        <Button
          className="upload-btn"
          onClick={() => document.getElementById("file-input").click()}
        >
          Add Photo
        </Button>
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
