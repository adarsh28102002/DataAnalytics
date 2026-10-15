import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      type: 'success',
      name: formData.name
    });

    const mailtoLink = `mailto:adarshsinghas2020@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Analytics Opportunity Inquiry'
    )}&body=${encodeURIComponent(
      `Hi Adarsh,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-envelope-open-text"></i> Get In Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">Interested in discussing a data analyst role, consulting on reporting automation, or building a Power BI dashboard?</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Contact Information</h3>
              <p>Direct communication channels. Feel free to copy or click to connect instantly.</p>
            </div>

            <div className="contact-methods">
              {/* Email */}
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div className="contact-lbl">Email Address</div>
                  <a href="mailto:adarshsinghas2020@gmail.com" className="contact-val">adarshsinghas2020@gmail.com</a>
                </div>
                <button 
                  className="btn btn-outline btn-sm" 
                  onClick={() => handleCopy('adarshsinghas2020@gmail.com', 'email')}
                  title="Copy Email"
                >
                  <i className={copiedKey === 'email' ? 'fas fa-check' : 'fas fa-copy'}></i>
                  {copiedKey === 'email' && <span style={{ marginLeft: '4px' }}>Copied!</span>}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div className="contact-lbl">Direct Phone & WhatsApp</div>
                  <a href="tel:+916354441918" className="contact-val">+91 6354441918</a>
                </div>
                <button 
                  className="btn btn-outline btn-sm" 
                  onClick={() => handleCopy('+916354441918', 'phone')}
                  title="Copy Phone Number"
                >
                  <i className={copiedKey === 'phone' ? 'fas fa-check' : 'fas fa-copy'}></i>
                  {copiedKey === 'phone' && <span style={{ marginLeft: '4px' }}>Copied!</span>}
                </button>
              </div>

              {/* Location */}
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div className="contact-lbl">Location</div>
                  <div className="contact-val">Surat, Gujarat, India (Adajan / Kadodara)</div>
                </div>
                <span className="badge badge-emerald">Onsite / Remote</span>
              </div>
            </div>

            <div>
              <div className="contact-lbl" style={{ marginBottom: '12px' }}>Social & Code Profiles</div>
              <div className="social-links-row">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn Profile">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/adarsh28102002" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub Repositories">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:adarshsinghas2020@gmail.com" className="social-btn" title="Send Email Direct">
                  <i className="fas fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Send a Direct Message</h3>
              <p>Fill out the form below to stage an email inquiry directly to Adarsh.</p>
            </div>

            {formStatus && (
              <div className="form-status success" style={{ display: 'block' }}>
                <strong><i className="fas fa-check-circle"></i> Thank you, {formStatus.name}!</strong><br />
                Your message has been staged. Dispatching to <strong>adarshsinghas2020@gmail.com</strong>...
              </div>
            )}

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="senderName" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="senderName" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="e.g. Rahul Sharma" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderEmail" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="senderEmail" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="e.g. rahul@company.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderSubject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="senderSubject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="e.g. Data Analyst Role / Dashboard Inquiry" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderMessage" className="form-label">Message Details</label>
                <textarea 
                  id="senderMessage" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea" 
                  placeholder="Describe the role, project requirements, or opportunity..." 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" id="sendMessageBtn">
                <i className="fas fa-paper-plane"></i>
                <span>Dispatch Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
