import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Siyanda',
      email: 'siyanda@example.com',
      password: bcrypt.hashSync('Siyanda123456'),
      isAdmin: false,
    },
    {
      name: 'Mandile',
      email: 'mandile@example.com',
      password: bcrypt.hashSync('Mandile123456'),
      isAdmin: false,
    },
    {
      name: 'Treswell',
      email: 'treswell@example.com',
      password: bcrypt.hashSync('Treswell123456'),
      isAdmin: false,
    },
  ],
  movies: [
    {
      title: 'Thor: Love and Thunder',
      slug: 'Thor-love-and-thunder',
      release_date: '6-Jul-2022',
      genre: 'Action/Sci-fi',
      running_time: '1h 59m',
      release_state: 'now_showing',
      image: '/images/Thor_Love_and_Thunder.png',
      description:
        "Marvel Studios' “Thor: Love and Thunder” finds the God of Thunder on a journey unlike anything he's ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods.",
      view_time: 2,
      price: 100,
      trailer: 'https://www.youtube.com/watch?v=Go8nTmfrQd8',
    },
    {
      title: 'Beast',
      slug: 'Beast',
      release_date: '19-Aug-2022',
      genre: 'Thriller/Adventure',
      running_time: '1h 33m',
      release_state: 'now_showing',
      image: '/images/Beast.jpg',
      description:
        'The film stars Idris Elba, Iyana Halley, Leah Sava Jeffries, and Sharlto Copley. Nate Daniels and his two teenage daughters visit a South African game reserve, and must fight to survive when they are stalked by a vicious lion.',
      view_time: 5,
      price: 85,
      trailer: 'https://www.youtube.com/watch?v=mcdWyg7iTmU',
    },
    {
      title: 'Black Adam',
      slug: 'Black-adam',
      release_date: '21-Oct-2022',
      genre: 'Action/Fantasy',
      running_time: '2h 15m',
      release_state: 'coming_soon',
      image: '/images/Black_Adam.jpg',
      description:
        'Black Adam has repeatedly been described as a warrior who had proven himself to be highly skilled even before he was given the power of Shazam. He has recently acquired the power of the goddess Isis, making him stronger than ever.',
      view_time: 2,
      price: 75,
      trailer: 'https://www.youtube.com/watch?v=STyZP3S-jN8',
    },
    {
      title: 'Blacklight',
      slug: 'Blacklight',
      release_date: '10-Feb-2022',
      genre: 'Action/Thriller',
      running_time: '1h 48m',
      release_state: 'now_showing',
      image: '/images/Blacklight.jpg',
      description:
        'Blacklight is a 2022 action thriller film directed and co-written by Mark Williams. The film stars Liam Neeson as an FBI fixer who gets involved in a government conspiracy; Emmy Raver-Lampman, Taylor John Smith, and Aidan Quinn also star.',
      view_time: 8,
      price: 85,
      trailer: 'https://www.youtube.com/watch?v=TIX3XjDMPt8',
    },
    {
      title: 'Bullet Train',
      slug: 'Bullet-train',
      release_date: '5-Aug-2022',
      genre: 'Action/Thriller',
      running_time: '2h 6m',
      release_state: 'now_showing',
      image: '/images/Bullet_Train.png',
      description:
        'It is based on the 2010 novel Maria Beetle by Kōtarō Isaka. The film stars Brad Pitt as a begrudging assassin who must battle fellow killers while riding a fictionalized version of the Tokaido Shinkansen.',
      view_time: 5,
      price: 80,
      trailer: 'https://www.youtube.com/watch?v=0IOsk2Vlc4o',
    },
    {
      title: 'Day Shift',
      slug: 'Day_shift',
      release_date: '12-Aug-2022',
      genre: 'Comedy/Fantasy',
      running_time: '1h 54m',
      release_state: 'now_showing',
      image: '/images/Daylight.jpg',
      description:
        'Jamie Foxx stars as a hard working blue collar dad who just wants to provide a good life for his quick-witted daughter, but his mundane San Fernando Valley pool cleaning job is a front for his real source of income, hunting and killing vampires as part of an international Union of vampire hunters.',
      view_time: 2,
      price: 75,
      trailer: 'https://www.youtube.com/watch?v=GN_IwBptKi4',
    },
    {
      title: 'Elvis',
      slug: 'Elvis',
      release_date: '19-Oct-2022',
      genre: 'Musical/Drama',
      running_time: '2h 39m',
      release_state: 'coming_soon',
      image: '/images/Elvis.jpg',
      description:
        "The film explores the life and music of Elvis Presley (Austin Butler), seen through the prism of his complicated relationship with his enigmatic manager, Colonel Tom Parker (Tom Hanks). The story delves into the complex dynamic between Presley and Parker spanning over 20 years, from Presley's rise to fame to his unprecedented stardom, against the backdrop of the evolving cultural landscape and loss of innocence in America. Central to that journey is one of the most significant and influential people in Elvis's life, Priscilla Presley (Olivia DeJonge).",
      view_time: 5,
      price: 90,
      trailer: 'https://www.youtube.com/watch?v=wBDLRvjHVOY',
    },
    {
      title: 'Jurassic World Dominion',
      slug: 'Jurassic-world-dominion',
      release_date: '10-Jun-2022',
      genre: 'Action/Sci-fi',
      running_time: '2h 27m',
      release_state: 'now_showing',
      image: '/images/Jurassic_World.png',
      description:
        "This summer, experience the epic conclusion to the Jurassic era as two generations unite for the first time. Chris Pratt and Bryce Dallas Howard are joined by Oscar®-winner Laura Dern, Jeff Goldblum and Sam Neill in Jurassic World Dominion, a bold, timely and breathtaking new adventure that spans the globe. From Jurassic World architect and director Colin Trevorrow, Dominion takes place four years after Isla Nublar has been destroyed. Dinosaurs now live--and hunt--alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
      view_time: 5,
      price: 75,
      trailer: 'https://www.youtube.com/watch?v=fb5ELWi-ekk',
    },
    {
      title: 'Luck',
      slug: 'Luck',
      release_date: '5-Aug-2022',
      genre: 'Comedy/Family',
      running_time: '1h 37m',
      release_state: 'now_showing',
      image: '/images/Luck.png',
      description:
        'From Apple Original Films and Skydance Animation comes the story of Sam Greenfield, the unluckiest person in the world! Suddenly finding herself in the never-before-seen Land of Luck, she must unite with the magical creatures there to turn her luck around.',
      view_time: 2,
      price: 65,
      trailer: 'https://www.youtube.com/watch?v=xSG5UX0EQVg',
    },
    {
      title: 'The Unbearable Weight of Massive Talent',
      slug: 'The-Unbearable-Weight-of-Massive-Talent',
      release_date: '12-Apr-2022',
      genre: 'Action/Comedy',
      running_time: '1h 45m',
      release_state: 'now_showing',
      image: '/images/Massive_Talent.jpg',
      description:
        'Nicolas Cage stars as... Nick Cage in the action-comedy The Unbearable Weight of Massive Talent. Creatively unfulfilled and facing financial ruin, the fictionalized version of Cage must accept a $1 million offer to attend the birthday of a dangerous superfan (Pedro Pascal). Things take a wildly unexpected turn when Cage is recruited by a CIA operative (Tiffany Haddish) and forced to live up to his own legend, channeling his most iconic and beloved on-screen characters in order to save himself and his loved ones. With a career built for this very moment, the seminal award-winning actor must take on the role of a lifetime: Nick Cage.',
      view_time: 8,
      price: 70,
      trailer: 'https://www.youtube.com/watch?v=x2YHPZMj8r4',
    },
    {
      title: 'Me Time',
      slug: 'Me-time',
      release_date: '26-Oct-2022',
      genre: 'Action/Comedy',
      running_time: '1h 41m',
      release_state: 'coming_soon',
      image: '/images/Me_Time.png',
      description:
        'With his family away, a stay-at-home dad enjoys his first me-time in years by reconnecting with an old friend for a wild weekend that may upend his life.',
      view_time: 5,
      price: 90,
      trailer: 'https://www.youtube.com/watch?v=Mmq_NVwLN_g',
    },
    {
      title: 'Minions: The Rise of Gru',
      slug: 'Minions-The-Rise-of-Gru',
      release_date: '1-Oct-2022',
      genre: 'Comedy/Adventure',
      running_time: '1h 30m',
      release_state: 'coming_soon',
      image: '/images/Minions.png',
      description:
        "In the heart of the 1970s, amid a flurry of feathered hair and flared jeans, Gru (Oscar® nominee Steve Carell) is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them. Luckily, he gets some mayhem-making backup from his loyal followers, the Minions. Together, Kevin, Stuart, Bob, and Otto--a new Minion sporting braces and a desperate need to please--deploy their skills as they and Gru build their first lair, experiment with their first weapons and pull off their first missions. When the Vicious 6 oust their leader, legendary fighter Wild Knuckles (Oscar® winner Alan Arkin), Gru interviews to become their newest member. It doesn't go well (to say the least), and only gets worse after Gru outsmarts them and suddenly finds himself the mortal enemy of the apex of evil. On the run, Gru will turn to an unlikely source for guidance, Wild Knuckles himself, and discover that even bad guys need a little help from their friends.",
      view_time: 2,
      price: 80,
      trailer: 'https://www.youtube.com/watch?v=6DxjJzmYsXo',
    },
    {
      title: 'Nope',
      slug: 'Nope',
      release_date: '22-Jul-2022',
      genre: 'Horror/Sci-fi',
      running_time: '2h 15m',
      release_state: 'now_showing',
      image: '/images/Nope.jpg',
      description:
        'Two siblings who run a California horse ranch discover something wonderful and sinister in the skies above, and the owner of an adjacent theme park tries to profit from the mysterious, otherworldly phenomenon.',
      view_time: 8,
      price: 90,
      trailer: 'https://www.youtube.com/watch?v=HUgmq_8PlRY',
    },
    {
      title: 'Samaritan',
      slug: 'Samaritan',
      release_date: '15-Oct-2022',
      genre: 'Action/Fantasy',
      running_time: '1h 41m',
      release_state: 'coming_soon',
      image: '/images/Samaritan.jpg',
      description:
        "Thirteen-year-old Sam Cleary (Javon Wanna Walton) suspects that his mysterious and reclusive neighbor Mr. Smith (Sylvester Stallone) is actually a legend hiding in plain sight. Twenty years ago, Granite City's super-powered vigilante, Samaritan, was reported dead after a fiery warehouse battle with his rival, Nemesis. Most believe Samaritan perished in the fire, but some in the city, like Sam, have hope that he is still alive. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
      view_time: 5,
      price: 75,
      trailer: 'https://www.youtube.com/watch?v=9FKnTxSC16E',
    },
    {
      title: 'Top Gun: Maverick',
      slug: 'Top-Gun-Maverick',
      release_date: '23-Jun-2022',
      genre: 'Action/Adventure',
      running_time: '2h 11m',
      release_state: 'now_showing',
      image: '/images/Top_Gun_Maverick.jpg',
      description:
        "After more than thirty years of service as one of the Navy's top aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw (Miles Teller), call sign: “Rooster,” the son of Maverick's late friend and Radar Intercept Officer Lt. Nick Bradshaw, aka “Goose”. Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.",
      view_time: 2,
      price: 85,
      trailer: 'https://www.youtube.com/watch?v=giXco2jaZ_4',
    },
  ],
};

export default data;
