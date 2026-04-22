import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта на почту владельца."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "—")
    phone = body.get("phone", "—")
    service = body.get("service", "—")
    comment = body.get("comment", "—")

    to_email = "evgeny2332@yandex.ru"
    from_email = os.environ["EMAIL_FROM"]
    password = os.environ["EMAIL_PASSWORD"]

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; border: 1px solid #f0d9c0; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg,#9a4f1a,#c8763d); padding: 24px 28px;">
        <h2 style="margin:0; color:#fff; font-size:20px;">Новая заявка с сайта МастерОтделка</h2>
      </div>
      <div style="padding: 28px; background:#fdf8f3;">
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:8px 0; color:#8a6a50; font-size:13px; width:120px;">Имя</td>
              <td style="padding:8px 0; font-weight:600; color:#3d2010;">{name}</td></tr>
          <tr><td style="padding:8px 0; color:#8a6a50; font-size:13px;">Телефон</td>
              <td style="padding:8px 0; font-weight:600; color:#3d2010;">{phone}</td></tr>
          <tr><td style="padding:8px 0; color:#8a6a50; font-size:13px;">Услуга</td>
              <td style="padding:8px 0; font-weight:600; color:#3d2010;">{service}</td></tr>
          <tr><td style="padding:8px 0; color:#8a6a50; font-size:13px; vertical-align:top;">Комментарий</td>
              <td style="padding:8px 0; color:#3d2010;">{comment}</td></tr>
        </table>
        <div style="margin-top:20px; padding:14px 18px; background:#fff3e8; border-radius:8px; border-left:4px solid #e8721a;">
          <p style="margin:0; font-size:13px; color:#8a6a50;">Перезвоните клиенту как можно скорее!</p>
        </div>
      </div>
    </div>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Заявка от {name} — {service}"
    msg["From"] = from_email
    msg["To"] = to_email
    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login(from_email, password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True}),
    }
