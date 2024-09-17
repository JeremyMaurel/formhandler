export default async function isCaptchaOk(request, response) {
  const recaptchaResponse = request.body.recaptchaResponse;

  const secretKey = process.env.SECRET_CAPTCHA_KEY;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

  const recaptchaValidation = await fetch(verificationURL, { method: "POST" });
  const recaptchaResult = await recaptchaValidation.json();

  if (!recaptchaResult.success) {
    return false;
  }
  return true;
}
