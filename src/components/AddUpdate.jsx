import React from "react";
import Modal from "./Modal";
import {Form ,Formik, Field,ErrorMessage} from "formik"
import { addDoc, collection,doc,updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  Name: Yup.string().required("Name is Required"),
  Number: Yup.string().required("Number is Required")
})

function AddUpdate({ isOpen, onClose, isUpdate, contact }) {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef, contact)
      onClose()
      toast.success("Contact Added Succesfully")
    } catch (error) {
      console.log(error);
    }
  }
  const updateContact = async (contact,id) => {
    try {
      const contactRef = doc(db,"contacts",id);
      await updateDoc(contactRef, contact)
      onClose()
      toast.success("Contact Updated Succesfully")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} >
        <Formik 
        validationSchema={contactSchemaValidation}
        initialValues={isUpdate ? {
          Name: contact.Name,
          Number : contact.Number
        }:
        {
          Name: "",
          Number: ""
        }}
        onSubmit={(values)=> {
          console.log(values);
          isUpdate ? updateContact(values,contact.id) : addContact(values)
        }}

        >
          <Form className="flex flex-col gap-2 " >
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name:</label>
              <Field name="Name" className="border h-10"/>
              <div className="text-red-500 text-xs">
                <ErrorMessage name="Name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Number">Number:</label>
              <Field type = "number" name="Number" className="border h-10"/>
              <div className="text-red-500 text-xs">
                <ErrorMessage name="Number"/>
              </div>
            </div>

            <button className="bg-orange px-3 py-1.5 border self-end ">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddUpdate;
