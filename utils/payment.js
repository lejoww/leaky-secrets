export const processPayment = async (amount) => {
  const stripeKey = "sk_test_51N12FakeKey12345";
  console.log(`Processing payment of $${amount} using key ${stripeKey}`);
};