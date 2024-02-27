import {CircularProgress} from "@nextui-org/progress";

export default function PathCard({ courses, totalProgress }: {
  courses: string[],
  totalProgress: number
}) {
  return (
    <div className="flex flex-col gap-5 rounded-md border-0 p-6 bg-white shadow-md">

      <div className="flex justify-between items-center">
        <h1 className="text-center text-lg text-black font-semibold">PATH 1</h1>
        <CircularProgress
          aria-label="progress for course"
          color="success"
          value={totalProgress}
          showValueLabel={true}
        />
      </div>

      <ul className="flex-1 flex flex-col gap-5">
        {(courses) && (
          Array.from(courses).map((course) => (
            <li key={course}>
              <div className="flex justify-between gap-4 items-center">
                <h3 className="flex-1">{course}</h3>
              </div>
            </li>
          )))}
      </ul>
    </div>
  )
}