import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

import "./Contact.css";
import { submitContactForm } from "../../../services/contactService.js";

import {
  contactInfo,
  categories,
  projectTypes,
} from "./contactData";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Clock,
};

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  schoolCollege: "",
  category: "",
  projectType: "",
  projectDescription: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await submitContactForm(formData);

      toast.success(response.message);

      setFormData(initialState);
    } catch (error) {
      console.error(error);

      if (error.response?.data?.errors) {
        error.response.data.errors.forEach((err) => {
          toast.error(err.msg);
        });
      } else {
        toast.error(
          error.response?.data?.message ||
            "Something went wrong."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="container">

        {/* Hero */}

        <div className="contact-hero">
          <span className="section-badge">
            Contact SensorGrid
          </span>

          <h1>Let's Build Something Amazing Together</h1>

          <p>
            Tell us about your project and we'll get
            back to you with the best solution for
            your requirements.
          </p>
        </div>

        {/* Content */}

        <div className="contact-wrapper">

          {/* Contact Info */}

          <div className="contact-info">
            {contactInfo.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  className="info-card glass"
                  key={item.title}
                >
                  <div className="info-icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}

          <form
            className="contact-form glass"
            onSubmit={handleSubmit}
          >
            <div className="form-grid">

              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone *</label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>School / College *</label>

                <input
                  type="text"
                  name="schoolCollege"
                  placeholder="Enter your institute"
                  value={formData.schoolCollege}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category *</label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Category
                  </option>

                  {categories.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Project Type *</label>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Project Type
                  </option>

                  {projectTypes.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div className="form-group">
              <label>Project Description *</label>

              <textarea
                rows="7"
                name="projectDescription"
                placeholder="Describe your project requirements..."
                value={formData.projectDescription}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="btn-primary submit-btn"
              type="submit"
              disabled={loading}
            >
              <Send size={18} />

              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;