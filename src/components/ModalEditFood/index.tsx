import { Component, createRef, useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FoodFormData, FoodModel } from "../../pages/Dashboard";

interface ModalUpdateFoodProps {
  isOpen: boolean;
  editingFood: FoodModel | undefined;
  setIsOpen: () => void;
  handleUpdateFood: (data: FoodFormData) => void;
}

const ModalEditFood = (props: ModalUpdateFoodProps) => {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodFormData) => {
    const { setIsOpen, handleUpdateFood } = props;

    handleUpdateFood(data);
    setIsOpen();
  };

  const { isOpen, setIsOpen, editingFood } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
