export const convertEmailToUserName = (email) => {
  const emailParts = email.split("@");
  const userName = emailParts[0].replace(/[^a-zA-Z0-9]/g, "");
  return userName;
};
