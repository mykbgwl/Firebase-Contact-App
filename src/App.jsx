import Navbar from "./components/Navbar"
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RiEditCircleLine} from "react-icons/ri";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {

  const [contacts,setContacts] = useState([]);
  const {isOpen,onClose,onOpen} = useDisclouse();


  useEffect(()=>{
    const getContacts = async() => {
      try {
        const contactsRef = collection(db,"contacts");
        onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map((doc) =>{
            return{
              id: doc.id,
              ...doc.data(),
            };
          });   
          setContacts(contactLists);
          return contactLists;
        })
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  },[]);

  const filterContacts = async(e) => {
    const value = e.target.value; 
    const contactsRef = collection(db,"contacts");
        onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map((doc) =>{
            return{
              id: doc.id,
              ...doc.data(),
            };
          });   
          const filteredContacts = contactLists.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase())
          );
          setContacts(filteredContacts);
          return filteredContacts;
        })
  }

  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar/>
      <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
        <FiSearch className="ml-1 text-white text-3xl absolute"/>
        <input onChange={filterContacts} type="text" className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9"/>
      </div>
        <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer"/>
      </div>
      <div className="mt-4 gap-3 flex flex-col">
        {contacts.length <= 0 ? <NotFoundContact/> : contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
    <ToastContainer 
    position="bottom-center"
    />
    </>
  );
};

export default App;