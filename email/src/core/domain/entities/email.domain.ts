/**
 *<p>Email Domain.</p>
 *
 * @author KAKOU AKrou Cedric
 */
interface EmailDomain {
  id: string;
  title: string;
  subject: string;
  body: string;
  to: string;
  cc: string[];
  attachment: string[];
}
