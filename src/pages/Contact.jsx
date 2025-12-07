import ContactForm from '../components/ContactForm';

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
              Interested in joining our book club or have questions? We'd love to hear from you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">contact@bookclub.com</p>
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
                  <p className="text-gray-600">Meetings at local library and online</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
