import { createContext, useState } from "react";
import { useContext } from "react";
import { sub } from "date-fns";
const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [logName, setlogName] = useState(null);

  const login = (logName) => {
    setlogName(logName);
  };

  const logout = () => {
    setlogName(null);
  };
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [users,setUsers]= useState([
    {
      id: 1,
      name: "Jane Smith",
      value: "Jane Smith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU",
    },
    {
      id: 2,
      name: "Michael Johnson",
      value: "Michael Johnson",

      image:
        "https://i0.wp.com/earnurl.in/wp-content/uploads/2023/03/attitude-dp-17.jpg?resize=840%2C937&ssl=1",
    },
    {
      id: 3,
      name: "John Doe",

      value: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXigGs3TutXMDCLSEpQwaLLQkEQpsKX_FUYhUggi6FEo8nV8E6h7W4DX_vKf2YjiIMDI&usqp=CAU",
    },
    {
      id: 4,
      name: "Asha Reddy",
      value: "Asha Reddy",

      image:
        "https://yohohindi.com/wp-content/uploads/2022/08/4-girls-dp-yohohindi.com_.jpeg",
    },
    {
      id: 5,
      name: "William Brown",
      value: "William Brown",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaVyPFdNs1DSm7a-YGa1IDknSHawIaIZR1A&usqp=CAU",
    },
    {
      id: 6,
      name: "Olivia Jones",
      value: "Olivia Jones",

      image:
        "https://img.freepik.com/free-photo/young-brunette-girl-is-working-table-office-she-wears-blue-shirt-black-glasses-she-is-speaking-phone_197531-750.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=ais",
    },
    {
      id: 7,
      name: "James Garcia",
      value: "James Garcia",
      
      image:
        "https://img.freepik.com/free-photo/elegant-businesswoman-dressed-formally-sitting-with-laptop_273609-4739.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=ais",
    },
    {
      id: 8,
      name: "Emma Martinez",
      value: "Emma Martinez",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWQ4PlNZhsuqyKO-K4c_3sd8Dv1wIbcn2r8ozDnMK0DJ-_WE74fcnSM6zZrM7aQNICkw&usqp=CAU",
    },
    {
      id: 9,
      name: "Alexander Robinson",
      value: "Alexander Robinson",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXigGs3TutXMDCLSEpQwaLLQkEQpsKX_FUYhUggi6FEo8nV8E6h7W4DX_vKf2YjiIMDI&usqp=CAU",
    },
    {
      id: 10,
      name: "Sophia Lee",
      value: "Sophia Lee",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj0n1G4thc6iLlMbGZhBL_JUmrhesEfiu6FG_jPbEPfhOVaetHS5BwwF9UcdD-hqhkaA&usqp=CAU",
    },
    {
      id: 11,
      name: "Daniel Walker",
      value: "Daniel Walker",
      
      image:
        "https://img.freepik.com/free-photo/smiling-businessman-sitting-by-table-cafe-with-laptop-computer-while-reading-newspaper_171337-5553.jpg",
    },
    {
      id: 12,
      value: "Isabella Hall",
      name: "Isabella Hall",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhawWiFOj9PiZPAV8sR36GZMGT5NKr3L3KOfIfRHmO_DZbt7ThidJueq_irs98dUAeRNs&usqp=CAU",
    },
    {
      id: 13,
      name: "David Allen",
      value: "David Allen",
      
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWQ4PlNZhsuqyKO-K4c_3sd8Dv1wIbcn2r8ozDnMK0DJ-_WE74fcnSM6zZrM7aQNICkw&usqp=CAU",
    },
    {
      id: 14,
      name: "Ava Young",
      value: "Ava Young",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU",
    },
    {
      id: 15,
      name: "Joseph Hernandez",
      value: "Joseph Hernandez",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICYD8aHvjzH53acwNw-jXLVavhPp8kc9Gquf1_uNKuFIxXRkcmoBZFzyxudF6DVAzWEg&usqp=CAU",
    },
    {
      id: 16,
      name: "Mia King",
      value: "Mia King",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaVyPFdNs1DSm7a-YGa1IDknSHawIaIZR1A&usqp=CAU",
    },
    {
      id: 17,
      name: "Ethan Hill",
      value: "Ethan Hill",

      image:
        "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",
    },
    {
      id: 18,
      name: "Charlotte Scott",
      value: "Charlotte Scott",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj0n1G4thc6iLlMbGZhBL_JUmrhesEfiu6FG_jPbEPfhOVaetHS5BwwF9UcdD-hqhkaA&usqp=CAU",
    },
    {
      id: 19,
      name: "Benjamin Green",
      value: "Benjamin Green",

      image:
        "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",
    },
    {
      id: 20,
      name: "Chloe Adams",
      value: "Chloe Adams",

      image:
        "https://img.freepik.com/free-photo/front-view-young-businesswoman-using-her-smartphone-during-meeting_23-2148824890.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais",
    },
  ]);
const [friendList,setFriendList]=useState([])
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Sanssans",
      avatar:
        "https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg",
      // time: "123456",
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
      // time: ,
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
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
      // time: "1 hr ago",
      content: "Feeling excited about the new project! 🚀",
      likes: 0,
      image:
        "https://w0.peakpx.com/wallpaper/591/1003/HD-wallpaper-romantic-place-love-place-romantic-thumbnail.jpg",
      liked: false,
    },
  ]);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        if (post.liked) {
          return { ...post, liked: false, likes: post.likes - 1 };
        } else {
          return { ...post, liked: true, likes: post.likes + 1 };
        }
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleShare = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        console.log(`post ${postId} is shared.`);
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleBookmark = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, bookmarked: !post.bookmarked };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <DataContext.Provider
      value={{
        users,
        logName,
        login,
        logout,
        posts,
        setUsers,
        setPosts,
        friendList,setFriendList,
        handleBookmark,
        handleDelete,
        handleLike,
        handleShare,
        tabValue,
        setTabValue,
        handleTabChange,
        addNewPost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
