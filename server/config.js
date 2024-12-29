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
    img: "../img/prize/prize-01.jpg"
  },
  {
    type: 2,
    count: 2,
    text: "Giải nhì",
    title: "Giải nhì",
    img: "../img/prize/prize-02.jpg"
  },
  {
    type: 3,
    count: 3,
    text: "Giải ba",
    title: "Giải ba",
    img: "../img/prize/prize-03.jpg"
  },
  {
    type: 4,
    count: 15,
    text: "Giải khuyến khích",
    title: "Giải khuyến khích",
    img: "../img/prize/prize-04.jpg"
  },
];

/**
 * Số giải mỗi lần quay
 * Giải Khuyến Khích quay -5 giải
 */
const EACH_COUNT = [1, 1, 1, 1, 5];

const COMPANY = "MOBIFONE";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
