export interface SenMailData {
  subject: string;
  body: string;
};

export interface MailAdapter {
  sendMail: (data: SenMailData) => Promise<void>;
};
