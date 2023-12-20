// netlify/functions/submitForm.js

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  // Process the form data (you can use PHP-like logic here)
  const firstName = data.first_name;
  const lastName = data.last_name;
  const course = data.course;
  const phone = data.phone;
  const message = data.message;

  // Perform any other processing or validation as needed

  // Return a response (Netlify expects a JSON response)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission successful" }),
  };
};
