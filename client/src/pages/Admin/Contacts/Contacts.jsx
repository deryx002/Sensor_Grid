import { useEffect, useState } from "react";
import { Eye, Trash2, Search } from "lucide-react";
import toast from "react-hot-toast";

import "./Contacts.css";
import ContactDetailsModal from "./ContactDetailsModal";

import {
  getAllContacts,
  deleteContact,
} from "../../../services/contactService.js";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactId, setSelectedContactId] =
    useState(null);

  const loadContacts = async () => {
    try {
      setLoading(true);

      const response = await getAllContacts();

      setContacts(response.data);
      setFilteredContacts(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter(
      (contact) =>
        contact.fullName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        contact.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(filtered);
  }, [contacts, searchTerm]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this inquiry?"
    );

    if (!confirmed) return;

    try {
      const response = await deleteContact(id);

      toast.success(response.message);

      loadContacts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete inquiry.");
    }
  };

  if (loading) {
    return (
      <div className="contacts-page">
        <h2>Loading contacts...</h2>
      </div>
    );
  }

  return (
    <>
      <section className="contacts-page">
        <div className="contacts-header">
          <h1>Contact Management</h1>

          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>
        </div>

        {filteredContacts.length === 0 ? (
          <div className="empty-state">
            No contact inquiries found.
          </div>
        ) : (
          <div className="contacts-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredContacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.fullName}</td>

                    <td>{contact.email}</td>

                    <td>{contact.category}</td>

                    <td>
                      <span
                        className={`status ${contact.status
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                      >
                        {contact.status}
                      </span>
                    </td>

                    <td>
                      {new Date(
                        contact.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td>
                      <button
                        className="action-btn view-btn"
                        title="View"
                        onClick={() =>
                          setSelectedContactId(
                            contact._id
                          )
                        }
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="action-btn delete-btn"
                        title="Delete"
                        onClick={() =>
                          handleDelete(contact._id)
                        }
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {selectedContactId && (
        <ContactDetailsModal
          contactId={selectedContactId}
          onClose={() =>
            setSelectedContactId(null)
          }
          onUpdated={loadContacts}
        />
      )}
    </>
  );
};

export default Contacts;