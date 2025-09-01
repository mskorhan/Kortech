// Email obfuscation utilities to protect against spam harvesters

export const obfuscateEmail = (email: string): string => {
  return email
    .replace('@', '&#64;')
    .replace(/\./g, '&#46;');
};

export const createMailtoLink = (email: string, subject?: string, body?: string): string => {
  const obfuscatedEmail = obfuscateEmail(email);
  let href = `mailto:${obfuscatedEmail}`;
  
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  if (queryString) {
    href += `?${queryString}`;
  }
  
  return href;
};

export const renderObfuscatedEmail = (email: string): string => {
  return obfuscateEmail(email);
};