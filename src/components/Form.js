import React, { useState } from "react";

const Form = () => {
  return (
    <form className="form-wrapper">
      <fieldset>
        <legend className="details-title">User Details</legend>
        {/* without accessbility */}
        <div className="form-group">
          <label className="form-group-label">First Name:</label>
          <input type="text" className="form-group-input" name="name" />
        </div>

        {/* with accessbility */}
        <div className="form-group">
          <label htmlFor="lastname" className="form-group-label">Last Name:</label>
          <input id="lastname" type="text" className="form-group-input" name="surname" />
        </div>
      </fieldset>

      <fieldset className="radio-wrapper">
        <div className="form-group">
          <legend className="gender-title">Select Gender</legend>
          <div className="radio-wrapper-male">
            <input id="male" name="radio" type="radio" />
            <label htmlFor="male" className="form-group-label">
              Male
            </label>
          </div>
          <div className="radio-wrapper-female">
            <input id="female" name="radio" type="radio" />
            <label htmlFor="female" className="form-group-label">
              Female
            </label>
          </div>
          <div className="radio-wrapper-other">
            <input id="other" aria-disabled="true" name="radio" type="radio" disabled />
            <label htmlFor="other" className="form-group-label">
              Other
            </label>
          </div>
        </div>
      </fieldset>

      <div className="form-group">
        <label htmlFor="education" className="form-option">Education</label>
        <select id="education" className="form-select">
          <option value="bba">BBA</option>
          <option value="mba">MBA</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="btn-wrapper">
        <input aria-label="Submit userdetail" className="form-btn" type="submit" value="Submit" />
        <a aria-label="click to submit userdetail" role="button" href="#" className="custom-btn">Click me</a>
      </div>
    </form>
  );
};

export default Form;
