import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option key={-1} value="" defaultValue={"selected"}>
        Select a contact
      </option>
      {contacts.map((contact) => {
        return (
          <option key={contact.name} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
