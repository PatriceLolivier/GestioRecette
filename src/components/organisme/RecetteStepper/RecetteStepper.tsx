import { useState } from "react";
import { IStepsDetailsProps } from "@organisme/RecetteStepper";
import { RecetteStep } from "@molecules/RecetteStep";
import { FaPlus } from "react-icons/fa";
import { Modal } from "@atomes/Modal";
import { Input } from "@atomes/Input";
import { Button } from "@atomes/Button";
import { useRecettesStore } from "@store/Recettes/useRecettesStore";

export const StepsDetails: React.FC<IStepsDetailsProps> = ({
  steps,
  isEditMode = false,
}) => {
  const { addStep, editStep, deleteStep } = useRecettesStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingStep, setEditingStep] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleOpenModal = (mode: "add" | "edit", stepNumber?: number) => {
    setModalMode(mode);
    console.log("mode", mode);
    if (mode === "edit" && stepNumber) {
      const step = steps.find((s) => s.step_number === stepNumber);
      setEditingStep(stepNumber);
      setFormData({
        title: step?.title || "",
        description: step?.description || "",
      });
    } else {
      setFormData({ title: "", description: "" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      addStep({
        step_number: steps.length + 1,
        ...formData,
      });
    } else if (modalMode === "edit" && editingStep) {
      editStep(editingStep, formData);
    }
    setIsModalOpen(false);
    setFormData({ title: "", description: "" });
  };

  const handleDelete = (stepNumber: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette étape ?")) {
      deleteStep(stepNumber);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Étapes de préparation</h2>
        {isEditMode && (
          <Button
            onClick={() => handleOpenModal("add")}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <FaPlus /> Ajouter une étape
          </Button>
        )}
      </div>
      
      {steps.map((step) => (
        <RecetteStep
          key={step.step_number}
          step_number={step.step_number}
          description={step.description}
          title={step.title}
          isEditMode={isEditMode}
          onDelete={handleDelete}
          onEdit={(stepNumber) => handleOpenModal("edit", stepNumber)}
        />
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalMode === "add" ? "Ajouter une étape" : "Modifier l'étape"}
        footer={
          <>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSubmit}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              {modalMode === "add" ? "Ajouter" : "Modifier"}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Titre</label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Titre de l'étape"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Input
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Description de l'étape"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
