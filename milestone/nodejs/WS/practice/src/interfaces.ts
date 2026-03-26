import type { Request } from "express";

export interface AuthReq extends Request{
    user?:any;
}