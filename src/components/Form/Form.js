import React from "react";
import "./style.css";
//import TextField from "/src/components/TextField/TextField";

export default function Form() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "label1",
    accepts: false
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = event => {
    alert(JSON.stringify(state, null, 3));
    event.preventDefault();
  };

  return (
    <div className="app">
      <h2 className="title">The Form with Components</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>
            <div className="heading">First Name</div>
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              tabindex="1"
            />
          </label>
          <label>
            <div className="heading">Last Name</div>
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              tabindex="2"
            />
          </label>
        </div>
        <div className="row">
          <label>
            <div className="heading">Email</div>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              tabindex="3"
            />
          </label>
          <label>
            <div className="heading">Phone</div>
            <input
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              tabindex="4"
            />
          </label>
        </div>
        <label>
          <div className="heading">Marketing Role</div>
          <select
            name="role"
            onChange={handleChange}
            value={state.role}
            tabindex="7"
          >
            <option value="label1">Label1</option>
            <option value="label2">Label2</option>
            <option value="label3">Label3</option>
          </select>
        </label>
        <div className="row">
          <label className="container">
            <input
              type="checkbox"
              name="accepts"
              checked={state.accepts}
              onChange={handleChange}
              tabindex="8"
            />
            <span class="checkmark" />
            <div className="heading">Customer Accepts Marketing?</div>
          </label>
          <button>Add Discount</button>
        </div>
      </form>
    </div>
  );
}
