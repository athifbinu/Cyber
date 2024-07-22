import React from "react";

const ContactUsForm = () => {
  return (
    <div>
      <div>
        <div className="text-center mb-7">
          <h2 className="text-2xl text-blue-400 mb-6">Get started now</h2>
          <h1 className="font-bold text-white text-4xl">
            Send Us a Message 💬{" "}
          </h1>
        </div>

        <div>
          <div>
            <form action="#">
              <div className="grid lg:grid-cols-3 sm:grid-cols-1  mb-4 items-center">
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your name
                  </label>
                  <input
                    className="p-2 text-white rounded-lg border border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your email
                  </label>
                  <input
                    className="p-2 text-white rounded-lg border border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="email"
                    placeholder="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your contact number
                  </label>
                  <input
                    className="p-2 text-white rounded-lg border border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="text"
                    placeholder="number"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block text-white p-3.5 w-full text-sm rounded-lg  border border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Write message here..."
                ></textarea>
              </div>

              <div className="justify-center p-3">
                <button className="p-2 font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
