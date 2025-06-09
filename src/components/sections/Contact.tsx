'use client';

import { useState, FormEvent } from 'react';
import Section from '@/components/ui/Section';
import { CONTACT_INFO } from '@/constants';
import { colors } from '@/styles/colors';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // TODO: Implement actual form submission
    setFormStatus({
      message: 'Thank you for your enquiry! We will get back to you soon.',
      type: 'success',
    });

    form.reset();
    setTimeout(() => {
      setFormStatus({ message: '', type: null });
    }, 5000);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="We'd love to hear from you. Live at a place styled with 'Palm-Ness'!"
    >
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primaryBrown }}
            >
              Contact Details:
            </h3>
            <p><strong>Phone:</strong> {CONTACT_INFO.phone}</p>
            <p><strong>Email:</strong> {CONTACT_INFO.email}</p>
            <p>
              <strong>Website:</strong>{' '}
              <a
                href={`http://${CONTACT_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: colors.accentGreen }}
              >
                {CONTACT_INFO.website}
              </a>
            </p>
            <p><strong>Office Address:</strong> {CONTACT_INFO.officeAddress}</p>
          </div>
          <div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primaryBrown }}
            >
              Site Address:
            </h3>
            <p>{CONTACT_INFO.siteAddress}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="name" 
              className="block font-medium mb-1"
              style={{ color: colors.primaryBrown }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green"
              required
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block font-medium mb-1"
              style={{ color: colors.primaryBrown }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green"
              required
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="phone" 
              className="block font-medium mb-1"
              style={{ color: colors.primaryBrown }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="message" 
              className="block font-medium mb-1"
              style={{ color: colors.primaryBrown }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full font-bold py-3 px-6 rounded-lg text-white hover:bg-opacity-80 transition duration-300"
            style={{ backgroundColor: colors.accentGreen }}
          >
            Send Enquiry
          </button>
        </form>

        {formStatus.message && (
          <p
            className={`mt-4 text-center ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
          >
            {formStatus.message}
          </p>
        )}
      </div>
    </Section>
  );
}