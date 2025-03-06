import { motion } from 'framer-motion';
import { Github, Linkedin, LucideMail, Download } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Naralasetty Nikhila
          </motion.h1>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#about" className="hover:text-purple-200">About</a>
            <a href="#experience" className="hover:text-purple-200">Experience</a>
            <a href="#projects" className="hover:text-purple-200">Projects</a>
            <a href="#contact" className="hover:text-purple-200">Contact</a>
          </motion.div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <motion.h2 
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Cybersecurity & Digital Forensics Graduate Student | QA Automation Experience
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Driven to solve complex technical challenges, with a focus on cybersecurity and web application development. Leveraging my QA background and MTech studies to create secure and efficient solutions across various technical roles.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a href="/Nikhila Naralasetty Resume.pdf" className="flex items-center gap-2 bg-white text-purple-700 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                <Download size={20} />
                Download Resume
              </a>
            
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-purple-100"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="/Photo.jpg" 
                alt="Naralasetty Nikhila" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-lg mb-6">
                A highly motivated professional with 1.6 years of experience as a QA Automation Engineer, providing a strong foundation in software development lifecycles and testing methodologies. Currently expanding my expertise through an MTech in Cybersecurity and Digital Forensics, I possess a deep understanding of security principles, vulnerability assessment, and digital investigation techniques. My background in QA has instilled a meticulous approach to problem-solving and a keen eye for detail, crucial for both security analysis and web application development. I am eager to leverage my combined experience to contribute to building secure and robust web applications, applying my knowledge of both offensive and defensive security practices.
              </p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <a href="https://github.com/NikhilaSetty" className="text-gray-600 hover:text-purple-700">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/naralasetty-nikhila/" className="text-gray-600 hover:text-purple-700">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:naralasettynikhila@gmail.com" className="text-gray-600 hover:text-purple-700">
                  <LucideMail size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Experience & Education
          </motion.h2>
          <div className="space-y-8">
            <motion.div 
              className="border-l-4 border-purple-600 pl-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-bold">MTech - KL University</h3>
              <p className="text-gray-600">2024 - 2026</p>
              <p className="mt-4">Pursuing Masters in Technology with focus on Cybersecurity and Digital Forensics</p>
            </motion.div>
            <motion.div 
              className="border-l-4 border-purple-600 pl-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold">QA Automation Test Engineer - Nagarro</h3>
              <p className="text-gray-600">July 2022 - December 2023</p>
              <ul className="mt-4 list-disc list-inside text-gray-700">
                <li>Demonstrated Proficiency in Both Manual and Automation testing Methodologies</li>
                <li>Developed and maintained automated test suites using Selenium and TestNG</li>
                <li>Performed security testing and vulnerability assessments</li>
                <li>Reduced manual testing effort by 60% through test automation</li>
              </ul>
            </motion.div>
            <motion.div 
              className="border-l-4 border-purple-600 pl-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold">BTech - Seshadri Rao Gudlavalleru Engineering College</h3>
              <p className="text-gray-600">2018 - 2022</p>
              <p className="mt-4">Bachelor's in Technology with focus on Computer Science and Engineering</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Flipkart Selenium Automation"
              description="End-to-end testing framework using Selenium WebDriver for Flipkart's web application"
              details="A comprehensive automated testing suite built with Selenium WebDriver and TestNG framework. Features include automated test cases for product search, cart management, user authentication, and checkout processes. Implemented Page Object Model design pattern and data-driven testing approaches."
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
              link="http://github.com/NikhilaSetty/FlipkartSeleniumAutomation"
            />
            <ProjectCard 
              title="Food Delivery Website"
              description="Full-stack food delivery platform with modern UI/UX"
              details="A responsive food delivery website built with modern web technologies. Features include user authentication, shopping cart functionality and secure payment integration. Implemented using React.js for the frontend and Node.js for the backend."
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800"
              link="https://github.com/NikhilaSetty/Food-Del-Website"
            />
            <ProjectCard 
              title="Credit Card Protection"
              description="Security system for credit card fraud detection"
              details="An advanced security system designed to protect credit card transactions from fraudulent activities. Utilizes machine learning algorithms for pattern recognition and anomaly detection. Implements real-time monitoring and alert systems for suspicious activities."
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800"
              link="https://github.com/NikhilaSetty/Credit-Card-Protection"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard title="Selenium WebDriver" level={80} />
            <SkillCard title="Java" level={85} />
            <SkillCard title="BDD Cucumber" level={80} />
            <SkillCard title="SQL" level={70} />
            <SkillCard title="Cyber Security" level={85} />
            <SkillCard title="React JS" level={70} />
            <SkillCard title="Git" level={80} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <div className="flex justify-center sm:justify-end"></div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Naralasetty Nikhila. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;