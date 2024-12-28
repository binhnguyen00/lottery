const prizes = [
  {
    type: 0,
    count: 0,
    title: "Giải đặc biệt",
    text: "Giải đặc biệt"
  },
  {
    type: 1,
    count: 1,
    text: "Giải nhất",
    title: "Giải nhất",
    img: "../img/1.png"
  },
  {
    type: 2,
    count: 3,
    text: "Giải nhì",
    title: "Giải nhì",
    img: "../img/2.png"
  },
  {
    type: 3,
    count: 5,
    text: "Giải ba",
    title: "Giải ba",
    img: "../img/3.png"
  },
  {
    type: 4,
    count: 10,
    text: "Giải tư",
    title: "Giải tư",
    img: "../img/4.png"
  },
  {
    type: 5,
    count: 100,
    text: "Giải khuyến khích",
    title: "Giải khuyến khích",
    img: "../img/5.png"
  },

];

/**
 * 一Số giải mỗi lần quay
 */
const EACH_COUNT = [1, 1, 1, 1, 10, 10];

const COMPANY = "MOBIFONE";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
