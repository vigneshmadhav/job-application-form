import { useState } from "react";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    skills: [],
    jobRole: "",
    resume: null,
    coverLetter: "",
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
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.jobRole) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Submitted Job Application:", formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" name="name" onChange={handleChange} />
        <br /><br />

        <label>Email*</label>
        <input type="email" name="email" onChange={handleChange} />
        <br /><br />

        <label>Phone</label>
        <input type="tel" name="phone" onChange={handleChange} />
        <br /><br />

        <label>Gender</label><br />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
        <br /><br />

        <label>Skills</label><br />
        <input type="checkbox" name="skills" value="React" onChange={handleChange} /> React
        <input type="checkbox" name="skills" value="Node" onChange={handleChange} /> Node
        <input type="checkbox" name="skills" value="Python" onChange={handleChange} /> Python
        <br /><br />

        <label>Job Role*</label>
        <select name="jobRole" onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>
        <br /><br />

        <label>Upload Resume</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} />
        <br /><br />

        <label>Cover Letter</label><br />
        <textarea name="coverLetter" onChange={handleChange}></textarea>
        <br /><br />

        <button type="submit">Submit Application</button>
      </form>

      {/* Preview */}
      {formData.name && (
        <div style={{ marginTop: "20px", borderTop: "1px solid gray", paddingTop: "10px" }}>
          <h3>Preview:</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Skills:</strong> {formData.skills.join(", ")}</p>
          <p><strong>Job Role:</strong> {formData.jobRole}</p>
          <p><strong>Cover Letter:</strong> {formData.coverLetter}</p>
          <p><strong>Resume:</strong> {formData.resume?.name}</p>
        </div>
      )}
    </div>
  );
}

export default JobApplicationForm;