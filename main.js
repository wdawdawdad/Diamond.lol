import { Clerk } from "@clerk/clerk-js";

// Get your Clerk publishable key from the Clerk dashboard
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // This assumes you are using Vite with environment variables
const clerk = new Clerk(clerkPubKey);

// Load Clerk and setup authentication UI
window.addEventListener('DOMContentLoaded', async () => {
  // Initialize Clerk
  await clerk.load();

  // Reference to the 'Get Started' button
  const getStartedButton = document.getElementById('get-started-btn');
  
  // Add event listener for the button click
  getStartedButton.addEventListener('click', () => {
    const authContainer = document.getElementById('auth-container');
    
    // If user is already signed in, show user button, else show sign-in form
    if (clerk.user) {
      authContainer.innerHTML = '<div id="user-button"></div>';
      clerk.mountUserButton(document.getElementById('user-button')); // Display user button
    } else {
      authContainer.innerHTML = '<div id="sign-in"></div>';
      clerk.mountSignIn(document.getElementById('sign-in')); // Display sign-in UI
    }
  });
});
