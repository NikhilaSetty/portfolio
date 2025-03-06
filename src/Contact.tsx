import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with EmailJS Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with EmailJS Public Key
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => setStatus('Failed to send message. Try again.'));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            <textarea 
              name="message" 
              rows={4} 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-4 text-green-400">{status}</p>}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
