import React, { useState } from 'react';

import OracleLogo from "../../assets/Images/Oracle-Logo-For-Website.png";

const MyForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-builder'>
        <div className='form-top-logo'>
          <div className='client-logo'>
            <div className='logo-upload'>
              <input type='file' />
              <span>Change</span>
            </div>
            <img src={OracleLogo} alt='logo' />
          </div>
          <div className='client-logo-info'>
            <h5>Organisation Logo</h5>
            <h6>Lorem Ipsum is simply dummy text of the printing and</h6>
            <span>Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of 1MB.</span>
          </div>
        </div>
        <div className='input-box'>
          <label>
          Org Id
            <input
              type="text"
              name="orgID"
              placeholder='Enter Org ID '
              onChange={handleInputChange}
            />
          </label>
          </div>
          <div className='input-box'>
            <label>
            City Name
              <input
                type="text"
                name="cityName"
                placeholder='Enter City Name'
                onChange={handleInputChange}
              />
            </label>
      </div>
      <div className='input-box'>
          <label>
          Org Name
            <input
              type="text"
              name="orgName"
              placeholder='Enter Org Name'
              onChange={handleInputChange}
            />
          </label>
      </div>
      <div className='input-box'>
          <label>
          Team Name
            <input
              type="text"
              name="TeamName"
              placeholder='Enter Team Name'
              onChange={handleInputChange}
            />
          </label>
      </div>
      <div className='input-box'>
          <label>
          No. of Integrations
            <select>
              <option>Select</option>
              <option>Test</option>
            </select>
          </label>
      </div>
      <div className='input-box'>
          <label>
          Team Count
            <input
              type="text"
              name="TeamCount"
              placeholder='Enter Team Count'
              onChange={handleInputChange}
            />
          </label>
      </div>
      <div className='input-box'>
          <label>
          Similar Month
            <select>
              <option>Select</option>
              <option>Test</option>
            </select>
          </label>
      </div>
      <div className='input-box'>
          <label>
          Go Live Month
            <select>
              <option>Select</option>
              <option>Test</option>
            </select>
          </label>
      </div>
      <div className='input-box'>
          <label>
          Integration Months
            <select>
              <option>Select</option>
              <option>Test</option>
            </select>
          </label>
      </div>
      <div className='input-box'>
          <label>
          TAT for Integration
            <select>
              <option>Select</option>
              <option>Test</option>
            </select>
          </label>
      </div>
      <div className='input-box'>
          <label>
          AI Cycle
            <select>
              <option>Select</option>
              <option>Test</option>
            </select>
          </label>
      </div>
      <div className='input-box'>
          <label>
          Integration date
          <input
              type="date"
              name="date"
              placeholder='select'
              onChange={handleInputChange}
            />
          </label>
      </div>
      <div className='input-box'>
          <label>
          ERP Date (Agreed)
          <input
              type="date"
              name="date"
              placeholder='select'
              onChange={handleInputChange}
            />
          </label>
      </div>
      <div className='input-box'>
          <label>
          ISP Date (Agreed)
          <input
              type="date"
              name="date"
              placeholder='select'
              onChange={handleInputChange}
            />
          </label>
      </div>
      <div className='input-box'>
          <label>
          Active AI Time
          <input
              type="date"
              name="date"
              placeholder='select'
              onChange={handleInputChange}
            />
          </label>
      </div>
      <div className='input-box'>
          <label>
          Active AI QC Time
          <input
              type="date"
              name="date"
              placeholder='select'
              onChange={handleInputChange}
            />
          </label>
          <span className='checkbox'><input checked type='checkbox' /><span>Monthly Cycles</span></span>
      </div>
      <div className='input-box'>
        <div className='radio-box'>
          <span>ERP Module (N/Y)</span>
          <div className='radio'>
            <input id="s2d" name='ERP' type="checkbox" className="switch"/>
            <label></label>
          </div>
        </div>
      </div>
      <div className='input-box'>
        <div className='radio-box active'>
          <span>AI Format (N/Y)</span>
          <div className='radio'>
            <input id="s2d" name='AI' checked type="checkbox" className="switch"/>
            <label></label>
          </div>
        </div>
      </div>
      </div>
    </form>
  );
};

export default MyForm;
