import { useState } from "react";
export const initialFormData = {
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: "",
};
export function MultistepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    e.preventDefault();
    alert("Thankyou for your submission");
    setCurrentStep(1);
    setFormData(initialFormData);
  };
  if (currentStep === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <label>Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (currentStep === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Personal Address</h1>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <label>Address</label>
        <input
          name="address"
          id="address"
          type="text"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />
        <label>City</label>
        <input
          name="city"
          id="city"
          type="text"
          placeholder="Which city do you live in?"
          value={formData.city}
          onChange={handleChange}
        />
        <label>Zipcode</label>
        <input
          name="zipcode"
          id="zipcode"
          type="number"
          placeholder="Please enter your zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />
        <button type="button" onClick={handlePrevStep}>
          Previous
        </button>
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (currentStep === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <table>
          <tbody>
            {Object.keys(formData).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{formData[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
