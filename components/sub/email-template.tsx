import * as React from "react";

export interface EmailTemplateProps {
  fullname: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
  email,
  message,
}) => (
  <div>
    <h1>{fullname} Send Message!📨</h1>
    <h2>Please contact: {email}</h2>
    <h3>{message}</h3>
  </div>
);

export default EmailTemplate;
