import React from "react";
const Page1 = () => {
  const handleSubmit = () => {
    e.preventDefault();
    console.log("form submited");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="name">Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="4" cols="50"></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
export default Page1;
