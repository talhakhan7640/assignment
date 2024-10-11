import DataModel from "../models/data.model.js";
import fs from 'node:fs';
import { resolve } from "node:path";
import mongoose from "mongoose";

const dataCollection = mongoose.connection.collection('data');

// fetches data from database
export const fetchData = async (request, response) => {
  try {
    const data = await dataCollection.find({}).toArray();
    return response.status(200).send(data);
  }catch(error) {
    console.log("data could not be fetched: " + error.message);
  }
}

// uploads jsondata.json file to mongodb atlas
export const uploadData = async () => {
  const filePath = resolve('./jsondata.json');
  const jsondata = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  try {
    const result = await DataModel.insertMany(jsondata);
    console.log('successfully uploaded the data');
    console.log(result);
  } catch(error) {
    console.log("data could not be uploaded: " + error.message);
  }
}

