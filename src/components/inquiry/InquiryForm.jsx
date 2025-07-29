import React, { useState } from 'react';
import styles from './InquiryForm.module.css';
import Inquiryimage from '../../assets/images/inquiryimage.png';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.firstName.trim(),
      email: formData.email.trim(),
      user_input: formData.message.trim(),
    };

    try {
      // Step 1: Submit query data
      const response = await fetch("http://localhost:8000/query/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit query");
      }

      const result = await response.json();
      const queryId = result.id;

      console.log("Query submitted with ID:", queryId);

      // Step 2: If file exists, upload it
      if (formData.file) {
        const formDataToUpload = new FormData();
        formDataToUpload.append("query_id", queryId);
        formDataToUpload.append("file", formData.file);

        const uploadResponse = await fetch("http://localhost:8000/query/upload/", {
          method: "POST",
          body: formDataToUpload,
        });

        if (!uploadResponse.ok) {
          throw new Error("File upload failed");
        }

        console.log("File uploaded successfully");
      }

      alert("Inquiry submitted successfully!");
      setFormData({
        firstName: '',
        email: '',
        message: '',
        file: null,
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.inquirySection}>
      <h2 className={styles.heading}>HAVE SOME QUESTIONS?</h2>

      <div className={styles.inquiryContainer}>
        <div className={styles.leftPanel}>
          <img src={Inquiryimage} alt="Inquiry" className={styles.image} />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="What's your email?"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your questions..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            accept=".pdf,.doc,.jpg,.png"
            onChange={handleFileChange}
            className={styles.uploadInput}
          />

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
