let last_press = -1;
let press_time = new Array(15);

let _characters = [
  [".", "?", "!", "1"],
  ["a", "b", "c", "2"],
  ["d", "e", "f", "3"],
  ["g", "h", "i", "4"],
  ["j", "k", "i", "5"],
  ["m", "n", "o", "6"],
  ["p", "q", "r", "s", "7"],
  ["t", "u", "v", "8"],
  ["w", "x", "y", "z", "9"],
];

export const setText = (id, message) => {
    const d = new Date();
    let cur_time = d.getTime();
  if (id === 2) {
    message += "\n";
  }
  if (id === 3) {
    // if(message[message.length-1] === "\n")
    message = message.slice(0, -1);
  }
  if(id >= 4 && id <= 12) {
      if(last_press === id &&  cur_time - press_time[id] <= 500) {
        let last = message[message.length-1];
        let i = 0, n = _characters[id-4].length;
        while(i < n) {
            if(last === _characters[id-4][i]) break;
            i++;
        }
        message = message.slice(0,-1);
        if(i >= n-2) message += _characters[id-4][n-1];  
        else message += _characters[id-4][i+1];
      } else {
        message += _characters[id-4][0];
      } 
  }
  if (id === 14) {
    if(last_press === id &&  cur_time - press_time[id] <= 500) {
        message = message.slice(0,-1);  
        message += "0";
    }else message += " ";
  }
  last_press = id;
  press_time[id] = cur_time;
  return message;
};
