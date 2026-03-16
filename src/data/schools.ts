export interface School {
  id: string;
  name: string;
  conference: string;
  mascot: string;
  primaryColor: string;
  secondaryColor: string;
  athleteCount: number;
  productCount: number;
}

export const schools: School[] = [
  // SEC Schools
  { id: "missouri", name: "University of Missouri", conference: "SEC", mascot: "Tigers", primaryColor: "#F1B82D", secondaryColor: "#000000", athleteCount: 450, productCount: 1200 },
  { id: "alabama", name: "University of Alabama", conference: "SEC", mascot: "Crimson Tide", primaryColor: "#9E1B32", secondaryColor: "#FFFFFF", athleteCount: 520, productCount: 1500 },
  { id: "georgia", name: "University of Georgia", conference: "SEC", mascot: "Bulldogs", primaryColor: "#BA0C2F", secondaryColor: "#000000", athleteCount: 480, productCount: 1350 },
  { id: "texas", name: "University of Texas", conference: "SEC", mascot: "Longhorns", primaryColor: "#BF5700", secondaryColor: "#FFFFFF", athleteCount: 510, productCount: 1400 },
  { id: "oklahoma", name: "University of Oklahoma", conference: "SEC", mascot: "Sooners", primaryColor: "#841617", secondaryColor: "#FDF9D8", athleteCount: 470, productCount: 1250 },
  { id: "lsu", name: "Louisiana State University", conference: "SEC", mascot: "Tigers", primaryColor: "#461D7C", secondaryColor: "#FDD023", athleteCount: 500, productCount: 1400 },
  { id: "florida", name: "University of Florida", conference: "SEC", mascot: "Gators", primaryColor: "#0021A5", secondaryColor: "#FA4616", athleteCount: 510, productCount: 1450 },
  { id: "auburn", name: "Auburn University", conference: "SEC", mascot: "Tigers", primaryColor: "#0C2340", secondaryColor: "#E87722", athleteCount: 460, productCount: 1200 },
  { id: "tennessee", name: "University of Tennessee", conference: "SEC", mascot: "Volunteers", primaryColor: "#FF8200", secondaryColor: "#FFFFFF", athleteCount: 480, productCount: 1300 },
  { id: "arkansas", name: "University of Arkansas", conference: "SEC", mascot: "Razorbacks", primaryColor: "#9D2235", secondaryColor: "#FFFFFF", athleteCount: 440, productCount: 1100 },
  { id: "kentucky", name: "University of Kentucky", conference: "SEC", mascot: "Wildcats", primaryColor: "#0033A0", secondaryColor: "#FFFFFF", athleteCount: 450, productCount: 1150 },
  { id: "mississippi-state", name: "Mississippi State University", conference: "SEC", mascot: "Bulldogs", primaryColor: "#660000", secondaryColor: "#FFFFFF", athleteCount: 420, productCount: 1000 },
  { id: "ole-miss", name: "University of Mississippi", conference: "SEC", mascot: "Rebels", primaryColor: "#CE1126", secondaryColor: "#14213D", athleteCount: 430, productCount: 1050 },
  { id: "south-carolina", name: "University of South Carolina", conference: "SEC", mascot: "Gamecocks", primaryColor: "#73000A", secondaryColor: "#000000", athleteCount: 440, productCount: 1100 },
  { id: "vanderbilt", name: "Vanderbilt University", conference: "SEC", mascot: "Commodores", primaryColor: "#866D4B", secondaryColor: "#000000", athleteCount: 380, productCount: 900 },
  { id: "texas-am", name: "Texas A&M University", conference: "SEC", mascot: "Aggies", primaryColor: "#500000", secondaryColor: "#FFFFFF", athleteCount: 500, productCount: 1350 },

  // Big Ten Schools
  { id: "ohio-state", name: "Ohio State University", conference: "Big Ten", mascot: "Buckeyes", primaryColor: "#BB0000", secondaryColor: "#666666", athleteCount: 540, productCount: 1600 },
  { id: "michigan", name: "University of Michigan", conference: "Big Ten", mascot: "Wolverines", primaryColor: "#00274C", secondaryColor: "#FFCB05", athleteCount: 530, productCount: 1550 },
  { id: "penn-state", name: "Penn State University", conference: "Big Ten", mascot: "Nittany Lions", primaryColor: "#041E42", secondaryColor: "#FFFFFF", athleteCount: 490, productCount: 1300 },
  { id: "indiana", name: "Indiana University", conference: "Big Ten", mascot: "Hoosiers", primaryColor: "#990000", secondaryColor: "#EEEDEB", athleteCount: 460, productCount: 1200 },
  { id: "wisconsin", name: "University of Wisconsin", conference: "Big Ten", mascot: "Badgers", primaryColor: "#C5050C", secondaryColor: "#FFFFFF", athleteCount: 480, productCount: 1250 },
  { id: "iowa", name: "University of Iowa", conference: "Big Ten", mascot: "Hawkeyes", primaryColor: "#FFCD00", secondaryColor: "#000000", athleteCount: 450, productCount: 1150 },
  { id: "minnesota", name: "University of Minnesota", conference: "Big Ten", mascot: "Golden Gophers", primaryColor: "#7A0019", secondaryColor: "#FFCC33", athleteCount: 440, productCount: 1100 },
  { id: "nebraska", name: "University of Nebraska", conference: "Big Ten", mascot: "Cornhuskers", primaryColor: "#E41C38", secondaryColor: "#FFFFFF", athleteCount: 470, productCount: 1200 },
  { id: "northwestern", name: "Northwestern University", conference: "Big Ten", mascot: "Wildcats", primaryColor: "#4E2A84", secondaryColor: "#FFFFFF", athleteCount: 380, productCount: 950 },
  { id: "purdue", name: "Purdue University", conference: "Big Ten", mascot: "Boilermakers", primaryColor: "#CEB888", secondaryColor: "#000000", athleteCount: 440, productCount: 1100 },
  { id: "illinois", name: "University of Illinois", conference: "Big Ten", mascot: "Fighting Illini", primaryColor: "#E84A27", secondaryColor: "#13294B", athleteCount: 450, productCount: 1150 },
  { id: "maryland", name: "University of Maryland", conference: "Big Ten", mascot: "Terrapins", primaryColor: "#E21833", secondaryColor: "#FFD520", athleteCount: 460, productCount: 1200 },
  { id: "rutgers", name: "Rutgers University", conference: "Big Ten", mascot: "Scarlet Knights", primaryColor: "#CC0033", secondaryColor: "#5F6A72", athleteCount: 430, productCount: 1050 },
  { id: "michigan-state", name: "Michigan State University", conference: "Big Ten", mascot: "Spartans", primaryColor: "#18453B", secondaryColor: "#FFFFFF", athleteCount: 480, productCount: 1250 },
  { id: "usc", name: "University of Southern California", conference: "Big Ten", mascot: "Trojans", primaryColor: "#990000", secondaryColor: "#FFC72C", athleteCount: 500, productCount: 1400 },
  { id: "ucla", name: "UCLA", conference: "Big Ten", mascot: "Bruins", primaryColor: "#2D68C4", secondaryColor: "#F2A900", athleteCount: 490, productCount: 1350 },
  { id: "oregon", name: "University of Oregon", conference: "Big Ten", mascot: "Ducks", primaryColor: "#154733", secondaryColor: "#FEE123", athleteCount: 470, productCount: 1250 },
  { id: "washington", name: "University of Washington", conference: "Big Ten", mascot: "Huskies", primaryColor: "#4B2E83", secondaryColor: "#B7A57A", athleteCount: 460, productCount: 1200 },

  // Big 12 Schools
  { id: "kansas", name: "University of Kansas", conference: "Big 12", mascot: "Jayhawks", primaryColor: "#0051BA", secondaryColor: "#E8000D", athleteCount: 450, productCount: 1150 },
  { id: "kansas-state", name: "Kansas State University", conference: "Big 12", mascot: "Wildcats", primaryColor: "#512888", secondaryColor: "#FFFFFF", athleteCount: 430, productCount: 1050 },
  { id: "baylor", name: "Baylor University", conference: "Big 12", mascot: "Bears", primaryColor: "#154734", secondaryColor: "#FFB81C", athleteCount: 440, productCount: 1100 },
  { id: "tcu", name: "Texas Christian University", conference: "Big 12", mascot: "Horned Frogs", primaryColor: "#4D1979", secondaryColor: "#A3A9AC", athleteCount: 420, productCount: 1000 },
  { id: "texas-tech", name: "Texas Tech University", conference: "Big 12", mascot: "Red Raiders", primaryColor: "#CC0000", secondaryColor: "#000000", athleteCount: 450, productCount: 1150 },
  { id: "oklahoma-state", name: "Oklahoma State University", conference: "Big 12", mascot: "Cowboys", primaryColor: "#FF6600", secondaryColor: "#000000", athleteCount: 460, productCount: 1200 },
  { id: "iowa-state", name: "Iowa State University", conference: "Big 12", mascot: "Cyclones", primaryColor: "#C8102E", secondaryColor: "#F1BE48", athleteCount: 440, productCount: 1100 },
  { id: "west-virginia", name: "West Virginia University", conference: "Big 12", mascot: "Mountaineers", primaryColor: "#002855", secondaryColor: "#EAAA00", athleteCount: 430, productCount: 1050 },
  { id: "byu", name: "Brigham Young University", conference: "Big 12", mascot: "Cougars", primaryColor: "#002E5D", secondaryColor: "#FFFFFF", athleteCount: 450, productCount: 1150 },
  { id: "ucf", name: "University of Central Florida", conference: "Big 12", mascot: "Knights", primaryColor: "#BA9B37", secondaryColor: "#000000", athleteCount: 440, productCount: 1100 },
  { id: "cincinnati", name: "University of Cincinnati", conference: "Big 12", mascot: "Bearcats", primaryColor: "#E00122", secondaryColor: "#000000", athleteCount: 420, productCount: 1000 },
  { id: "houston", name: "University of Houston", conference: "Big 12", mascot: "Cougars", primaryColor: "#C8102E", secondaryColor: "#FFFFFF", athleteCount: 450, productCount: 1150 },
  { id: "arizona", name: "University of Arizona", conference: "Big 12", mascot: "Wildcats", primaryColor: "#003366", secondaryColor: "#CC0033", athleteCount: 460, productCount: 1200 },
  { id: "arizona-state", name: "Arizona State University", conference: "Big 12", mascot: "Sun Devils", primaryColor: "#8C1D40", secondaryColor: "#FFC627", athleteCount: 480, productCount: 1300 },
  { id: "colorado", name: "University of Colorado", conference: "Big 12", mascot: "Buffaloes", primaryColor: "#CFB87C", secondaryColor: "#000000", athleteCount: 450, productCount: 1150 },
  { id: "utah", name: "University of Utah", conference: "Big 12", mascot: "Utes", primaryColor: "#CC0000", secondaryColor: "#FFFFFF", athleteCount: 440, productCount: 1100 },

  // ACC Schools
  { id: "clemson", name: "Clemson University", conference: "ACC", mascot: "Tigers", primaryColor: "#F56600", secondaryColor: "#522D80", athleteCount: 460, productCount: 1200 },
  { id: "notre-dame", name: "University of Notre Dame", conference: "ACC", mascot: "Fighting Irish", primaryColor: "#0C2340", secondaryColor: "#C99700", athleteCount: 440, productCount: 1150 },
  { id: "florida-state", name: "Florida State University", conference: "ACC", mascot: "Seminoles", primaryColor: "#782F40", secondaryColor: "#CEB888", athleteCount: 480, productCount: 1250 },
  { id: "miami", name: "University of Miami", conference: "ACC", mascot: "Hurricanes", primaryColor: "#F47321", secondaryColor: "#005030", athleteCount: 450, productCount: 1150 },
  { id: "nc-state", name: "NC State University", conference: "ACC", mascot: "Wolfpack", primaryColor: "#CC0000", secondaryColor: "#FFFFFF", athleteCount: 440, productCount: 1100 },
  { id: "unc", name: "University of North Carolina", conference: "ACC", mascot: "Tar Heels", primaryColor: "#7BAFD4", secondaryColor: "#13294B", athleteCount: 480, productCount: 1300 },
  { id: "duke", name: "Duke University", conference: "ACC", mascot: "Blue Devils", primaryColor: "#003087", secondaryColor: "#FFFFFF", athleteCount: 420, productCount: 1050 },
  { id: "virginia", name: "University of Virginia", conference: "ACC", mascot: "Cavaliers", primaryColor: "#232D4B", secondaryColor: "#F84C1E", athleteCount: 430, productCount: 1100 },
  { id: "virginia-tech", name: "Virginia Tech", conference: "ACC", mascot: "Hokies", primaryColor: "#630031", secondaryColor: "#CF4420", athleteCount: 450, productCount: 1150 },
  { id: "pitt", name: "University of Pittsburgh", conference: "ACC", mascot: "Panthers", primaryColor: "#003594", secondaryColor: "#FFB81C", athleteCount: 440, productCount: 1100 },
  { id: "louisville", name: "University of Louisville", conference: "ACC", mascot: "Cardinals", primaryColor: "#AD0000", secondaryColor: "#000000", athleteCount: 450, productCount: 1150 },
  { id: "syracuse", name: "Syracuse University", conference: "ACC", mascot: "Orange", primaryColor: "#D44500", secondaryColor: "#003087", athleteCount: 430, productCount: 1050 },
  { id: "boston-college", name: "Boston College", conference: "ACC", mascot: "Eagles", primaryColor: "#98002E", secondaryColor: "#BC9B6A", athleteCount: 400, productCount: 950 },
  { id: "wake-forest", name: "Wake Forest University", conference: "ACC", mascot: "Demon Deacons", primaryColor: "#9E7E38", secondaryColor: "#000000", athleteCount: 380, productCount: 900 },
  { id: "georgia-tech", name: "Georgia Tech", conference: "ACC", mascot: "Yellow Jackets", primaryColor: "#B3A369", secondaryColor: "#003057", athleteCount: 420, productCount: 1000 },
  { id: "stanford", name: "Stanford University", conference: "ACC", mascot: "Cardinal", primaryColor: "#8C1515", secondaryColor: "#FFFFFF", athleteCount: 450, productCount: 1200 },
  { id: "cal", name: "University of California", conference: "ACC", mascot: "Golden Bears", primaryColor: "#003262", secondaryColor: "#FDB515", athleteCount: 440, productCount: 1100 },
  { id: "smu", name: "Southern Methodist University", conference: "ACC", mascot: "Mustangs", primaryColor: "#C8102E", secondaryColor: "#00205B", athleteCount: 400, productCount: 950 },

  // Big East Schools
  { id: "butler", name: "Butler University", conference: "Big East", mascot: "Bulldogs", primaryColor: "#13294B", secondaryColor: "#FFFFFF", athleteCount: 350, productCount: 850 },
  { id: "uconn", name: "University of Connecticut", conference: "Big East", mascot: "Huskies", primaryColor: "#000E2F", secondaryColor: "#FFFFFF", athleteCount: 420, productCount: 1100 },
  { id: "villanova", name: "Villanova University", conference: "Big East", mascot: "Wildcats", primaryColor: "#00205B", secondaryColor: "#13B5EA", athleteCount: 380, productCount: 950 },
  { id: "creighton", name: "Creighton University", conference: "Big East", mascot: "Bluejays", primaryColor: "#005CA9", secondaryColor: "#FFFFFF", athleteCount: 360, productCount: 900 },
  { id: "georgetown", name: "Georgetown University", conference: "Big East", mascot: "Hoyas", primaryColor: "#041E42", secondaryColor: "#A2AAAD", athleteCount: 350, productCount: 850 },
  { id: "marquette", name: "Marquette University", conference: "Big East", mascot: "Golden Eagles", primaryColor: "#003366", secondaryColor: "#FFCC00", athleteCount: 370, productCount: 920 },
  { id: "providence", name: "Providence College", conference: "Big East", mascot: "Friars", primaryColor: "#000000", secondaryColor: "#A2AAAD", athleteCount: 340, productCount: 800 },
  { id: "seton-hall", name: "Seton Hall University", conference: "Big East", mascot: "Pirates", primaryColor: "#004B87", secondaryColor: "#A2AAAD", athleteCount: 350, productCount: 850 },
  { id: "st-johns", name: "St. John's University", conference: "Big East", mascot: "Red Storm", primaryColor: "#C8102E", secondaryColor: "#FFFFFF", athleteCount: 360, productCount: 880 },
  { id: "xavier", name: "Xavier University", conference: "Big East", mascot: "Musketeers", primaryColor: "#002E5D", secondaryColor: "#9EA2A2", athleteCount: 340, productCount: 820 },
  { id: "depaul", name: "DePaul University", conference: "Big East", mascot: "Blue Demons", primaryColor: "#005EB8", secondaryColor: "#E4002B", athleteCount: 350, productCount: 850 },

  // Independents
  { id: "army", name: "United States Military Academy", conference: "Independent", mascot: "Black Knights", primaryColor: "#000000", secondaryColor: "#D3BC8D", athleteCount: 400, productCount: 1000 },
  { id: "navy", name: "United States Naval Academy", conference: "Independent", mascot: "Midshipmen", primaryColor: "#00205B", secondaryColor: "#C5B783", athleteCount: 400, productCount: 1000 },
  { id: "liberty", name: "Liberty University", conference: "Independent", mascot: "Flames", primaryColor: "#002D62", secondaryColor: "#C41E3A", athleteCount: 450, productCount: 1100 },
];

export const conferenceOrder = ["SEC", "Big Ten", "Big 12", "ACC", "Big East", "Independent"];

export const getSchoolsByConference = () => {
  const grouped: Record<string, School[]> = {};
  conferenceOrder.forEach(conf => {
    grouped[conf] = schools.filter(s => s.conference === conf);
  });
  return grouped;
};

export const getShortName = (name: string) =>
  name.replace("University of ", "").replace(" University", "");
