import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const { deletePatient, getPatientById } = usePatientStore();
  const handleClick = () => {
    deletePatient(patient.id);
    toast.error("Paciente removido");
  };

  return (
    <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl ">
      <PatientDetailItem label="id" data={patient.id} />
      <PatientDetailItem label="nombre" data={patient.name} />
      <PatientDetailItem label="propietario" data={patient.caretaker} />
      <PatientDetailItem label="email" data={patient.email} />
      <PatientDetailItem label="fecha alta" data={patient.date.toString()} />
      <PatientDetailItem label="síntomas" data={patient.symptoms} />

      <div className=" flex justify-between gap-1 flex-col lg:flex-row mt-10">
        <button
          type="button"
          className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
