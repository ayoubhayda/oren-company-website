interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  company,
  phone,
  service,
  budget,
  message,
}: ContactEmailProps) => {
  return (
    <div style={main}>
      <div style={container}>
        <div style={header}>
          <img
            src="https://your-domain.com/logo.png"
            width="60"
            height="60"
            alt="Oren Company"
            style={logo}
          />
          <h1 style={h1}>New Contact Form Submission</h1>
        </div>

        <div style={content}>
          <p style={paragraph}>You have received a new contact form submission:</p>

          <div style={infoBox}>
            <p style={label}>Name:</p>
            <p style={value}>{name}</p>

            <hr style={divider} />

            <p style={label}>Email:</p>
            <p style={value}>{email}</p>

            {company && (
              <>
                <hr style={divider} />
                <p style={label}>Company:</p>
                <p style={value}>{company}</p>
              </>
            )}

            {phone && (
              <>
                <hr style={divider} />
                <p style={label}>Phone:</p>
                <p style={value}>{phone}</p>
              </>
            )}

            {service && (
              <>
                <hr style={divider} />
                <p style={label}>Service:</p>
                <p style={value}>{service}</p>
              </>
            )}

            {budget && (
              <>
                <hr style={divider} />
                <p style={label}>Budget:</p>
                <p style={value}>{budget}</p>
              </>
            )}

            <hr style={divider} />

            <p style={label}>Message:</p>
            <p style={messageValue}>{message}</p>
          </div>

          <p style={footer}>
            This message was sent from your website contact form. Please respond to the sender at their earliest convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: 0,
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const header = {
  textAlign: "center",
  marginBottom: "30px",
};

const logo = {
  margin: "0 auto",
  marginBottom: "20px",
  display: "block",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
};

const content = {
  padding: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#333",
  marginBottom: "20px",
};

const infoBox = {
  backgroundColor: "#f8f9fa",
  borderRadius: "6px",
  padding: "20px",
  marginBottom: "20px",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#666",
  margin: "0 0 5px 0",
};

const value = {
  fontSize: "16px",
  color: "#333",
  margin: "0 0 15px 0",
};

const messageValue = {
  fontSize: "16px",
  color: "#333",
  margin: "0 0 15px 0",
  whiteSpace: "pre-wrap",
};

const divider = {
  border: "none",
  borderTop: "1px solid #e9ecef",
  margin: "15px 0",
};

const footer = {
  fontSize: "14px",
  color: "#666",
  lineHeight: "20px",
  marginTop: "20px",
};
