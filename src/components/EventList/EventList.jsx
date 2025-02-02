import React from "react";
import "./EventList.scss";
import { Card } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Saturday Run - Week 11",
    organizer: "By Bhag Club",
    time: "Tomorrow, 7:00 AM",
    location: "Nehru Park",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Delhi Royal Enfield Riders - Gurgaon",
    organizer: "By Bhag Club",
    time: "Tomorrow, 7:00 AM",
    location: "Nehru Park",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Orbis86: Web3 Awards Night and Mixer",
    organizer: "By Bhag Club",
    time: "Tomorrow, 7:00 AM",
    location: "Nehru Park",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Saturday Run - Week 11",
    organizer: "By Bhag Club",
    time: "Tomorrow, 7:00 AM",
    location: "Nehru Park",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Delhi Royal Enfield Riders - Gurgaon",
    organizer: "By Bhag Club",
    time: "Tomorrow, 7:00 AM",
    location: "Nehru Park",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Orbis86: Web3 Awards Night and Mixer",
    organizer: "By Bhag Club",
    time: "Tomorrow, 7:00 AM",
    location: "Nehru Park",
    image: "https://via.placeholder.com/150",
  },
];

const EventList = () => {
  return (
    <div className="event-list">
      <h2 className="page-title">Events</h2>
      <div className="grid-container">
        {events.map((event) => (
          <Card
            key={event.id}
            className="event-card"
            cover={<img alt="event" src={event.image} />}
          >
            <div className="event-details">
              <p className="organizer">{event.organizer}</p>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-time">{event.time}</p>
              <p className="event-location">
                <FaMapMarkerAlt className="location-icon" /> {event.location}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventList;
