// api.js
const API_URL = process.env.REACT_APP_API_URL;

export const sendOTP = async (phone) => {
  const response = await fetch(`${API_URL}/auth/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phoneNumber: phone }),
  });
  return await response.json();
};

export const verifyOTP = async (verificationId, otp) => {
  const response = await fetch(`${API_URL}/auth/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ verificationId, otp }),
  });
  return await response.json();
};

export const fetchLayout = async (userId) => {
  const response = await fetch(`${API_URL}/layout/get-layout/${userId}`);
  const data = await response.json();
  return data.layout;
};

export const saveLayout = async (userId, layout) => {
  const response = await fetch(`${API_URL}/layout/save-layout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, layout }),
  });
  return await response.json();
};
