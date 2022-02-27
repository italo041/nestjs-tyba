import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    jwtSecret: process.env.JWT_SECRET,
    travelAdvisorKey: process.env.TRAVEL_ADVISOR_KEY,
  };
});
