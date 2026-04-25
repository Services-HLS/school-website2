// Gallery image lists scraped from learningworldmontessori.co.uk
const CDN = "https://file-hosting.dashnexpages.net/learningworldmontessori";

export const galleryClassroom = [
  "a14.jpeg","pas.jpeg","11.jpeg","18.jpeg","5.jpeg","8.jpeg","nut.jpeg","30.jpeg",
  "b5.jpeg","1.jpeg","54.jpeg","maths.jpeg","16.jpeg","22.jpeg","body.jpg","art.jpeg",
  "9.jpeg","14.jpeg","b3.jpeg","19.jpg","20.jpeg","b2.jpeg","23.jpeg","13.jpeg",
  "12.jpeg","nadia.jpeg","13.jpg","39.jpeg","43.jpeg","10.jpeg","14.jpg","56.jpeg",
  "b4.jpeg","15.jpeg","6.jpeg","3.jpeg","24.JPG","4.jpeg","21.jpeg","7.jpeg",
  "25.jpg","27.jpeg","art3.jpeg","26.jpeg","2.JPG",
].map((f) => `${CDN}/Class/${f}`);

export const galleryOutdoor = [
  "25.JPG","t-3.jpeg","19.jpg","a12.jpeg","36.jpeg","16.jpg","tennis.jpeg","7.jpeg",
  "cl.jpeg","18.jpg","28.JPG","a6.jpeg","6.jpeg","13.JPG","t-1.jpeg","t-2.jpeg",
  "10.jpeg","a10.jpeg","zumba.jpeg","20.jpg","1.jpg","21.JPG","a17.jpeg","2.jpg",
  "14.jpeg","a16.jpeg","17.jpg","3.jpg","a21.jpeg","music.jpeg","farm.jpg","5.JPG",
  "a4.jpeg","29.jpeg","55.JPG","4.JPG","a13.jpeg","41.jpeg","11.JPG","26.jpg",
  "31.jpeg","5.jpeg","b3.jpeg",
].map((f) => `${CDN}/Outdoor/${f}`);

export const galleryFun = [
  "51.jpeg","6.jpeg","4.jpeg","a15.jpeg","3.jpeg","7.JPG","a1.jpeg","a7.jpeg",
  "contact.jpeg","1.jpeg","46.jpeg","bb.jpg","10.jpeg","a5.jpeg","43.jpeg","44.jpeg",
  "45.jpeg","11.jpeg","55.jpeg","a3.jpeg","9.jpeg","8.jpeg",
].map((f) => `${CDN}/Fun/${f}`);

// Testimonials with original quotes
export const testimonials = [
  {
    quote:
      "Great place for kids!! Nikki and Ms.D are awesome teachers. I am happy with the way they care for the kids. Highly recommended 👍",
    author: "Kalyani Anish",
    avatar: `${CDN}/Images/kalyani.jpg`,
  },
  {
    quote:
      "We are very happy to bring our daughter Sara here. After coming back home, she is all day talking about Nikki and what they have done. Thanks to her, the team and all the love she gives to the children ❤️",
    author: "Maria & Kuba",
    avatar: `${CDN}/Images/maria-kuba.jpg`,
  },
  {
    quote:
      "Our daughter joined Nikki's Learning World Montessori (LWM) when she was around 2.5 years old and over the past year, we have seen her develop into an adventurous young girl who is not only confident & articulate but also keen to explore her surroundings and is enthusiastic to learn by experience. Thank you to Nikki and team 😇",
    author: "Sanjana & Xio",
    avatar: `${CDN}/Images/xio.jpg`,
  },
  {
    quote:
      "My son has been going here for almost a month and I already see some significant improvements in him. Nikki is very passionate about her nursery and it does show in the activities and growth of kids. My kid goes and firstly hugs her every morning which says it all..!! Big thumbs up. Keep doing the good work.",
    author: "Sneha Shreyasi",
    avatar: `${CDN}/Images/shreyasi.png`,
  },
  {
    quote:
      "My daughter has been going to Nikki since she was just 2 years old. When I first met her I was quite unsure about how my little one will adjust. Nikki was very clear & confident and gave me a detailed settling in plan. Since then, she always has a smile on her face every time I drop her off in the morning. As a parent, that's such a relief and it feels like I am just leaving her behind in another home. Love you Nikki ❤️",
    author: "Avneet Kaur",
    avatar: `${CDN}/Images/avneet.jpg`,
  },
  {
    quote:
      "A very calm, homely, nourishing and loving atmosphere for kids. There are numerous in and outdoor activities for kids to learn, including music n yoga..!!.. plus freshly home made vegetarian meals everyday... !! Our daughter has been going there for past 3 years. It's so fulfilling to see her growing in such a positive energy space. Thanks a lot to Nikki, and her lovely staff.",
    author: "Lokesh & Neelam",
    avatar: `${CDN}/Images/neelam.jpg`,
  },
];

export const hugImage = `${CDN}/Images/hug.jpeg`;
