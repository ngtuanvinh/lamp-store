const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="w-[89%] max-w-[1400px] m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
              <div className="mb-6">
                <h1 className=" text-base font-medium mb-2">Email Address</h1>
                <a
                  className="text-gray-400 text-sm font-medium"
                  href="mailto:support.yourdomain@email.com"
                >
                  support@moonlamps.com
                </a>
              </div>

              <div className="mb-6">
                <h1 className=" text-base font-medium mb-2">Telephone</h1>
                <a
                  className="text-gray-400 text-sm font-medium"
                  href="tel:+(84) 352432105"
                >
                  0352432105
                </a>
              </div>

              <div className="mb-6">
                <h1 className=" text-base font-medium mb-2">Address</h1>
                <h1 className="text-gray-400 text-sm">
                  123 Elon Musk parkway drive Raleigh, NC 12302
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    className="border border-gray-300 text-gray-900 text-sm block w-full px-1 py-3"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="email"
                    className="border border-gray-300 text-gray-900 text-sm block w-full px-1 py-3"
                    placeholder="Your Email"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  className="border border-gray-300 text-gray-900 text-sm block w-full px-1 py-3"
                  placeholder="Subject"
                />
                <textarea
                  placeholder="Your Message"
                  name="comment"
                  rows={3}
                  className="border border-gray-300 text-gray-900 text-sm block w-full px-1 py-3"
                  style={{ resize: "none" }}
                />

                <div className="text-right">
                  <button className="py-4 px-4 rounded-lg uppsercase cursor-pointer bg-primary text-white">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
