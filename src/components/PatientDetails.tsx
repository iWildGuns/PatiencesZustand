import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl ">
      <PatientDetailItem label="id" data={patient.id} />
      <PatientDetailItem label="nombre" data={patient.name} />
      <PatientDetailItem label="propietario" data={patient.caretaker} />
      <PatientDetailItem label="email" data={patient.email} />
      <PatientDetailItem label="fecha alta" data={patient.date.toString()} />
      <PatientDetailItem label="síntomas" data={patient.symptoms} />
    </div>
  );
}
