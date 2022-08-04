module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '28f9be347381fb24294b9620d9880b68'),
  },
});
