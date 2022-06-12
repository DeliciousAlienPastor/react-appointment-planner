import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>{" "}
      <br></br>
      <label>
        <input
          type="date"
          value={date}
          placeholder="Date"
          onChange={(event) => setDate(event.target.value)}
          min={getTodayString()}
        />
      </label>{" "}
      <br></br>
      <label>
        <input
          type="time"
          value={time}
          placeholder="Time"
          onChange={(event) => setTime(event.target.value)}
        />
      </label>{" "}
      <br></br>
      <label>
        <ContactPicker
          value={contact}
          contacts={contacts}
          placeholder="Appointment with"
          onChange={(event) => setContact(event.target.value)}
        />
      </label>{" "}
      <br></br>
      <input type="submit" value="add appointment" />
    </form>
  );
};
