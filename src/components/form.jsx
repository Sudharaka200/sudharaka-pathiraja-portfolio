import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qzc1roh', 'template_iw08hcn', form.current, 'mvMyI_PEVTbNx53yW')
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          toast.success("Message sent successfully!");
          e.target.reset(); // optional: clear the form on success
        },
        (error) => {
          console.error('Error:', error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto w-full max-w-screen-xl px-4 py-16"
      >
        <h1 className="text-4xl font-bold text-gray-900">Send Message</h1>
        <br />

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
              First & Last Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="from_name"
                type="text"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="from_email"
                type="email"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
              Subject
            </label>
            <div className="mt-2.5">
              <input
                id="subject"
                name="from_subject"
                type="text"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                placeholder="Subject of your message"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                placeholder="Write your message here..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Toast container to show notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Form;
