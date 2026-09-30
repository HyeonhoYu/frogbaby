/* Frog Baby story data: shared by the movie (index.html) and the recording studio (record/). */
const UI = {
  "en": {
    "tag": "Ball State's little touch of luck",
    "sub": "Ball State's little touch of luck",
    "start": "Meet Frog Baby",
    "startP": "A short animated story about a real statue at Ball State University.",
    "go": "Watch the story",
    "prev": "Back",
    "next": "Next",
    "play": "Play",
    "pause": "Pause",
    "von": "Narration on",
    "voff": "Narration off",
    "quiz": "Take the quiz",
    "replay": "Watch again",
    "q": "Question",
    "of": "of",
    "right": "That's right!",
    "wrong": "Not quite. Try again!",
    "qnext": "Next question",
    "done": "Finish",
    "score": "You did it! Frog Baby is proud of you.",
    "close": "Back to the story",
    "src": "Story facts come from The Ball State Daily News, Ball Bearings magazine, the Clio, Wikipedia, and the Wabash College Elston Collection blog. The character art is a playful illustration, not an exact copy of the bronze statue."
  }
};

const SCENES = [
  {
    "l": [
      "lily",
      "sparkle"
    ],
    "mode": "color",
    "title": true,
    "en": "This is the story of Frog Baby, a little statue with a big smile at Ball State University."
  },
  {
    "l": [
      "studio"
    ],
    "mode": "bronze",
    "badge": {
      "en": "Long ago"
    },
    "en": "Long ago, an artist named Edith Barretto Parsons made a bronze statue of a giggling girl holding two frogs. She often sculpted children holding little animals."
  },
  {
    "l": [
      "museum"
    ],
    "mode": "bronze",
    "badge": {
      "en": "1937"
    },
    "en": "In 1937, Frank C. Ball gave Frog Baby to Ball State. She lived inside the university's art museum."
  },
  {
    "l": [
      "museum",
      "hands",
      "sparkle"
    ],
    "mode": "bronze",
    "nose": "shiny",
    "badge": {
      "en": "Exam time"
    },
    "en": "When exams came, students visited Frog Baby and rubbed her nose for good luck. Rub, rub, rub!"
  },
  {
    "l": [
      "museum"
    ],
    "mode": "bronze",
    "nose": "worn",
    "badge": {
      "en": "Years later"
    },
    "en": "After years and years of rubbing, her bronze nose wore down to a tiny nub. Poor Frog Baby needed a rest."
  },
  {
    "l": [
      "campus",
      "fountain",
      "burst",
      "shine"
    ],
    "mode": "bronze",
    "badge": {
      "en": "1993"
    },
    "en": "In 1993, Frog Baby was fixed up and moved outside to a brand new fountain near Bracken Library."
  },
  {
    "l": [
      "campus",
      "fountain"
    ],
    "mode": "bronze",
    "badge": {
      "en": "The fountain"
    },
    "en": "Little bronze frogs sit around the fountain and spray water. Now Frog Baby has lots of frog friends!"
  },
  {
    "l": [
      "campus",
      "fountain",
      "snow"
    ],
    "mode": "bronze",
    "acc": [
      "hat",
      "scarf"
    ],
    "badge": {
      "en": "Winter"
    },
    "en": "Students started a new tradition. When it gets cold, they dress Frog Baby in a warm hat and scarf."
  },
  {
    "l": [
      "campus",
      "fountain",
      "game"
    ],
    "mode": "bronze",
    "acc": [
      "jersey",
      "helmet"
    ],
    "badge": {
      "en": "Game day"
    },
    "en": "On big game days, she might even wear a jersey and a helmet to cheer on the team!"
  },
  {
    "l": [
      "campus",
      "fountain",
      "spray"
    ],
    "mode": "gold",
    "badge": {
      "en": "2013"
    },
    "en": "One winter, someone sprayed Frog Baby with gold paint. That was not okay, because she belongs to everyone."
  },
  {
    "l": [
      "campus",
      "fountain",
      "caps",
      "shine"
    ],
    "mode": "bronze",
    "badge": {
      "en": "Spring 2013"
    },
    "en": "Bronze experts in Detroit carefully cleaned her. Frog Baby came home just in time for graduation."
  },
  {
    "l": [
      "lily",
      "sparkle",
      "burst"
    ],
    "mode": "color",
    "title": true,
    "end": true,
    "en": "Next time you walk past Bracken Library, wave hello to Frog Baby. We take care of the art we share!"
  }
];

const QUIZ = [
  {
    "en": {
      "q": "What did students rub for good luck before exams?",
      "o": [
        "Frog Baby's nose",
        "The frogs' feet",
        "The museum door"
      ]
    },
    "a": 0
  },
  {
    "en": {
      "q": "Where does Frog Baby live now?",
      "o": [
        "Inside a classroom",
        "In a fountain near Bracken Library",
        "On the football field"
      ]
    },
    "a": 1
  },
  {
    "en": {
      "q": "How do students show they care about Frog Baby today?",
      "o": [
        "They paint her gold",
        "They hide her frogs",
        "They dress her for the weather"
      ]
    },
    "a": 2
  }
];

/* speaking direction for each narration line (used by the recording studio) */
const TONES = [
  "warm and inviting, like opening a favorite picture book",
  "gentle and curious, a little bit of wonder",
  "friendly and proud",
  "playful and giggly, especially on the last words",
  "soft and a little sad, then caring",
  "excited and happy, like good news",
  "cheerful and bouncy",
  "cozy and warm",
  "energetic, like cheering at a game",
  "serious but kind, teaching a gentle lesson",
  "relieved and joyful",
  "warm and friendly goodbye"
];
