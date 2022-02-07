/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { useState } from "react";
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Example() {
  const [disabled, setDisabled] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handler = (event: any) => {

    if (event.target.name === "fullname") {
      setFullname(event.target.value)
    }
    if (event.target.name === "email") {
      setEmail(event.target.value)
    }
    if (event.target.name === "message") {
      setMessage(event.target.value)
      if (event.target.value.length === 0) {
        setDisabled(true)
        return
      }
      setDisabled(false)
    }
  }

  const submit = (event: any) => {
    event.preventDefault();
    setProcessing(true)
    setTimeout(() => {
      setPopUp(true);
      setFullname("");
      setEmail("");
      setMessage("");
      setDisabled(true);
      setProcessing(false);
    }, 10000)
  }

  const closePopUp = () => {
    setPopUp(false);
  }
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Reach us out to get more information about us!
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={handler}
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm border-2 py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-600 outline-none border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handler}
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-600 outline-none border-gray-300 border-2 rounded-md"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={handler}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-600  outline-none border-gray-300 border-2 rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  style={{ opacity: disabled ? "0.6" : "1" }}
                  disabled={disabled}
                  type='submit'
                  onClick={submit}
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  {processing ? "sending" : "submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Popup */}

      {popUp &&
        <div style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 222,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            width: "30%",
            height: 100,
            backgroundColor: "#fff",
            borderRadius: 10

          }}>
            <h1>Data submitted successfully</h1>
            <h5>We will get back to you shortly, Thank you!</h5>
            <button onClick={closePopUp}>Okay</button>
          </div>

        </div>}
    </div>
  )
}



