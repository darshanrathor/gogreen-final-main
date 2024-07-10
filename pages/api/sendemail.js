var ses = require("node-ses");
let client = ses.createClient({
  key: process.env.AWS_API_KEY,
  secret: process.env.AWS_SECRET,
  amazon: "https://email.ap-south-1.amazonaws.com",
});

export default async function sendEmails(req, res) {
  if (req.method === "POST") {
    const input = JSON.parse(req.body);
    client.sendEmail(
      {
        to: input.to_email,
        from: input.from_email,
        subject: `You got new message from ${input.to_name}`,
        message: input.message,
        // altText: "plain text",
      },
      function (err, data, r) {
        console.log(err, data, r);
        return res.status(200).json({
          status: true,
          msg: "send email",
        });
      }
    );
  } else {
    return res.status(500).json({
      status: false,
      msg: "Method not allowed",
    });
  }
}
