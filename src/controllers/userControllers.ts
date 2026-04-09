import type { FastifyReply, FastifyRequest } from "fastify";
import type { RegisterRequest } from "../types/http";
import repository from "../repository";

export async function register(
  request: FastifyRequest<{ Body: RegisterRequest }>,
  reply: FastifyReply,
) {}

export async function login(request: FastifyRequest, reply: FastifyReply) {}
