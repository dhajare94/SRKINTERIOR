import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light text-neutral-800 mb-12">Get in Touch</h1>
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-light text-neutral-800 mb-2">Email</h3>
              <p className="text-neutral-600">info@srkinterior.com</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-neutral-800 mb-2">Phone</h3>
              <p className="text-neutral-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-neutral-800 mb-2">Address</h3>
              <p className="text-neutral-600">123 Design Street<br />Creative City, ST 12345</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-neutral-800 mb-2">Hours</h3>
              <p className="text-neutral-600">Mon - Fri: 9am - 6pm<br />Sat - Sun: By appointment</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-neutral-600 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-neutral-600 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-900 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;