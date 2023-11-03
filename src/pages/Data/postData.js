import { sub } from "date-fns";

const postData = [
  {
    id: 1,
    name: "Sanssans",
    avatar:
      "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",

    time: sub(new Date(), { minutes: 5 }).toISOString(),
    content: "yo , Zayn is here , vas happen'in",
    likes: 2778750,
    liked: false,
    image:
      "https://s3images.zee5.com/wp-content/uploads/2022/01/zayynuuumsdfs2022011512393420220115124425.jpg",
  },
  {
    id: 2,
    name: "Jasminejules",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU",

    time: sub(new Date(), { minutes: 10 }).toISOString(),

    content: "Hi , this is Taylor born in 1989",
    likes: 1152359,
    liked: false,
    image:
      "https://lh3.googleusercontent.com/proxy/aSVLBgND4C4VvKQfEgfR3TPZqESy9k-xB6_25WxNAhhKnTV-xPYQmLWqcNhJlZi14KWadluNQgsmFJ0YGiAMaKfoyh1iy2lQMF45RK31TsGigwGGH4xs65GvutX1k5UK=w1200-h630-p-k-no-nu",
  },
  {
    id: 3,
    name: "Muthu123",
    time: sub(new Date(), { minutes: 13 }).toISOString(),

    avatar:
      "https://s3images.zee5.com/wp-content/uploads/2022/01/zayynuuumsdfs2022011512393420220115124425.jpg",

    content: "Feeling excited about the new project! 🚀",
    likes: 5,
    image:
      "https://img.freepik.com/free-photo/young-brunette-girl-is-working-table-office-she-wears-blue-shirt-black-glasses-she-is-speaking-phone_197531-750.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=ais",
    liked: false,
  },
  {
    id: 4,
    name: "Muthu123",
    time: sub(new Date(), { minutes: 21 }).toISOString(),

    avatar:
      "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",

    content: "Memories follow back , memories",
    likes: 0,
    liked: false,
    image:
      "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",
  },
  {
    id: 5,
    name: "Sanssans",
    time: sub(new Date(), { minutes: 24 }).toISOString(),

    avatar:
      "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",

    content: "Hey , it's time to work , boost up",
    likes: 0,
    liked: false,
    image:
      "https://img.freepik.com/free-photo/elegant-businesswoman-dressed-formally-sitting-with-laptop_273609-4739.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=ais",
  },
  {
    id: 6,
    name: "Sanssans",
    time: sub(new Date(), { minutes: 27 }).toISOString(),

    avatar:
      "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",

    content: "Feeling excited about the new project! 🚀",
    likes: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJQAvFmI1k6ACSdSF5CljQjbTkmXNlJ9wGg&usqp=CAU",
    liked: false,
  },
  {
    id: 7,
    name: "Sanssans",
    time: sub(new Date(), { minutes: 35 }).toISOString(),

    avatar:
      "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",

    content: "Feeling excited about the new project! 🚀",
    likes: 0,
    image:
      "https://e0.pxfuel.com/wallpapers/197/688/desktop-wallpaper-best-places-to-visit-in-london-united-kingdom-uk-aesthetic.jpg",
    liked: false,
  },
  {
    id: 8,
    name: "Sanssans",
    time: sub(new Date(), { minutes: 40 }).toISOString(),

    avatar:
      "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",

    content: "Feeling excited about the new project! 🚀",
    likes: 0,
    image:
      "https://i.pinimg.com/originals/10/48/93/104893acf8f3a8b047121d29dac2b1a1.png",
    liked: false,
  },
  {
    id: 9,
    name: "jasminejules",
    time: sub(new Date(), { minutes: 56 }).toISOString(),

    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU",

    content: "Feeling excited about the new project! 🚀",
    likes: 0,
    image:
      "https://w0.peakpx.com/wallpaper/102/79/HD-wallpaper-beautiful-place-karen-story-lighthouse.jpg",
    liked: false,
  },
  {
    id: 10,
    name: "jasminejules",
    time: sub(new Date(), { minutes: 70 }).toISOString(),

    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU",

    content: "Feeling excited about the new project! 🚀",
    likes: 0,
    image:
      "https://i.pinimg.com/originals/0d/91/76/0d9176f10b71f4729d72a8841e1a7a41.jpg",
    liked: false,
  },
  {
    id: 11,
    name: "jasminejules",
    time: sub(new Date(), { minutes: 97 }).toISOString(),

    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU",

    content: "Feeling excited about the new project! 🚀",
    likes: 0,
    image:
      "https://w0.peakpx.com/wallpaper/591/1003/HD-wallpaper-romantic-place-love-place-romantic-thumbnail.jpg",
    liked: false,
  },
];

export default postData;
