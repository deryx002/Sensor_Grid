import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import {
  getContactById,
  updateContactStatus,
} from "../../../services/contactService.js";

const statusOptions = [
  "New",
  "Contacted",
  "In Progress",
  "Completed",
];

const ContactDetailsModal = ({
  contactId,
  onClose,
  onUpdated,
}) => {
  const [contact, setContact] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadContact = async () => {
      try {
        setLoading(true);

        const response = await getContactById(contactId);

        setContact(response.data);
        setStatus(response.data.status);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load contact.");
      } finally {
        setLoading(false);
      }
    };

    if (contactId) {
      loadContact();
    }
  }, [contactId]);

  const handleSave = async () => {
    try {
      setSaving(true);

      const response = await updateContactStatus(
        contactId,
        status
      );

      toast.success(response.message);

      onUpdated();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status.");
    } finally {
      setSaving(false);
    }
  };

  if (!contact) return null;

  return (
    <div className="modal-overlay">

      <div className="contact-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <h2>Contact Details</h2>

            <div className="detail-row">
              <strong>Name</strong>
              <span>{contact.fullName}</span>
            </div>

            <div className="detail-row">
              <strong>Email</strong>
              <span>{contact.email}</span>
            </div>

            <div className="detail-row">
              <strong>Phone</strong>
              <span>{contact.phone}</span>
            </div>

            <div className="detail-row">
              <strong>School / College</strong>
              <span>{contact.schoolCollege}</span>
            </div>

            <div className="detail-row">
              <strong>Category</strong>
              <span>{contact.category}</span>
            </div>

            <div className="detail-row">
              <strong>Project Type</strong>
              <span>{contact.projectType}</span>
            </div>

            <div className="detail-row">
              <strong>Description</strong>
              <p>{contact.projectDescription}</p>
            </div>

            <div className="detail-row">
              <strong>Status</strong>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
              >
                {statusOptions.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn-primary"
              onClick={handleSave}
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : "Save Status"}
            </button>
          </>
        )}

      </div>

    </div>
  );
};

export default ContactDetailsModal;