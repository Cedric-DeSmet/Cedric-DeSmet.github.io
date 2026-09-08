export function createEmailDraft(name: string, email: string, message: string) {
  const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
  return `mailto:unenlightened690@gmail.com?subject=Website%20project%20enquiry&body=${encodeURIComponent(body)}`;
}
