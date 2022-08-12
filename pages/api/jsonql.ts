import type { NextApiRequest, NextApiResponse } from 'next'
import JsonQL from "@mahitm/jsonql";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let minify = req.query.minify === "true"; 
  const body = req.body;

  if (!!body && typeof body === "object" && minify) {
    const mini = new JsonQL().mini(body);
    res.json(mini);
    return; 
  } else if (!minify) {
    return res.json(body);
  }

  res.status(400).send("Send Valid JSON Object");
}
