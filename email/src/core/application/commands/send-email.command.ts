interface SendEmailCommand {
  title: string;
  subject: string;
  body: string;
  to: string;
  cc: string[];
  attachment: string[];
}
