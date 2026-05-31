const WHATSAPP_NUMBER = "233546376114";

export function buildClassBookingMessage(
  className: string,
  day: string,
  time: string
): string {
  const message = `Hi! I'd like to book a spot for the *${className}* class on *${day}* at *${time}*. Is there availability?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildMembershipEnquiryMessage(tierName: string): string {
  const message = `Hi! I'm interested in the *${tierName}* membership plan. Could you give me more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralEnquiryMessage(): string {
  const message = `Hi! I'd like to find out more about your gym. Could you help me?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}