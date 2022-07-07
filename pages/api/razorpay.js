
const Razorpay = require("razorpay");

export default async function handler(req, res) {
  if (req.method === "POST") {
    var razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
  }
  const { amount } = JSON.parse(req.body);

  const payment_capture =1;
  //   const amount = 1;
  const currency = "INR";
  const options = {
    amount: amount *100,
    currency,
    receipt: "receipt_order_test",
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    res.status(400).json(err);
  }
}
