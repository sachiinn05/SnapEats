const Contact = () => {
  return (
    <div className="contact-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-6">
      
    
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h1>

   
      <p className="text-gray-700 text-lg text-center max-w-xl mb-8">
        Have questions, feedback, or need support?  
        We’d love to hear from you!
      </p>

    
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
        <p className="text-gray-700 mb-4">
          <strong className="text-pink-500">Email:</strong> support@snapfood.com
        </p>
        <p className="text-gray-700 mb-4">
          <strong className="text-pink-500">Phone:</strong> +91 7770007777
        </p>
        <p className="text-gray-700">
          <strong className="text-pink-500">Address:</strong> Snap Food HQ, Noida, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
