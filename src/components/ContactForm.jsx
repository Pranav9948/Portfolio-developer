import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yno5t0n", "template_vpfwe9i", form.current, {
        publicKey: "8EF3R8OF5tADf12UZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("mail send successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <div className=" bg-[#242424] py-10 border-b border-gray-600 my-10">
      <div className="section-container flex   flex-col px-5 mobile:px-10 gap-5 smallDekstop:flex-row smallDekstop:justify-around smallDekstop:items-center smallDekstop:px-0  w-full  ">
        <div>
          <h2 className="text-center text-white text-2xl smallTablet:text-3xl smallDekstop:text-4xl font-bold mb-6 smallTablet:mb-12 font-serif uppercase hover:text-[#4EE1A0] hover:duration-400 hover:scale-110 hover:transition-all tracking-wider smallDekstop:text-start">
            Contact Me
          </h2>

          <p className="text-[#D9D9D9] mx-auto text-center font-sans font-medium text-sm smallTablet:text-base smallTablet:max-w-md smallDekstop:text-lg smallDekstop:text-start">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="smallDekstop:w-1/3">
          <section class="  w-full ">
            <div class="py-8  w-full ">
              <form
                ref={form}
                onSubmit={sendEmail}
                class="space-y-8 w-full max-w-md mx-auto smallDekstop:max-w-full smallDekstop:mx-0 "
              >
                <div className="w-full ">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="please enter your name"
                    required
                    name="user_name"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@gmail.com"
                    required
                    name="user_email"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                    name="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  <a
                    href="#_"
                    class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 w-full"
                  >
                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span class="relative">send Message</span>
                  </a>
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
