function orderConfirmation(orderInfo) {
  console.log("orderConfirmation template data:", orderInfo);

  function itemToBeQuoted(itemPrice) {
    if (itemPrice <= 0) {
      return "Quote to be Emailed";
    }
    return itemPrice;
  }

  const formattedOrderItems = orderInfo.order.orderItems
    .map((item) => {
      return `
      <tr>
        <td style="text-align: center;">${item.name}</td>
        <td style="text-align: center;">${item.storeSKU}</td>
        <td style="text-align: center;">${item.quantity}</td>
        <td style="text-align: center;">${itemToBeQuoted(item.onlinePrice)}</td>
      </tr>
    `;
    })
    .join("");

  //
  return `
  <html>
    <head>
      <style>
        body{
          background-image: url('https://dem6epkjrbcxz.cloudfront.net/logos/grs_logo.png');
          background-size: contain; /* Adjust the sizing method based on your preference */
          background-position: center; /* Adjust the position based on your preference */
          background-repeat: no-repeat;
          margin:0;
          padding:1rem; /* Adjusted from px to rem */
        }
        
        .email-container {
          text-align: center;
        }
        
        .email-info-card {
          color: #ddd;
          text-align: center;
        
          padding: 8rem; /* Adjusted from px to rem */
          margin-bottom: 5.25rem; /* Adjusted from px to rem */
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(0.65625rem); /* Adjusted from px to rem, though some browsers may not support rem for blur */
          -webkit-backdrop-filter: blur(0.65625rem); /* Adjusted from px to rem */
          border-radius: 0.625rem; /* Adjusted from px to rem */
          box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2); /* Kept box-shadow in px */
          border: 0.0625rem solid rgba(255, 255, 255, 0.18); /* Minimally adjusted because borders are typically fine in px */
          transform: translateZ(0);
          will-change: opacity;
        }
          
        .order-items {
          text-align: left;
          margin: 0 auto;
          width: 100%;
          padding: 0.625rem; /* Adjusted from px to rem */
        }
        
        .order-items th,
        .order-items td {
          padding: 0.5rem; /* Adjusted from px to rem */
          border: 0.0625rem solid #ddd; /* Adjusted, but consider keeping border widths in px */
        }

        @media only screen and (max-width: 600px) {
          .email-info-card {
            padding: 4rem; /* Reduce padding on smaller screens */
          }
        }
      </style>
      <link rel="stylesheet" href="backend/email/emailTemplates.styles.css">
    </head>
    <body>
      <div class="email-container">

        <div class="email-info-card">
          <h1>Order Confirmation</h1>
          <h2>Order ${orderInfo.order._id}</h2>
          <p>Thank you for your order. Here are the details:</p>
        </div>

        <div class="email-info-card">
          <h3>Important Notice!</h3>
          <p>Your order has been received. </p>
          <p>If you have items that have no price and require quoting then we will be reaching out to you with an update soon. We will either reply to this email or send you a new email with the quotes and final total.</p>
          <p>Feel free to contact us at (519) 966-0950 if you have any further questions or require an order expedited.</p>
        </div>

        <div class="email-info-card" style="backdrop-filter: blur(10.5px); text-align: center; margin: 0 auto; max-width: 100%; padding: 0.5rem; box-sizing: border-box; margin-bottom: 1rem;">
        <h3>Order Items</h3>
        <table style="width: 100%; box-sizing: border-box;">
          <thead>
            <tr>
            <th style="padding: 0.5rem; border: 1px solid #ddd; text-align: center;">Product Name</th>
            <th style="padding: 0.5rem; border: 1px solid #ddd; text-align: center;">SKU</th>
            <th style="padding: 0.5rem; border: 1px solid #ddd; text-align: center;">Quantity</th>
            <th style="padding: 0.5rem; border: 1px solid #ddd; text-align: center;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${formattedOrderItems}
          </tbody>
        </table>
      </div>


        <div class="email-info-card">
          <h3>Shipping Address</h3>
          <p>${orderInfo.order.shippingAddress.fullName}</p>
          <p>${orderInfo.order.shippingAddress.address}</p>
          <p>${orderInfo.order.shippingAddress.city}</p> 
          <p>${orderInfo.order.shippingAddress.postalCode}</p>
          <p>${orderInfo.order.shippingAddress.country}</p>
        </div>


        <div class="email-info-card">
          <h3>Payment Method</h3>
          <p>${orderInfo.order.paymentMethod}</p>
        </div>


        <div class="email-info-card">
          <h3>Order Summary</h3>
          <p>Items Price: $${orderInfo.order.itemsPrice}</p>
          <p>Shipping Price: $${orderInfo.order.shippingPrice}</p>
          <p>Tax: $${orderInfo.order.taxPrice}</p>
          <p>Total Price: $${orderInfo.order.totalPrice}</p>
        </div>


        <div class="email-info-card">
          <p>Thank you for shopping with us!</p>
        </div>

      </div>

    </body>
  </html>


  `;
}

export default { orderConfirmation };
