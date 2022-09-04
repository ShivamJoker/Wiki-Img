import { getWikiImg } from "../src";

const introvert_peps = [
  "elon musk",
  "bill gates",
  "lady gaga",
  "warren buffet",
  "mark zuckerberg",
  "albert einstein",
];

const getAll = async () => {
  const initiators = introvert_peps.map((name) => getWikiImg(name, "./images"));
  const resp = await Promise.all(initiators);
  console.log(resp);
};

getAll();
