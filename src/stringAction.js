import { STRING_MANI } from "./ActionCreators";

export default function stringAction(dataStr) {
  const newArray = [];
  var str = dataStr.trim();
  var data = str.split(" ");

  while (newArray.length !== data.length) {
    var rand = data[Math.floor(Math.random() * data.length)];
    if (newArray.indexOf(rand) === -1) {
      newArray.push(rand);
    }
  }
  return {
    type: STRING_MANI,
    result: newArray
  };
}
