export interface Player {
  id: string;
  name: string;
  number: string;
  position: string;
  year?: string;
  height?: string;
  hometown?: string;
  image?: string;
}

export const footballRoster: Player[] = [
  { id: "stephen-hall", name: "Stephen Hall", number: "0", position: "CB" },
  { id: "donovan-olugbode", name: "Donovan Olugbode", number: "1", position: "WR" },
  { id: "toriano-pride-jr", name: "Toriano Pride Jr.", number: "2", position: "CB" },
  { id: "kevin-coleman-jr", name: "Kevin Coleman Jr.", number: "3", position: "WR" },
  { id: "mose-phillips-iii", name: "Mose Phillips III", number: "3", position: "S" },
  { id: "trajen-greco", name: "Trajen Greco", number: "4", position: "S" },
  { id: "khalil-jacobs", name: "Khalil Jacobs", number: "5", position: "LB" },
  { id: "matt-zollers", name: "Matt Zollers", number: "5", position: "QB" },
  { id: "jalen-catalon", name: "Jalen Catalon", number: "6", position: "S" },
  { id: "xavier-loyd", name: "Xavier Loyd", number: "6", position: "WR" },
  { id: "chris-mcclellan", name: "Chris McClellan", number: "7", position: "DT" },
  { id: "zion-young", name: "Zion Young", number: "9", position: "DE" },
];

export const mensBasketballRoster: Player[] = [
  { id: "tamar-bates", name: "Tamar Bates", number: "0", position: "G" },
  { id: "caleb-grill", name: "Caleb Grill", number: "3", position: "G" },
  { id: "tony-perkins", name: "Tony Perkins", number: "5", position: "G" },
  { id: "mark-mitchell", name: "Mark Mitchell", number: "10", position: "F" },
];

export const womensBasketballRoster: Player[] = [
  { id: "ashton-judd", name: "Ashton Judd", number: "1", position: "G" },
  { id: "daija-roberts", name: "Daija Roberts", number: "2", position: "G" },
];

export const baseballRoster: Player[] = [
  { id: "josh-holt", name: "Josh Holt", number: "1", position: "IF" },
  { id: "kade-grundy", name: "Kade Grundy", number: "2", position: "OF" },
];

export const softballRoster: Player[] = [
  { id: "kara-daly", name: "Kara Daly", number: "1", position: "UT" },
  { id: "brooke-wilmes", name: "Brooke Wilmes", number: "7", position: "OF" },
];

export const soccerRoster: Player[] = [
  { id: "jordan-wilson", name: "Jordan Wilson", number: "0", position: "GK" },
  { id: "kendyl-wittmer", name: "Kendyl Wittmer", number: "2", position: "D" },
];

export const volleyballRoster: Player[] = [
  { id: "aspen-maxwell", name: "Aspen Maxwell", number: "0", position: "OH/RS", year: "Fr.", height: "6'1\"", hometown: "Humble, Texas", image: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fmutigers.com%2Fimages%2F2024%2F7%2F15%2F0_Aspen_Maxwell_Cropped_Tb2Mf.jpg&width=400&height=500&type=webp" },
  { id: "colleen-finney", name: "Colleen Finney", number: "1", position: "MB", year: "Gr.", height: "6'1\"", hometown: "Blythewood, S.C.", image: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fmutigers.com%2Fimages%2F2024%2F7%2F15%2F1_Colleen_Finney_Cropped_NNy9a.jpg&width=400&height=500&type=webp" },
  { id: "kaylen-rush", name: "Kaylen Rush", number: "6", position: "L", year: "So.", height: "5'7\"", hometown: "Columbia, Mo.", image: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fmutigers.com%2Fimages%2F2024%2F7%2F15%2F6_Kaylen_Rush_Cropped_y5O6b.jpg&width=400&height=500&type=webp" },
];

export const wrestlingRoster: Player[] = [
  { id: "noah-surtin", name: "Noah Surtin", number: "", position: "125" },
  { id: "keegan-otoole", name: "Keegan O'Toole", number: "", position: "141" },
];

export const sportRosters: Record<string, Player[]> = {
  "Football": footballRoster,
  "Men's Basketball": mensBasketballRoster,
  "Women's Basketball": womensBasketballRoster,
  "Baseball": baseballRoster,
  "Softball": softballRoster,
  "Soccer": soccerRoster,
  "Women's Volleyball": volleyballRoster,
  "Wrestling": wrestlingRoster,
};
