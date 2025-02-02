import React from "react";
import "./EventList.scss";
import { Card } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocalStorage } from "../../hooks";

const EventList = () => {
  const [events] = useLocalStorage("events", []);
  return (
    <div className="event-list">
      <h2 className="page-title">Events</h2>
      {events?.length > 0 ? (
        <div className="grid-container">
          {events.map((event) => (
            <Card
              key={event.id}
              className="event-card"
              cover={<img alt="event" src={event.media} />}
            >
              <div className="event-details">
                <p className="organizer">{event.community}</p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-time">{event.date}</p>
                <p className="event-location">
                  <FaMapMarkerAlt className="location-icon" /> {event.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="warning-message">
          No events found yet. Create your first event to get started!
        </div>
      )}
    </div>
  );
};

export default EventList;
