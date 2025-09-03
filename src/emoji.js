const emojis = [
    // --- Faces: Smiling & Affection ---
    {
        id: 1,
        emoji: "😀",
        name: "Grinning Face",
        meaning: "The default smile you use for coworkers and distant relatives. A sign of polite acknowledgment or mild awkwardness."
    },
    {
        id: 2,
        emoji: "😂",
        name: "Face with Tears of Joy",
        meaning: "The official punctuation mark for 'that was mildly funny.' Used so often it has lost all meaning, but we can't stop."
    },
    {
        id: 3,
        emoji: "😍",
        name: "Smiling Face with Heart-Eyes",
        meaning: "Expresses a level of adoration usually reserved for puppies, pizza, or a fresh paycheck."
    },
    {
        id: 4,
        emoji: "😊",
        name: "Smiling Face with Smiling Eyes",
        meaning: "A gentle, wholesome smile. Often used when receiving a compliment or trying to be genuinely nice, which feels rare."
    },
    {
        id: 5,
        emoji: "🥰",
        name: "Smiling Face with Hearts",
        meaning: "The visual representation of feeling warm and fuzzy inside. Usually prompted by a video of a cat doing literally anything."
    },
    {
        id: 6,
        emoji: "😇",
        name: "Smiling Face with Halo",
        meaning: "Used to feign innocence after saying something absolutely diabolical. The 'who, me?' of the emoji world."
    },
    {
        id: 7,
        emoji: "😉",
        name: "Winking Face",
        meaning: "Conveys an inside joke, a flirty comment, or the fact that you're probably lying."
    },
    {
        id: 8,
        emoji: "🥲",
        name: "Smiling Face with Tear",
        meaning: "When you're happy but also sad. The official emoji for watching a bittersweet movie ending or being proud of a friend while also being jealous."
    },

    // --- Faces: Silly & Exaggerated ---
    {
        id: 9,
        emoji: "🤪",
        name: "Zany Face",
        meaning: "Represents that 3 AM burst of energy when you've had too much sugar and not enough sleep."
    },
    {
        id: 10,
        emoji: "🥳",
        name: "Partying Face",
        meaning: "The face you make when your plans get canceled and you can finally stay home and do nothing."
    },
    {
        id: 11,
        emoji: "🤯",
        name: "Exploding Head",
        meaning: "For when you learn something trivial but shocking, like the fact that cashews grow on apples."
    },
    {
        id: 12,
        emoji: "😎",
        name: "Smiling Face with Sunglasses",
        meaning: "Used when you've done something effortlessly cool or are about to go on vacation. The official emoji of 'deal with it'."
    },
    {
        id: 13,
        emoji: "🤓",
        name: "Nerd Face",
        meaning: "When you're about to explain a topic nobody asked about in excruciating detail."
    },
    {
        id: 14,
        emoji: "🤠",
        name: "Cowboy Hat Face",
        meaning: "Represents a fleeting moment of chaotic confidence. The official emoji of 'yeehaw, but I have no idea what I'm doing'."
    },
    {
        id: 15,
        emoji: "🤡",
        name: "Clown Face",
        meaning: "Represents you after you've made a foolish mistake, like texting your ex or believing 'I'll just watch one episode'."
    },
    {
        id: 16,
        emoji: "🤑",
        name: "Money-Mouth Face",
        meaning: "The face you make on payday, right before all your bills come out and you're broke again."
    },

    // --- Faces: Neutral, Concerned & Sad ---
    {
        id: 17,
        emoji: "🤔",
        name: "Thinking Face",
        meaning: "Indicates suspicion or polite disagreement. The universal sign for 'I'm judging your questionable life choices'."
    },
    {
        id: 18,
        emoji: "🙃",
        name: "Upside-Down Face",
        meaning: "Represents the thin veil of sanity we all wear. Perfect for when you're smiling through the chaos and everything is on fire."
    },
    {
        id: 19,
        emoji: "😐",
        name: "Neutral Face",
        meaning: "The face of pure, unadulterated '...okay'. The emoji equivalent of a blank stare."
    },
    {
        id: 20,
        emoji: "😑",
        name: "Expressionless Face",
        meaning: "When you are so over it that you don't even have the energy to be angry. The 'I can't even' face."
    },
    {
        id: 21,
        emoji: "😢",
        name: "Crying Face",
        meaning: "For when you're genuinely sad, but not sad enough for the full-on 'loudly crying' emoji. The 'my ice cream fell on the floor' of sadness."
    },
    {
        id: 22,
        emoji: "😭",
        name: "Loudly Crying Face",
        meaning: "For dramatic reactions to anything, from a sad movie to a cute puppy to dropping a single french fry."
    },
    {
        id: 23,
        emoji: "🥺",
        name: "Pleading Face",
        meaning: "The emoji equivalent of puppy dog eyes. Deployed to get what you want, no matter how unreasonable."
    },
    {
        id: 24,
        emoji: "🫠",
        name: "Melting Face",
        meaning: "Used for extreme heat, overwhelming embarrassment, or when you see something so cute you literally cannot function."
    },
    {
        id: 25,
        emoji: "😥",
        name: "Sad but Relieved Face",
        meaning: "The feeling when something bad happened, but it could have been much, much worse. 'My car broke down, but at least it was in my driveway'."
    },
    {
        id: 26,
        emoji: "😮‍💨",
        name: "Face Exhaling",
        meaning: "A dramatic sigh for when you're exhausted, disappointed, or just finished a task that took way too long."
    },
    {
        id: 27,
        emoji: "😬",
        name: "Grimacing Face",
        meaning: "The universal emoji for 'yikes'. Perfect for awkward situations and second-hand embarrassment."
    },

    // --- Faces: Negative & Angry ---
    {
        id: 28,
        emoji: "😠",
        name: "Angry Face",
        meaning: "For when you're genuinely annoyed, like when someone takes your reserved parking spot."
    },
    {
        id: 29,
        emoji: "😤",
        name: "Face with Steam From Nose",
        meaning: "The cartoonish level of frustration you feel when you can't open a jar."
    },
    {
        id: 30,
        emoji: "😒",
        name: "Unamused Face",
        meaning: "The ultimate side-eye. Deployed when you hear the same bad joke for the tenth time."
    },

    // --- Gestures & Hands ---
    {
        id: 31,
        emoji: "👍",
        name: "Thumbs Up",
        meaning: "The most passive-aggressive emoji in existence. A conversation ender that says 'I have read your message and have no further comment'."
    },
    {
        id: 32,
        emoji: "👌",
        name: "OK Hand",
        meaning: "A sign of approval that says 'perfecto' or 'this is fine' while the room is burning down."
    },
    {
        id: 33,
        emoji: "🙏",
        name: "Folded Hands",
        meaning: "Often mistaken for a high-five. Used to beg the universe for small favors, like your code compiling on the first try."
    },
    {
        id: 34,
        emoji: "🙌",
        name: "Raising Hands",
        meaning: "A sign of praise or celebration. Can also mean 'finally!' when someone replies to your text from three days ago."
    },
    {
        id: 35,
        emoji: "👏",
        name: "Clapping Hands",
        meaning: "A sarcastic slow-clap for a job poorly done or a genuinely enthusiastic applause for a good meme."
    },
    {
        id: 36,
        emoji: "💅",
        name: "Nail Polish",
        meaning: "Indicates a moment of sass, confidence, or unbothered behavior. The emoji version of a hair flip."
    },
    {
        id: 37,
        emoji: "💪",
        name: "Flexed Biceps",
        meaning: "Represents carrying all the groceries in one trip. The peak of human strength and determination."
    },
    {
        id: 38,
        emoji: "👀",
        name: "Eyes",
        meaning: "The official emoji of gossip. Deployed when you see drama unfolding and you're here for the tea."
    },
    {
        id: 39,
        emoji: "🤌",
        name: "Pinched Fingers",
        meaning: "Used to signify perfection, or to ask 'what are you even talking about?' A gesture of beautiful frustration."
    },
    {
        id: 40,
        emoji: "🤝",
        name: "Handshake",
        meaning: "The agreement you and your friend make to 'start going to the gym tomorrow'."
    },
    {
        id: 41,
        emoji: "🤞",
        name: "Crossed Fingers",
        meaning: "Hoping for the best when you definitely should have prepared more."
    },

    // --- People & Roles ---
    {
        id: 42,
        emoji: "🧑‍💻",
        name: "Person at Computer",
        meaning: "The 'I'm working hard' emoji you send while actually browsing memes and online shopping."
    },
    {
        id: 43,
        emoji: "🧘",
        name: "Person in Lotus Position",
        meaning: "Me, pretending to be calm and centered while my brain has 100 tabs open."
    },
    {
        id: 44,
        emoji: "🤦",
        name: "Person Facepalming",
        meaning: "For when someone says something so dumb that words are no longer sufficient."
    },
    {
        id: 45,
        emoji: "🤷",
        name: "Person Shrugging",
        meaning: "The ultimate expression of 'I don't know and I don't care.' The spirit of glorious indifference."
    },
    {
        id: 46,
        emoji: "🧑‍🚀",
        name: "Astronaut",
        meaning: "Represents wanting to escape your responsibilities by leaving the planet entirely."
    },

    // --- Animals & Nature ---
    {
        id: 47,
        emoji: "🦁",
        name: "Lion",
        meaning: "The majestic confidence you feel right before you spectacularly mispronounce a word."
    },
    {
        id: 48,
        emoji: "🐼",
        name: "Panda",
        meaning: "Symbolizes a love for eating and sleeping. The official spirit animal of the internet."
    },
    {
        id: 49,
        emoji: "🦋",
        name: "Butterfly",
        meaning: "The feeling in your stomach when you press 'send' on a risky text."
    },
    {
        id: 50,
        emoji: "🐸",
        name: "Frog",
        meaning: "Represents minding your own business while secretly judging everyone. The official emoji for 'but that's none of my business'."
    },
    {
        id: 51,
        emoji: "🐢",
        name: "Turtle",
        meaning: "The speed at which your internet connection moves when you're trying to stream something."
    },
    {
        id: 52,
        emoji: "🐱",
        name: "Cat Face",
        meaning: "Represents pure chaos, an unearned sense of superiority, and the desire for a nap."
    },
    {
        id: 53,
        emoji: "🐶",
        name: "Dog Face",
        meaning: "Represents unwavering loyalty and getting excited about ridiculously simple things, like a walk."
    },
    {
        id: 54,
        emoji: "🌳",
        name: "Deciduous Tree",
        meaning: "A reminder to 'touch grass' after spending 12 hours staring at a screen."
    },
    {
        id: 55,
        emoji: "🌊",
        name: "Water Wave",
        meaning: "Indicates you're either at the beach or you've just been overwhelmed by a small inconvenience."
    },
    {
        id: 56,
        emoji: "🔥",
        name: "Fire",
        meaning: "Either 'this is amazing' or 'this is a complete disaster.' There is no in-between."
    },
    {
        id: 57,
        emoji: "☀️",
        name: "Sun",
        meaning: "Used to passive-aggressively remind your friends in colder climates that you're enjoying perfect weather."
    },
    {
        id: 58,
        emoji: "🌙",
        name: "Crescent Moon",
        meaning: "The official sign-off for 'I'm going to scroll on my phone in bed for three more hours'."
    },
    {
        id: 59,
        emoji: "⭐",
        name: "Star",
        meaning: "Awarded for completing a basic adult task, like making a phone call."
    },

    // --- Food & Drink ---
    {
        id: 60,
        emoji: "🍕",
        name: "Pizza",
        meaning: "The solution to most of life's problems. A circle of happiness."
    },
    {
        id: 61,
        emoji: "🥑",
        name: "Avocado",
        meaning: "Symbolizes your inability to afford a house, but hey, at least you have brunch."
    },
    {
        id: 62,
        emoji: "🌮",
        name: "Taco",
        meaning: "The reason we all look forward to Tuesday."
    },
    {
        id: 63,
        emoji: "🍩",
        name: "Doughnut",
        meaning: "The empty calories you've definitely earned by simply existing today."
    },
    {
        id: 64,
        emoji: "🍫",
        name: "Chocolate Bar",
        meaning: "Emergency emotional support in a foil wrapper."
    },
    {
        id: 65,
        emoji: "🍿",
        name: "Popcorn",
        meaning: "Used when you're just here to watch the drama unfold. Pass the salt."
    },
    {
        id: 66,
        emoji: "☕",
        name: "Hot Beverage",
        meaning: "The cup of lifeblood required to transform from a zombie into a barely functioning human."
    },
    {
        id: 67,
        emoji: "🍹",
        name: "Tropical Drink",
        meaning: "Represents pretending you're on a beach when you're actually just in your backyard."
    },
    {
        id: 68,
        emoji: "🥂",
        name: "Clinking Glasses",
        meaning: "Toasting to our collective ability to make it through another week fueled by caffeine and spite."
    },

    // --- Travel & Places ---
    {
        id: 69,
        emoji: "✈️",
        name: "Airplane",
        meaning: "The universal signal that you're about to spam everyone's feed with vacation photos."
    },
    {
        id: 70,
        emoji: "🚀",
        name: "Rocket",
        meaning: "When your brilliant, half-baked idea is about to either succeed spectacularly or explode on the launchpad."
    },
    {
        id: 71,
        emoji: "🗺️",
        name: "World Map",
        meaning: "Used when planning an elaborate trip that you know you can't actually afford."
    },
    {
        id: 72,
        emoji: "🏖️",
        name: "Beach with Umbrella",
        meaning: "The place your mind goes when you receive another email with the subject line 'Just circling back'."
    },
    {
        id: 73,
        emoji: "🏠",
        name: "House",
        meaning: "A mythical place you're supposed to clean but instead you just move piles of stuff around."
    },

    // --- Activities & Sports ---
    {
        id: 74,
        emoji: "🎨",
        name: "Artist Palette",
        meaning: "Represents the creative mess you've made while trying a 5-minute craft you saw online."
    },
    {
        id: 75,
        emoji: "🎬",
        name: "Clapper Board",
        meaning: "Used to signal the start of more drama. 'And... action!'"
    },
    {
        id: 76,
        emoji: "🎤",
        name: "Microphone",
        meaning: "For when you're about to drop a truth bomb or an unsolicited opinion in the group chat."
    },
    {
        id: 77,
        emoji: "🏀",
        name: "Basketball",
        meaning: "Represents crumpled up paper successfully thrown into a trash can from across the room."
    },
    {
        id: 78,
        emoji: "📚",
        name: "Books",
        meaning: "Represents the stack of books on your nightstand that you swear you're going to read one day."
    },

    // --- Objects & Symbols ---
    {
        id: 79,
        emoji: "💡",
        name: "Light Bulb",
        meaning: "The emoji for a 'brilliant idea' that you'll probably forget to write down in five minutes."
    },
    {
        id: 80,
        emoji: "💣",
        name: "Bomb",
        meaning: "Signifies that you are about to drop some shocking news or a hot take in the group chat."
    },
    {
        id: 81,
        emoji: "💎",
        name: "Gem Stone",
        meaning: "Used to describe a rare and valuable piece of advice, like 'have you tried turning it off and on again?'"
    },
    {
        id: 82,
        emoji: "⏰",
        name: "Alarm Clock",
        meaning: "A symbol of pure evil and the enemy of dreams. The official mascot of Monday mornings."
    },
    {
        id: 83,
        emoji: "🛒",
        name: "Shopping Cart",
        meaning: "Represents the online shopping cart you fill with $500 worth of stuff before closing the tab in shame."
    },
    {
        id: 84,
        emoji: "✨",
        name: "Sparkles",
        meaning: "Used to add ~pizzazz~ to any statement. Makes mundane things like 'I did laundry' sound magical and important."
    },
    {
        id: 85,
        emoji: "🎉",
        name: "Party Popper",
        meaning: "Congratulations! You completed a basic task, like making it to Friday without having a meltdown."
    },
    {
        id: 86,
        emoji: "🎁",
        name: "Wrapped Gift",
        meaning: "That one package you ordered and forgot about, making its arrival a surprise gift from your past self."
    },
    {
        id: 87,
        emoji: "🏆",
        name: "Trophy",
        meaning: "Awarded to yourself for small victories, like putting on real pants for a video call."
    },
    {
        id: 88,
        emoji: "💔",
        name: "Broken Heart",
        meaning: "For when you're genuinely heartbroken or when your favorite restaurant is closed."
    },
    {
        id: 89,
        emoji: "💯",
        name: "Hundred Points",
        meaning: "The most emphatic way to agree with someone. 'Keep it 100'."
    },
    {
        id: 90,
        emoji: "💀",
        name: "Skull",
        meaning: "The new '😂'. Used when a joke is so funny it has caused your untimely demise. RIP me."
    },
    {
        id: 91,
        emoji: "🪦",
        name: "Headstone",
        meaning: "An alternative to the skull emoji for when you're 'literally dead' from laughter. Slightly more formal."
    },
    {
        id: 92,
        emoji: "🗿",
        name: "Moai",
        meaning: "The ultimate deadpan reaction. Used when you are so unimpressed or baffled that words fail you."
    },
    {
        id: 93,
        emoji: "🗑️",
        name: "Wastebasket",
        meaning: "Where bad ideas, terrible opinions, and your latest attempt at a diet belong."
    },
    {
        id: 94,
        emoji: "🚩",
        name: "Triangular Flag",
        meaning: "A red flag. Used to point out obvious warning signs in people, situations, or that sketchy email in your inbox."
    },
    {
        id: 95,
        emoji: "🧠",
        name: "Brain",
        meaning: "Used when you make a clever joke that only two people will understand. A tribute to your galaxy-brain moment."
    },
    {
        id: 96,
        emoji: "💤",
        name: "Zzz",
        meaning: "The topic of conversation is so boring you've fallen asleep mid-text."
    },
    {
        id: 97,
        emoji: "✅",
        name: "Check Mark Button",
        meaning: "The deep satisfaction of checking off the easiest item on your to-do list just to feel productive."
    },
    {
        id: 98,
        emoji: "➡️",
        name: "Right Arrow",
        meaning: "Used to point out the obvious or to direct someone's attention to the joke they clearly missed."
    },
    {
        id: 99,
        emoji: "📢",
        name: "Loudspeaker",
        meaning: "For when you have an important announcement, like 'I'm hungry again'."
    },
    {
        id: 100,
        emoji: "⚰️",
        name: "Coffin",
        meaning: "You are dead. Deceased. Perished. The joke was that funny. An escalation of the skull emoji."
    },
    {
        id: 101,
        emoji: "🤫",
        name: "Shushing Face",
        meaning: "The universal sign for 'I know something you don't' or 'please stop talking, you're embarrassing us'."
    },
    {
        id: 102,
        emoji: "🥴",
        name: "Woozy Face",
        meaning: "The face you make after two drinks, or after standing up too fast. The official emoji of 'I'm fine, everything's just a bit blurry'."
    },
    {
        id: 103,
        emoji: "🥱",
        name: "Yawning Face",
        meaning: "The polite way of saying 'I am so incredibly bored by this conversation that I'm losing the will to live'."
    },
    {
        id: 104,
        emoji: "😈",
        name: "Smiling Face with Horns",
        meaning: "Used to signal a moment of minor, mischievous evil, like hiding the remote or eating the last slice of pizza."
    },
    {
        id: 105,
        emoji: "🧐",
        name: "Face with Monocle",
        meaning: "For when you're examining something with intense scrutiny, like a typo in someone else's argument."
    },
    {
        id: 106,
        emoji: "✍️",
        name: "Writing Hand",
        meaning: "The 'taking notes' emoji, used when someone gives a piece of advice so good (or so bad) that it needs to be documented."
    },
    {
        id: 107,
        emoji: "🤏",
        name: "Pinching Hand",
        meaning: "Indicates a tiny amount of something, like the amount of patience you have left on a Friday afternoon."
    },
    {
        id: 108,
        emoji: "🤳",
        name: "Selfie",
        meaning: "Represents the 50 photos you took to get that one perfect shot where the lighting was just right."
    },
    {
        id: 109,
        emoji: "🕵️",
        name: "Detective",
        meaning: "Represents you, after 3 hours of deep-diving into the social media of your new coworker's cousin's dog."
    },
    {
        id: 110,
        emoji: "🧙",
        name: "Wizard",
        meaning: "The magic you feel when your code works on the first try or you perfectly parallel park."
    },
    {
        id: 111,
        emoji: "🧟",
        name: "Zombie",
        meaning: "How you feel and look before your first cup of coffee in the morning."
    },
    {
        id: 112,
        emoji: "🦀",
        name: "Crab",
        meaning: "The mood you're in when things aren't going your way. Grumpy, sideways, and ready to pinch."
    },
    {
        id: 113,
        emoji: "🦉",
        name: "Owl",
        meaning: "Represents the 'wise' friend who stays up all night binge-watching shows and then gives you life advice."
    },
    {
        id: 114,
        emoji: "🦖",
        name: "T-Rex",
        meaning: "A symbol of raw, unstoppable power, except when trying to reach something on the top shelf."
    },
    {
        id: 115,
        emoji: "🦍",
        name: "Gorilla",
        meaning: "The final form you take when you can't open a stubborn jar lid."
    },
    {
        id: 116,
        emoji: "🍔",
        name: "Hamburger",
        meaning: "The meal you crave after making the questionable decision to start a diet."
    },
    {
        id: 117,
        emoji: "🍟",
        name: "French Fries",
        meaning: "The food you order 'for the table' but have no intention of actually sharing."
    },
    {
        id: 118,
        emoji: "🥡",
        name: "Takeout Box",
        meaning: "The symbol of giving up on cooking for the night. A box of pure relief."
    },
    {
        id: 119,
        emoji: "🎂",
        name: "Birthday Cake",
        meaning: "The one day a year you can eat pure sugar for breakfast without judgment."
    },
    {
        id: 120,
        emoji: "🍾",
        name: "Bottle with Popping Cork",
        meaning: "For celebrating major life events or the fact that you finally folded all your laundry."
    },
    {
        id: 121,
        emoji: "🚂",
        name: "Locomotive",
        meaning: "The unstoppable train of your bad decisions gaining momentum."
    },
    {
        id: 122,
        emoji: "🏰",
        name: "Castle",
        meaning: "Represents the elaborate fortress of excuses you've built to avoid going out."
    },
    {
        id: 123,
        emoji: "🎮",
        name: "Video Game",
        meaning: "The reason you told your friends you were 'busy' tonight."
    },
    {
        id: 124,
        emoji: "🔑",
        name: "Key",
        meaning: "A mythical object that disappears the moment you're late for something important."
    },
    {
        id: 125,
        emoji: "🔒",
        name: "Locked",
        meaning: "The status of your phone screen when a friend asks to 'quickly borrow it'."
    },
    {
        id: 126,
        emoji: "💸",
        name: "Money with Wings",
        meaning: "A visual representation of your salary on the 1st of the month versus the 2nd."
    },
    {
        id: 127,
        emoji: "📎",
        name: "Paperclip",
        meaning: "Represents holding it all together, barely. The corporate equivalent of a bobby pin."
    },
    {
        id: 128,
        emoji: "🔪",
        name: "Kitchen Knife",
        meaning: "The passive-aggressive energy you bring to a conversation when you're just a little bit angry."
    },
    {
        id: 129,
        emoji: "🪑",
        name: "Chair",
        meaning: "The thing in your room that holds all the clothes that are not dirty enough for the laundry but not clean enough for the closet."
    },
    {
        id: 130,
        emoji: "⚗️",
        name: "Alembic",
        meaning: "Used when you're concocting a plan that is either brilliant or will end in absolute disaster."
    },
    {
        id: 131,
        emoji: "🧽",
        name: "Sponge",
        meaning: "Represents your brain's ability to absorb useless trivia while forgetting important deadlines."
    },
    {
        id: 132,
        emoji: "🪓",
        name: "Axe",
        meaning: "The feeling of wanting to 'cut' someone out of the conversation when they won't stop talking."
    },
    {
        id: 133,
        emoji: "🥵",
        name: "Hot Face",
        meaning: "The feeling of being in a car with no AC in July, or seeing a text that makes you sweat."
    },
    {
        id: 134,
        emoji: "🥶",
        name: "Cold Face",
        meaning: "The face you make when you see the bill after a group dinner, or when you accidentally open your front-facing camera."
    },
    {
        id: 135,
        emoji: "🤥",
        name: "Lying Face",
        meaning: "The face of someone who has definitely read and agreed to the terms and conditions."
    },
    {
        id: 136,
        emoji: "🤢",
        name: "Nauseated Face",
        meaning: "The physical reaction to hearing a cringey story or remembering something embarrassing you did five years ago."
    },
    {
        id: 137,
        emoji: "🤧",
        name: "Sneeze Face",
        meaning: "Represents either actual allergies or faking a cold to get out of plans."
    },
    {
        id: 138,
        emoji: "👑",
        name: "Crown",
        meaning: "For that friend who is the undisputed queen or king of drama."
    },
    {
        id: 139,
        emoji: "👟",
        name: "Running Shoe",
        meaning: "A symbol of your good intention to go for a run, before deciding the couch is a better option."
    },
    {
        id: 140,
        emoji: "👻",
        name: "Ghost",
        meaning: "The act of leaving a party without saying goodbye. Also represents your social energy after 9 PM."
    },
    {
        id: 141,
        emoji: "👽",
        name: "Alien",
        meaning: "How you feel when you're the only one in the group chat who hasn't seen the latest trending show."
    },
    {
        id: 142,
        emoji: "🤖",
        name: "Robot",
        meaning: "How you sound on a conference call saying 'Yes, that's a great point, John' for the fifth time."
    },
    {
        id: 143,
        emoji: "🦊",
        name: "Fox",
        meaning: "Represents the cleverness required to 'accidentally' get the bigger slice of cake."
    },
    {
        id: 144,
        emoji: "🐔",
        name: "Chicken",
        meaning: "Represents the moment of cowardice when you type out a risky text and then quickly delete it."
    },
    {
        id: 145,
        emoji: "🐌",
        name: "Snail",
        meaning: "The speed of your motivation on a Monday morning. Also, the pace of the 'fast' lane on the highway."
    },
    {
        id: 146,
        emoji: "🥓",
        name: "Bacon",
        meaning: "The delicious, crispy sound of a bad decision that you will never regret."
    },
    {
        id: 147,
        emoji: "🥨",
        name: "Pretzel",
        meaning: "Represents the contortions your brain goes through trying to solve a simple math problem without a calculator."
    },
    {
        id: 148,
        emoji: "🧇",
        name: "Waffle",
        meaning: "The indecisiveness you feel when faced with too many good options. Also, delicious."
    },
    {
        id: 149,
        emoji: "☎️",
        name: "Telephone",
        meaning: "An ancient artifact used for making calls, an activity that now causes deep anxiety for an entire generation."
    },
    {
        id: 150,
        emoji: "📺",
        name: "Television",
        meaning: "The magical box that asks 'Are you still watching?' in a deeply judgmental tone after your 8-hour binge."
    },
    {
        id: 151,
        emoji: "🔋",
        name: "Battery",
        meaning: "A visual representation of my social battery, usually hovering around 10% by noon."
    },
    {
        id: 152,
        emoji: "🩹",
        name: "Adhesive Bandage",
        meaning: "The simple, inadequate solution you apply to a huge, complex life problem. 'Feeling sad? Just go for a walk!'"
    },
    {
        id: 153,
        emoji: "🪚",
        name: "Carpentry Saw",
        meaning: "The overwhelming urge to cut someone off when they start a story with 'So, long story short...' and it's anything but."
    },
    {
        id: 154,
        emoji: "🧲",
        name: "Magnet",
        meaning: "The mysterious force that pulls you towards the snack aisle when you only went to the store for milk."
    },
    {
        id: 155,
        emoji: "🧪",
        name: "Test Tube",
        meaning: "Used when you're experimenting with a questionable recipe or a very risky text message."
    },
    {
        id: 156,
        emoji: "🧬",
        name: "DNA",
        meaning: "The reason you can't resist buying snacks at the checkout counter. It's in your genes."
    },
    {
        id: 157,
        emoji: "🦠",
        name: "Microbe",
        meaning: "The way gossip spreads through an office or group chat at an alarming rate."
    },
    {
        id: 158,
        emoji: "🪞",
        name: "Mirror",
        meaning: "That terrifying object that reveals your true form when you accidentally open your front-facing camera."
    },
    {
        id: 159,
        emoji: "🪜",
        name: "Ladder",
        meaning: "Represents the desperate attempt to climb out of the hole of procrastination you dug for yourself."
    },
    {
        id: 160,
        emoji: "🪤",
        name: "Mousetrap",
        meaning: "A metaphor for 'free' trial offers that come with hidden, automatic subscription renewals."
    },
    {
        id: 161,
        emoji: "⚱️",
        name: "Funeral Urn",
        meaning: "The container for your hopes and dreams after you look at your bank account balance."
    },
    {
        id: 162,
        emoji: "🥊",
        name: "Boxing Glove",
        meaning: "The mental state required to fight the Sunday Scaries and prepare for Monday."
    },
    {
        id: 163,
        emoji: "🎱",
        name: "Pool 8 Ball",
        meaning: "The source of all your questionable life advice. 'Signs point to yes... you should order the pizza.'"
    },
    {
        id: 164,
        emoji: "⚠️",
        name: "Warning",
        meaning: "A sign that you're about to share an unsolicited opinion or a hot take that nobody asked for."
    },
    {
        id: 165,
        emoji: "🚫",
        name: "Prohibited",
        meaning: "My brain, when I try to be productive after 3 PM on a Friday."
    },
    {
        id: 166,
        emoji: "💤",
        name: "Zzz",
        meaning: "A polite way to indicate that the current conversation is so boring you've fallen asleep mid-text."
    },
    {
        id: 167,
        emoji: "🌪️",
        name: "Tornado",
        meaning: "The state of my room five minutes before guests are scheduled to arrive."
    },
    {
        id: 168,
        emoji: "🦥",
        name: "Sloth",
        meaning: "My spirit animal on any day that ends with 'y'. The embodiment of 'I'll do it tomorrow'."
    },
    {
        id: 169,
        emoji: "༎ຶ‿༎ຶ",
        name: "Crying Smile Kaomoji",
        meaning: "When you have to pretend everything is fine but you're crying on the inside. The text version of the 'Smiling Face with Tear' emoji."
    },
    {
        id: 170,
        emoji: "🪄",
        name: "Magic Wand",
        meaning: "The magical disappearing act my entire salary performs three days after payday."
    },
    {
        id: 171,
        emoji: "✨",
        name: "Sparkles",
        meaning: "Used to add ~pizzazz~ to any statement. Makes mundane things like 'I did laundry' sound magical and important."
    },
    {
        id: 172,
        emoji: "🧺",
        name: "Basket",
        meaning: "The designated holding place for clean laundry that you're just not emotionally ready to fold yet."
    },
    {
        id: 173,
        emoji: "🧻",
        name: "Roll of Paper",
        meaning: "A symbol of being domestically prepared, or a reminder of the great currency crisis of 2020."
    },
    {
        id: 174,
        emoji: "🧼",
        name: "Soap",
        meaning: "The feeling of wanting to scrub your eyes and brain clean after seeing a cursed post online."
    },
    {
        id: 175,
        emoji: "📈",
        name: "Chart Increasing",
        meaning: "A live graph of my anxiety levels as an important deadline approaches."
    },
    {
        id: 176,
        emoji: "📉",
        name: "Chart Decreasing",
        meaning: "A live graph of my motivation and bank account balance after a long weekend."
    },
    {
        id: 177,
        emoji: "📌",
        name: "Pushpin",
        meaning: "Used to 'pin' a comment in the group chat that was so savage it needs to be immortalized."
    },
    {
        id: 178,
        emoji: "🔗",
        name: "Link",
        meaning: "The chain of 37 Wikipedia articles you've read, starting with a simple question and ending on the history of obscure naval battles."
    },
    {
        id: 179,
        emoji: "✂️",
        name: "Scissors",
        meaning: "The energy needed to cut toxic people (or your own bangs at 2 AM) out of your life."
    },
    {
        id: 180,
        emoji: "🪅",
        name: "Piñata",
        meaning: "Represents me, barely holding it together, knowing one small tap will make all my problems spill out in a shower of candy and regret."
    },
    {
        id: 181,
        emoji: "🪃",
        name: "Boomerang",
        meaning: "That embarrassing memory from 2007 that keeps coming back to haunt you right as you're trying to fall asleep."
    },
    {
        id: 182,
        emoji: "🛸",
        name: "Flying Saucer",
        meaning: "The speed at which I'm leaving a situation that has become too awkward. 'I must go, my people need me'."
    },
    {
        id: 183,
        emoji: "🧅",
        name: "Onion",
        meaning: "The many layers of a problem that make you want to cry the deeper you get."
    },
    {
        id: 184,
        emoji: "🧊",
        name: "Ice Cube",
        meaning: "The vibe you give someone when you're being subtly cold and passive-aggressive."
    },
    {
        id: 185,
        emoji: "🪨",
        name: "Rock",
        meaning: "My emotional state: solid, unmoving, and not processing a single thing. Also, the home I live under when a new trend appears."
    },
    {
        id: 186,
        emoji: "🪵",
        name: "Wood",
        meaning: "The feeling of being 'board' out of your mind during a long meeting."
    },
    {
        id: 187,
        emoji: "⚙️",
        name: "Gear",
        meaning: "The single, rusty gear turning in my brain when someone asks me a complex question before I've had coffee."
    },
    {
        id: 188,
        emoji: "🚧",
        name: "Construction",
        meaning: "The series of small, inconvenient obstacles that appear whenever you're in a hurry."
    },
    {
        id: 189,
        emoji: "🪢",
        name: "Knot",
        meaning: "The state of my headphone cables the exact moment I put them in my pocket."
    },
    {
        id: 190,
        emoji: "🪡",
        name: "Sewing Needle",
        meaning: "The level of precision required to perfectly thread a witty reply into a chaotic group chat."
    },
    {
        id: 191,
        emoji: "♟️",
        name: "Chess Pawn",
        meaning: "The feeling of being a small, expendable piece in someone else's grand plan (e.g., at the office)."
    },
    {
        id: 192,
        emoji: "📯",
        name: "Postal Horn",
        meaning: "For making a grand, unnecessary announcement that could have been a simple text."
    },
    {
        id: 193,
        emoji: "⚗️",
        name: "Alembic",
        meaning: "Used when you're concocting a plan that is either brilliant or will end in absolute disaster. No in-between."
    },
    {
        id: 194,
        emoji: "🪦",
        name: "Headstone",
        meaning: "An alternative to the skull emoji for when you're 'literally dead' from laughter. Slightly more formal."
    },
    {
        id: 195,
        emoji: "⚰️",
        name: "Coffin",
        meaning: "You are dead. Deceased. Perished. The joke was that funny. An escalation of the skull emoji."
    },
    {
        id: 196,
        emoji: "🪤",
        name: "Mousetrap",
        meaning: "A metaphor for 'free' trial offers that come with hidden, automatic subscription renewals."
    },
    {
        id: 197,
        emoji: "👁️‍🗨️",
        name: "Eye in Speech Bubble",
        meaning: "The official emoji of 'I am a witness to this drama'. Used when you have seen the receipts and are ready to testify."
    },
    {
        id: 198,
        emoji: "🪙",
        name: "Coin",
        meaning: "Represents my entire net worth after buying a single fancy coffee."
    },
    {
        id: 199,
        emoji: "📜",
        name: "Scroll",
        meaning: "The long, dramatic text message you're about to read from a friend detailing a minor inconvenience."
    },
    {
        id: 200,
        emoji: "🧯",
        name: "Fire Extinguisher",
        meaning: "What you need to put out the dumpster fire that is the comments section on the internet."
    }
];

export default emojis;