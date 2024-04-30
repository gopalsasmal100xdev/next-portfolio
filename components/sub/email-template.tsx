import * as React from "react";

export interface EmailTemplateProps {
  fullname: string;
  email: string;
  message: string;
  userIp: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
  email,
  message,
  userIp,
}) => (
  <div>
    <h1>{fullname} Send Message!📨</h1>
    <h3>{fullname}</h3>
    <h2>Please contact: {email}</h2>
    <h2>{userIp}</h2>
    <h3>{message}</h3>
  </div>
);

export default EmailTemplate;
