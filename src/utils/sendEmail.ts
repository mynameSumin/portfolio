export const sendEmail = async (email: string, message: string) => {
    const response = await fetch("https://labour-giraffe-mynamesumin-06488ff0.koyeb.app/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });
  
    if (!response.ok) {
      throw new Error("이메일 전송 실패");
    }
    return await response.text();
  };