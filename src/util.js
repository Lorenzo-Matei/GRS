export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export default function toBeQuoted(price) {
  if (price <= 0) {
    return "Quote to be Emailed";
  }
  return price;
}
