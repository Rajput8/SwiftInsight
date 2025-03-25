/**
 * Validates a contact form submission
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Object containing validation errors (if any)
 */
export const validateForm = (formData) => {
  const errors = {};
  
  // Validate name
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  // Validate email
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate subject
  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required';
  }
  
  // Validate message
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};

/**
 * Checks if an email address is valid
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
const isValidEmail = (email) => {
  // Basic email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
