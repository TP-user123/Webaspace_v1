import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      projectType,
      pages,
      timeline,
      message,
      website,
      estimatedMin,
      estimatedMax,
    } = body;


    /* -----------------------------------------
       HONEYPOT
    ----------------------------------------- */

    if (website) {
      return Response.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    }


    /* -----------------------------------------
       REQUIRED FIELDS
    ----------------------------------------- */

    if (
      !name ||
      !email ||
      !projectType ||
      !pages ||
      !timeline ||
      !message
    ) {
      return Response.json(
        {
          success: false,
          message:
            "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }


    /* -----------------------------------------
       EMAIL VALIDATION
    ----------------------------------------- */

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }


    /* -----------------------------------------
       SMTP
    ----------------------------------------- */

    const transporter =
      nodemailer.createTransport({
        host: process.env.SMTP_HOST,

        port: Number(
          process.env.SMTP_PORT
        ),

        secure:
          process.env.SMTP_SECURE === "true",

        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });


    /* -----------------------------------------
       ESTIMATED PRICE
    ----------------------------------------- */

    const estimatedPrice =
      estimatedMin && estimatedMax
        ? `₹${Number(
            estimatedMin
          ).toLocaleString("en-IN")} – ₹${Number(
            estimatedMax
          ).toLocaleString("en-IN")}`
        : "Not calculated";


    /* -----------------------------------------
       SEND EMAIL
    ----------------------------------------- */

    await transporter.sendMail({

      from:
        `"WebaSpace Website" <${process.env.SMTP_USER}>`,

      to:
        process.env.CONTACT_EMAIL,

      replyTo:
        email,

      subject:
        `New WebaSpace Inquiry — ${projectType}`,

      text: `
New WebaSpace Project Inquiry

================================

CUSTOMER DETAILS

Name:
${name}

Email:
${email}

Business / Company:
${company || "Not provided"}


PROJECT DETAILS

Project Type:
${projectType}

Number of Pages:
${pages}

Timeline:
${timeline}


ESTIMATED PRICE

${estimatedPrice}


MESSAGE

${message}


================================

Sent from the WebaSpace website.
      `,
    });


    /* -----------------------------------------
       SUCCESS
    ----------------------------------------- */

    return Response.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error(
      "Contact form error:",
      error
    );


    return Response.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}