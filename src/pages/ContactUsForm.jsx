import React from "react";

const ContactUsForm = () => {
  return (
    <div>
      <div>
        <div className="text-center mb-7">
          <h2 className="text-2xl text-blue-400 mb-6">Get started now</h2>
          <h1 className="font-bold text-white text-4xl">
            Send Us a Message 💬
          </h1>
        </div>

        <div>
          <div>
            <form action="#">
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-4 items-center">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your name
                  </label>
                  <input
                    id="name"
                    className="p-2 w-full text-white rounded-lg border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your email
                  </label>
                  <input
                    id="email"
                    className="p-2 w-full text-white rounded-lg border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your contact number
                  </label>
                  <input
                    id="number"
                    className="p-2 w-full text-white rounded-lg border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                  className="block w-full text-white p-3.5 text-sm rounded-lg border-none dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Write message here..."
                ></textarea>
              </div>

              <div className=" p-3">
                <button class="bg-gradient-to-r font-bold  from-fuchsia-500 to-cyan-500 border-none rounded-xl text-white py-3 px-8 text-center   transition duration-300 hover: hover:text-white">
                  Button
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
