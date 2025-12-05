function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Ready to book our services or have questions? We'd love to hear from you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">contact@dogsitting.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📱</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Serving the greater metropolitan area</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your pet care needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
