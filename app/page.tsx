import Image from "next/image";
import GradeAverageChart from "@/components/GradeAverageChart";
import { students } from "@/data/students";

export default function Home() {
  return (
    <main>
      <section id="class-average">
        <GradeAverageChart students={students} />
      </section>
    </main>
  );
}
