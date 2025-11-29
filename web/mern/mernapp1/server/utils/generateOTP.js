import { customAlphabet } from "nanoid"

export const generateOTP = ( digits=6 ) => {
  const nanoid = customAlphabet('0123456789', digits);
  const otp = nanoid();
  return otp;
}