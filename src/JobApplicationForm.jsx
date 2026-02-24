import { useState } from "react";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    country: "",
    resume: null,
    about: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }));
    } else if (type === "file") {
      setFormData(prev => ({
        ...prev,
        resume: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br /><br />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <br /><br />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <br /><br />

        <label>Gender:</label><br />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <br /><br />

        <label>Skills:</label><br />
        <input type="checkbox" value="React" onChange={handleChange} /> React
        <input type="checkbox" value="Node" onChange={handleChange} /> Node
        <input type="checkbox" value="MongoDB" onChange={handleChange} /> MongoDB
        <br /><br />

        <label>Country:</label>
        <select name="country" onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <br /><br />

        <label>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleChange} />
        <br /><br />

        <label>About You:</label><br />
        <textarea name="about" onChange={handleChange}></textarea>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JobApplicationForm;