import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclosure from "../hooks/useDisclosure";
import AddUpdate from "./AddUpdate";
import { toast } from "react-toastify";

function ContactCard({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex justify-between items-center p-2 rounded-xl"
      >
        <div className="flex gap-4">
          <HiOutlineUserCircle className="text-orange text-5xl" />
          <div className="">
            <h2 className="font-bold">{contact.Name}</h2>
            <p className="text-sm">{contact.Number}</p>
          </div>
        </div>
        <div className="flex text-3xl gap-2">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddUpdate
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default ContactCard;
