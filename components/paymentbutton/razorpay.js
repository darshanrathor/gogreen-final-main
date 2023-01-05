// import { sendemail } from "../sendemail/ordersuccessemail";
import { supabase } from "../supabase/supabase";
import { initializeRazorpay } from "../utils/razorpay";

async function displayRazorpay(email, name, mobilenumber, amount1, item) {

  if (email === null) {
    setlogin(true);
  } else {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify({ amount: amount1 }),
    });

    const r = await result.json();
    if (!result) {
      alert("Server error. Are you online?");
      return;
    } else {
      const { amount, id: order_id, currency } = r;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
        amount: amount,
        currency: currency,
        name: name,
        description: "GoGreenGanesha",
        order_id: order_id,
        handler: async function (response) {
          const data1 = {
            email: email,
            amount: amount,
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          //   let arr = [];
          //   for(let i = 0 ;i <item.length;i++){
          //   const item =  `<div style="width:100%;padding:10px 0;;border-bottom:2px solid silver">
          //   <h3 style="font-weight:600;line-height:1.3;font-size:16px;word-break:break-word">${item[i].name}</h3>
          //   <div style="width:100%;font-size:15px">
          //   <p>
          //   Qty: ${item[i].quantity}
          //   </p>
          //   <p style="font-weight:700">
          //   ₹${item[i].price}
          //   </p>
          //   </div>
          //   </div>`
          //   arr.push(item);
          //   }


          //   const msg = `<p>
          //   Dear Admin,
          //   </p>
          //   <h2>
          //   We just recieved one order from test
          //   </h2>
          //   ${arr}
          //   <p>
          //   Regards, Gogreenganesha.
          //   </p>`;


          //   var templateParams = {
          //     to_name: name,
          //     to_email: "rathoddharmik9@gmail.com",
          //     message: msg,
          //     from_email: "rathoddharmik9@gmail.com",
          //   };

          //  await sendemail(templateParams);
          await updatePaymentSuccess(order_id, email);
          alert(JSON.stringify(data1));
        },
        prefill: {
          name: name,
          email: email,
          contact: mobilenumber,
        },
        theme: {
          color: "#184029",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(`Payment Failed ${response.error.reason}`);
      });
      paymentObject.open();
    }
  }
}

const updatePaymentSuccess = async (order_id, email) => {
  const { data, error } = await supabase.from("orderHistory")
    .update({
      paymentstatus: true,
      order_id: order_id
    })
    .match({ email: email });
  window.location.href = "/order-thank-you";
}





export default displayRazorpay;




