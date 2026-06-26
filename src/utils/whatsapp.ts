const WHATSAPP_NUMBER = "233546376114";

export const buildClassBookingMessage = (
  className: string,
  day: string,
  time: string
): string => {
  const message = `Hi! I'd like to book a spot for the *${className}* class on ${day} at ${time}. Is there still availability?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const buildMembershipEnquiryMessage = (tierName: string): string => {
  const message = `Hi! I'm interested in the *${tierName}* membership at Chairman Fitness Centre. Could you walk me through how to sign up?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const buildGeneralEnquiryMessage = (): string => {
  const message = `Hi! I'm interested in joining Chairman Fitness Centre. Could you tell me more about your membership options?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};