"use client";
import { motion } from "framer-motion";
// import { Resend } from "resend";

export default function ContactSection() {
  // const resend = new Resend("re_W9scK32n_9EkQdiqtE8AxH9PHE8uM4Dcg");
  // const sendMain = async () => {
  //   const res = await fetch("/api/sendmail", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: "vishal.skv.21@gmail.com",
  //       subject: "Test mail",
  //       message: "Welcome to our platform!",
  //     }),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // };

  // re_W9scK32n_9EkQdiqtE8AxH9PHE8uM4Dcg
  return (
    <section className="py-20  text-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind? Let’s talk.
        </motion.p>

        <motion.form
          className="bg-gray-800 shadow-md rounded-xl p-6 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // onSubmit={(e) => {
          //   sendMain();
          // }}
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
