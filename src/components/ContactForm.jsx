import { useState } from 'react';

// Constants for validation
const MAX_MESSAGE_LENGTH = 500;
const MIN_MESSAGE_LENGTH = 10;

function ContactForm() {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // State variable for form submission status
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  // State variables for validation errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation regex (optional - supports various formats)
  const validatePhone = (phone) => {
    // Simplified phone validation - accepts 10+ digits with optional formatting
    // Examples: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  // Message validation (min 10 characters, max 500 characters)
  const validateMessage = (message) => {
    const trimmedMessage = message.trim();
    return trimmedMessage.length >= MIN_MESSAGE_LENGTH && trimmedMessage.length <= MAX_MESSAGE_LENGTH;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    let isValid = true;

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation (optional field)
    if (phone.trim() && !validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (!validateMessage(message)) {
      if (message.trim().length < MIN_MESSAGE_LENGTH) {
        newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
      } else {
        newErrors.message = `Message must not exceed ${MAX_MESSAGE_LENGTH} characters`;
      }
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Perform all client-side validations
    if (!validateForm()) {
      return;
    }

    // Update submit button state
    setStatus('submitting');

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success
      // In a real application, you would make an API call here:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, phone, message })
      // });

      // Display success message
      setStatus('success');

      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      // Display error message
      console.error('Form submission error:', error);
      setStatus('error');

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
      
      {/* Success message */}
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ✓ Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            ✗ Something went wrong. Please try again.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your name"
            disabled={status === 'submitting'}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email input field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
            disabled={status === 'submitting'}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone Number input field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-gray-400 text-xs">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
            disabled={status === 'submitting'}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Message textarea */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
            <span className="text-gray-400 text-xs ml-2">
              ({message.length}/{MAX_MESSAGE_LENGTH} characters, min {MIN_MESSAGE_LENGTH})
            </span>
          </label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your reading interests..."
            disabled={status === 'submitting'}
            maxLength={MAX_MESSAGE_LENGTH}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            status === 'submitting'
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
