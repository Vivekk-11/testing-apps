import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "..";

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({ a: 1, b: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return error message correctly", async () => {
    const res = await request(app)
      .post("/sum")
      .send({ a: ["something"] });

    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe("Incorrect Inputs");
  });
});
