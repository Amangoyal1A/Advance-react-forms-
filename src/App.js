import React from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    Country: "India",
    StreetAddress: "",
    State: "",
    City: "",
    postalCode:"",
    Comments: false,
    Candidates: false,
    Offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event){
    event.preventDefault()

    console.log(formData)

  }

  return (
    <div className="flex flex-col items-center">
      <form>
        <label htmlFor="firstName"> First Name </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Aman"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="firstName"> Last Name </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Goyal"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="firstName"> Email Address </label>
        <br />
        <input
          type="text"
          name="emailAddress"
          id="emailAddress"
          placeholder="Aman@gmail.com"
          value={formData.emailAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="Country"> Country</label>
        <br />
        <select
          id="Country"
          name="Country"
          value={formData.Country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />
        <label htmlFor="Street Address"> Street Address </label>
        <br />
        <input
          type="text"
          name="StreetAddress"
          id="streetAddress"
          placeholder="D-66 hakikat rai road"
          value={formData.StreetAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br /> <label htmlFor="City"> City </label>
        <br />
        <input
          type="text"
          name="City"
          id="City"
          placeholder="Delhi"
          value={formData.City}
          onChange={changeHandler}
          className="outline"
        />
        <br /> <label htmlFor="State"> State </label>
        <br />
        <input
          type="text"
          name="State"
          id="State"
          placeholder="West bengal"
          value={formData.State}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="Postal code"> Postal code </label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110033"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <fieldset>
          <legend>by email</legend>
          <div className="flex">
            <input
              id="Comments"
              name="Comments"
              type="checkbox"
              value={formData.Comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="Comments">Comments</label>
              <p>You can tick comments here</p>
            </div>
          </div>
          <div className="flex">
            <input
              id="Candidates"
              name="Candidates"
              type="checkbox"
              value={formData.Candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="Comments">Candidates</label>
              <p>You can tick Candidates here</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="Offers"
              name="Offers"
              type="checkbox"
              value={formData.Offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="Comments">Offers</label>
              <p>You can tick Offers here</p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Push Notification </legend>
          <input
            type="radio"
            id="pushEmail"
            name="pushNotiication"
            value="same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br/>
          <input
            type="radio"
            id="NopushEmail"
            name="pushNotiication"
            value="No push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">No push Notification</label>
          <br/>
          <input
            type="radio"
            id="Everything"
            name="pushNotiication"
            value="Every Thing"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Every Thing</label>
        </fieldset>
      
      <button className="bg-blue-500 text-white font-bold px-2 py-2 rounded" onClick={submitHandler}>Save</button>
      
      </form>



    </div>
  );
};

export default App;
