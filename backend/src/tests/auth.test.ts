import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import { connectDB } from "../config/db";

jest.setTimeout(20000);

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        email: `test${Date.now()}@gmail.com`,
        password: "123456",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("userId");
  });
});
