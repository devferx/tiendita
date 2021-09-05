import type { NextApiRequest, NextApiResponse } from "next";
import { data, IData } from "./data";

export default (req: NextApiRequest, res: NextApiResponse<IData>) => {
  return res.status(200).json(data);
};
