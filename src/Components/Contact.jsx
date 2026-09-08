import React from 'react'

function Contact() {
  const phoneNumber = '2349029324155'
  const email = 'winnersamuel065@gmail.com'

  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-200 min-h-screen px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-400 text-lg">
            Have a project or opportunity in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto bg-slate-950 rounded-2xl p-8 md:p-12 text-center">

          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Let's Connect
          </h2>

          <p className="text-gray-400 mb-10 leading-7">
            I'm open to opportunities, collaborations, and interesting
            projects. Choose your preferred way to reach me.
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 transition p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                WhatsApp
              </h3>

              <p className="text-green-50">
                Chat with me directly
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="bg-blue-500 hover:bg-blue-600 transition p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Email
              </h3>

              <p className="text-blue-50">
                Send me an email
              </p>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
