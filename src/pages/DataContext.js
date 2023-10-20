import { createContext, useState } from "react";
import { useContext } from "react";
const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  
    const users = [
       
        {
          id: 1,
          name: 'Jane Smith',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU',
        },
        {
          id: 3,
          name: 'Michael Johnson',
          image: 'https://i0.wp.com/earnurl.in/wp-content/uploads/2023/03/attitude-dp-17.jpg?resize=840%2C937&ssl=1',
        },
        {
          id: 3,
          name: 'John Doe',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXigGs3TutXMDCLSEpQwaLLQkEQpsKX_FUYhUggi6FEo8nV8E6h7W4DX_vKf2YjiIMDI&usqp=CAU',

        },
        {
          id: 4,
          name: 'Asha Reddy',
          image: 'https://yohohindi.com/wp-content/uploads/2022/08/4-girls-dp-yohohindi.com_.jpeg',
        },
        {
          id: 5,
          name: 'William Brown',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaVyPFdNs1DSm7a-YGa1IDknSHawIaIZR1A&usqp=CAU',
        },
        {
          id: 6,
          name: 'Olivia Jones',
          image: 'https://img.freepik.com/free-photo/young-brunette-girl-is-working-table-office-she-wears-blue-shirt-black-glasses-she-is-speaking-phone_197531-750.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=ais',
        },
        {
          id: 7,
          name: 'James Garcia',
          image: 'https://img.freepik.com/free-photo/elegant-businesswoman-dressed-formally-sitting-with-laptop_273609-4739.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=ais',
        },
        {
          id: 8,
          name: 'Emma Martinez',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWQ4PlNZhsuqyKO-K4c_3sd8Dv1wIbcn2r8ozDnMK0DJ-_WE74fcnSM6zZrM7aQNICkw&usqp=CAU',
        },
        {
          id: 9,
          name: 'Alexander Robinson',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXigGs3TutXMDCLSEpQwaLLQkEQpsKX_FUYhUggi6FEo8nV8E6h7W4DX_vKf2YjiIMDI&usqp=CAU',
        },
        {
          id: 10,
          name: 'Sophia Lee',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj0n1G4thc6iLlMbGZhBL_JUmrhesEfiu6FG_jPbEPfhOVaetHS5BwwF9UcdD-hqhkaA&usqp=CAU',
        },
        {
          id: 11,
          name: 'Daniel Walker',
          image: 'https://img.freepik.com/free-photo/smiling-businessman-sitting-by-table-cafe-with-laptop-computer-while-reading-newspaper_171337-5553.jpg',
        },
        {
          id: 12,
          name: 'Isabella Hall',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhawWiFOj9PiZPAV8sR36GZMGT5NKr3L3KOfIfRHmO_DZbt7ThidJueq_irs98dUAeRNs&usqp=CAU',
        },
        {
          id: 13,
          name: 'David Allen',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWQ4PlNZhsuqyKO-K4c_3sd8Dv1wIbcn2r8ozDnMK0DJ-_WE74fcnSM6zZrM7aQNICkw&usqp=CAU',
      
        },
        {
          id: 14,
          name: 'Ava Young',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-7Bsb_bd-zoRM5CLToZqiIHMxrfYdj374w&usqp=CAU',
      
        },
        {
          id: 15,
          name: 'Joseph Hernandez',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICYD8aHvjzH53acwNw-jXLVavhPp8kc9Gquf1_uNKuFIxXRkcmoBZFzyxudF6DVAzWEg&usqp=CAU',
        },
        {
          id: 16,
          name: 'Mia King',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaVyPFdNs1DSm7a-YGa1IDknSHawIaIZR1A&usqp=CAU',
      
        },
        {
          id: 17,
          name: 'Ethan Hill',
          image: 'https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg',

      
        },
        {
          id: 18,
          name: 'Charlotte Scott',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj0n1G4thc6iLlMbGZhBL_JUmrhesEfiu6FG_jPbEPfhOVaetHS5BwwF9UcdD-hqhkaA&usqp=CAU',
      
        },
        {
          id: 19,
          name: 'Benjamin Green',
          image: 'https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg',
      
        },
        {
          id: 20,
          name: 'Chloe Adams',
          image: 'https://img.freepik.com/free-photo/front-view-young-businesswoman-using-her-smartphone-during-meeting_23-2148824890.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais',
        }
      ];
  return (
    <DataContext.Provider value={{  users}}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
