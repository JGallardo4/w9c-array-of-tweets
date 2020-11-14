var tweet_contents = [
    "The Condylura cristata or Star-Nosed Mole lives in North America. They have unique, touch-sensitive star-like organs on their noses, made up of more than 25,000 sensory receptors they use to feel their way around! They are also the only mammals that sniff out prey underwater!",

    "The Opisthoteuthis californiana or Flapjack Octopus is native to California, Japan, The Bering Sea, The Sea of Okhotsk and Honshū. These cute little octopi hunt prey by pouncing, compress themselves and appear like pancakes or flapjacks and even hide in crevices and under rocks!",

    "The Civettictis civetta or African Civet lives in Africa. These unique looking animals have raccoon-like heads, as well as patterns and markings reminiscent of leopards, jaguars and cheetahs! They also located prey, which includes toxin invertebrates, by sound instead of sight!",

    "The Maratus, commonly known as Peacock Spiders are a genus of more than 50 spiders found throughout Australia. The males have brightly colored and even iridescent scales and hairs that reflect light and even form unique patterns! They use those features to attract mates!",

    "The Rhinoptilus bitorquatus or Jerdon's Courser is endemic to The Sri Lankamalleswara Wildlife Sanctuary and The Eastern Ghats of Andhra Pradesh, a state in Inida. Discovered by and named after Thomas C. Jerdon in 1848, these cute birds were rediscovered in 1986, 138 years later!",

    "The Columba argentina or Silvery Pigeon, also referred to as The Silvery or Grey Wood-Pigeon, lives throughout Indonesia and Malaysia. They hadn't been seen since the early-20th century and many thought they were extinct. They were rediscovered in 2008, more than 100 years later!",

    "The Turnix worcesteri or Worcester's Buttonquail, also known The Luzon Buttonquail or Pugo is endemic to Luzon in The Philippines. Most people only knew what they looked like, from pictures, as they hadn't been seen, since 1904! They were rediscovered 105 years later, in 2009!",

    "The Telmatobufo venustus is endemic to Chile, as well as the western slopes of The Andes in the regions of Maule and Biobío. These colorful frogs were described in 1899 and vanished shortly thereafter! They weren't rediscovered until 1999, 100 years later!",

    "In 1998, Sebastião Salgado founded Instituto Terra and planted over 2 million seeds, from nearly 300 species of plants! In 20 years, 1,754 acres of rainforest were replanted, and 293 plants, 172 birds, 15 reptile and amphibians and 33 mammals which were endangered are thriving!",

    "In 2009, marine ecologist Robert Pitman saw a humpback whale, save a seal from orcas! He found 115 documented interactions between humpback whales and orcas from 1951 to 2012, where the whales saved animals and even people for the orcas, in 89% of the events, all over the world!",

    "During the filming of movies that involve mean dogs, their wagging tails were replaced using CGI and many shots were taken to make them look menacing! Meaning, the dogs are were happy, with their tongues hanging out, because they knew they were doing a good job during filming!",

    "A 2001 study done by university professor  Keith Kendrick, revealed that sheep recognize facial expressions and even recognize and remember at least 50 individual faces for more than two years recognize! He also discovered they enjoy it when people smile!",

    "The Ctenodactylus vali or Val's Gundi is native to Northeastern Morocco, several areas in Algeria and Libya. These cute little rodents, which are pretty similar to Guinea pigs, are the world's smallest species of gundi, at just 6.9 inches in length and weigh only 6.1 ounces!",

    "The Hapalemur griseus or Eastern Lesser Bamboo Lemur, also known as The Gray Gentle Lemur or Mahajanga Lemur is endemic to Madagascar. These cute little animals, are one of the smallest bamboo lemurs on Earth, reaching lengths of only 11 to 13 inches and weigh 2 pounds!",

    "The Canis aureus or Golden Jackal is found throughout Afghanistan, Asia, Bangladesh, Bhutan, Cambodia, Europe, India, Laos, Nepal, Pakistan and Sri Lanka. They are the smallest species of jackal in the world, reaching lengths of 27 to 33 inches and weigh 13 to 31 pounds!"
];

var username = "DYKAnimalFacts";

function get_random_age(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var tweets = [];

tweet_contents.forEach((elem, index) => {
    tweets[index] = {
        tweet: elem,
        username: username,
        created_at: `11-${index + 1}-2020`,
        age: get_random_age(12, 30)
    }
});

console.log("Here's a few animal facts from DYKAnimalFacts:", '\n');

function print_tweets(tweet_array) {
    tweet_array.forEach((item) => {
        console.log("Tweet: " + item.tweet);
        console.log("Username: " + item.username);
        console.log("Age: " + item.age);
        console.log("Created at: " + item.created_at, '\n');
        console.log("-------------", '\n');
    });
}

// W9E

function is_user_of_age(tweet_obj) {
    return tweet_obj.age >= 18 ? true : false;
}

function filter_underage_users(tweets_array) {
    return tweets_array.filter(is_user_of_age);
}

print_tweets(filter_underage_users(tweets));