
# Mini Lab Store (Full - friend-like)

This is a React + Vite + Tailwind frontend project structured to match your friend's project layout.
Includes many components (Hero, AboutSection, ContactSection, LoginPage, PaymentModal, SuccessModal, etc.)
Razorpay Checkout (frontend/test) is integrated and your provided test key is pre-filled in the .env file.

How to run:
1. Extract the zip.
2. Open project folder in terminal.
3. Run:
   npm install
   npm run dev
4. Open the local URL printed by Vite (usually http://localhost:5173)

Razorpay:
- The test key ID is set in .env (VITE_RAZORPAY_KEY). No secret is included.
- This demo uses client-side Checkout (for proper production use, create orders server-side).
