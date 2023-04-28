import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority`;


