import halloweenPoster from "./posters/halloween.jpg";
import venomPoster from "./posters/venom.jpg";
import aStarIsBornPoster from "./posters/a-star-is-born.jpg";

export default {
  halloween: {
    title: "Halloween",
    poster: halloweenPoster,
    synopsis:
      "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    releaseDate: "Oct 19, 2018",
    times: [
      "11:50 AM",
      "1:20 PM",
      "2:40 PM",
      "4:20 PM",
      "5:40 PM",
      "7:20 PM",
      "8:40 PM",
      "9:20 PM",
      "10:20 PM"
    ]
  },
  venom: {
    title: "Venom",
    poster: venomPoster,
    synopsis:
      "One of Marvel’s most enigmatic, complex and badass characters comes to the big screen, starring Academy Award® nominated actor Tom Hardy as the lethal protector Venom.",
    releaseDate: "Oct 5, 2018",
    times: ["11:20 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"]
  },
  "a-star-is-born": {
    title: "A Star Is Born",
    poster: aStarIsBornPoster,
    synopsis:
      "A musician helps a young singer and actress find fame, even as age and alcoholism send his own career into a downward spiral.",
    releaseDate: "Oct 5, 2018",
    times: ["12:00 PM", "2:00 PM", "3:20 PM", "5:20 PM", "6:40 PM", "9:50 PM"]
  }
};
