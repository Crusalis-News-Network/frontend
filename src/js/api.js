const TEST_CATEGORIES = [
  { name: 'Crusalis Announcements' },
  { name: 'Crusalis Live' },
  { name: 'Opinion Live' },
  { name: 'Sports Live' },
  { name: 'General News' },
  { name: 'Interviews' },
  { name: 'Articles' },
  { name: 'Editorials' },
  //{ name: 'Other' },
  //{ name: 'Town News' }
];

// TODO: get data from API
// dev environment should still use test data by default though

// TODO: move test data to /test, using the same structure as the real API response

const TEST_ARTICLES = [
  {
    id: 1,
    title: 'Nation Allocation Beginning TOMORROW',
    content: 'After brief delays, nation allocations are officially beginning. Every group now awaits nervously hoping to get their pick!',
    author: 'caseey',
    date: '2025-09-21',
    category: 'Crusalis Announcements',
    readTime: 1,
    image: 'https://media.discordapp.net/attachments/1418671028036440144/1419338009504907344/image.png?ex=69037e07&is=69022c87&hm=e353c4dac77fcecff44e1388b285986dc2b70d140787a518273ebda9ec6e0fb6&=&format=webp&quality=lossless'
  },
  {
    id: 2,
    title: 'Kalvrix have confirmed They have got France in AOD3!',
    content: 'They announced that they have secured France in the future Crusalis iteration Age of Discovery 3 in their group discord announcements.  that France was selected as their first option out of the three, with Hungary and Poland being their other two choices.On this occasion, BoeieSnuigje told CNN:  "We are happy to play as France and will be the first France to win this iteration."',
    author: 'DekuFullCowling',
    date: '2025-09-23',
    category: 'Crusalis Live',
    readTime: 1,
    image: 'https://media.discordapp.net/attachments/1418671029055783074/1420088673915109427/sleekshot.png?ex=69039623&is=690244a3&hm=e47bf2d1078080a27531cf179f834e1ee2625fafcfc622a6cdaf9a65fd3fc046&=&format=webp&quality=lossless'
  },
  {
    id: 3,
    title: 'Hibernia has confirmed their pick for Ottomans',
    content: 'Hibernia, which is run by JimPix and Casey, has revealed that they have been assigned their first pick, the Ottomans, and will be playing as them in Age of Discovery 3.',
    author: 'DekuFullCowling',
    date: '2025-09-23',
    category: 'Crusalis Live',
    readTime: 1,
    image: 'https://media.discordapp.net/attachments/1418671029055783074/1420095000837886087/sleekshot.png?ex=69039c08&is=69024a88&hm=1e12389a1475cafc608f018aa0d26395f2960b3f8a837ce32df7154a7eef7940&=&format=webp&quality=lossless'
  },
  {
    id: 4,
    title: 'Oblivia has received their First Choice: Milano',
    content: 'Oblivia, who Ginjer ran, was awarded Milano in Italy on the day of nation allocation. Ginjer told CNN: I went for it because I like Milano!',
    author: 'DekuFullCowling',
    date: '2025-09-23',
    category: 'Crusalis Live',
    readTime: 1
  },
  {
    id: 5,
    title: 'Incoria has been given Denmark',
    content: 'Denmark, the massive megagroup Incoria\'s second option, has been assigned as their country for this iteration. Being too large for Teutonic Order: I was personally unhappy at first," Crinal, one of the Incoria members, told CNN. but for the effect on the server as a whole and on LRP. It will have a significant effect on us. Another Incoria member,\nSunglave, said: For us, it was a fantastic choice.',
    author: 'DekuFullCowling',
    date: '2025-09-23',
    category: 'Crusalis Live',
    readTime: 1,
    image: 'https://media.discordapp.net/attachments/1419685766652629023/1420096300132732948/image.png?ex=69039d3e&is=69024bbe&hm=800c920734d924ca917492732bc6d4db811fac6156d5f61ab159f82ec50141e3&=&format=webp&quality=lossless'
  },
  {
    id: 6,
    title: 'Preyella bags Naples',
    content: 'Naples, a strong Greek colony, was given to the OGs Preyella. With the other options being burgundy and Venice, Preyella got it, declaring that we won the last iteration and that we will try again. The Preyella Leader told CNN: "We are happy to play as Naples and will be the first Naples to win this iteration."',
    author: 'DekuFullCowling',
    date: '2025-09-23',
    category: 'Crusalis Live',
    readTime: 1
  }
];

export async function getArticles() {
  return TEST_ARTICLES;
}

export async function getArticleById(id) {
  return TEST_ARTICLES.find(a => a.id === +id) || null;
}

export async function getCategories() {
  return TEST_CATEGORIES;
}
