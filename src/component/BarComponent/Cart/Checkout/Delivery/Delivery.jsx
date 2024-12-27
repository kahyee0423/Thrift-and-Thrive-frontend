import React from 'react'
import './Delivery.css'

const Delivery = () => {
    return (
        <form className="deliveryForm">
          <h2 className="delivery-sectionTitle">Delivery</h2>
          <div className="delivery-formGroup">
            <label htmlFor="country" className="delivery-visuallyHidden">Country/Region</label>
            <select id="country" className="delivery-countrySelect" defaultValue="Malaysia">
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>
          <div className="delivery-nameGroup">
            <div className="delivery-formGroup">
              <label htmlFor="firstName" className="delivery-visuallyHidden">First name</label>
              <input
                type="text"
                id="firstName"
                className="delivery-name-input"
                placeholder="First name"
                required
              />
            </div>
            <div className="delivery-formGroup">
              <label htmlFor="lastName" className="delivery-visuallyHidden">Last name</label>
              <input
                type="text"
                id="lastName"
                className="delivery-name-input"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="delivery-formGroup">
            <label htmlFor="address" className="delivery-visuallyHidden">Address</label>
            <input
              type="text"
              id="address"
              className="delivery-input"
              placeholder="Address"
              required
            />
          </div>
          <div className="locationGroup">
            <div className="delivery-formGroup">
              <label htmlFor="postcode" className="delivery-visuallyHidden">Postcode</label>
              <input
                type="text"
                id="postcode"
                className="delivery-input"
                placeholder="Postcode"
                required
              />
            </div>
            <div className="delivery-formGroup">
              <label htmlFor="city" className="delivery-visuallyHidden">City</label>
              <input
                type="text"
                id="city"
                className="delivery-input"
                placeholder="City"
                required
              />
            </div>
            <div className="delivery-formGroup">
              <label htmlFor="state" className="delivery-visuallyHidden">State</label>
              <select id="state" className="delivery-stateSelect" defaultValue="Selangor">
                <option value="Selangor">Selangor</option>
              </select>
            </div>
          </div>
          <div className="delivery-formGroup">
            <label htmlFor="phone" className="delivery-visuallyHidden">Phone</label>
            <input
              type="tel"
              id="phone"
              className="delivery-input"
              placeholder="Phone +60"
              required
            />
          </div>
          <div className="delivery-checkboxGroup">
            <input
              type="checkbox"
              id="saveInfo"
              className="delivery-checkbox"
            />
            <label htmlFor="saveInfo" className="delivery-checkboxLabel">
              Save this information for next time
            </label>
          </div>
        </form>
      );
}

export default Delivery