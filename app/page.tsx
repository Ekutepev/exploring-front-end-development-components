import GradeAverageChart from "@/components/GradeAverageChart";
import { students } from "@/data/students";
import StudentPortal from "@/components/StudentPortal";

export default function Home() {
  return (
    <main>
      <StudentPortal />

      <section id="class-average">
        <GradeAverageChart students={students} />
      </section>
    </main>
  );
}
