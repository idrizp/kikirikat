'use client'
import PathCard from "@/components/pathcard/PathCard";

export default function Dashboard() {
  return (
    <div
      className="h-screen min-w-full flex flex-col justify-center items-center gap-10 bg-dashboard-background"
    >
      <input
        className="block w-2/3 h-16 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset 
                ring-gray-300 placeholder:text-gray-40 placeholder:text-lg text-lg leading-6"
        type="text"
        placeholder="What do you want to learn?"
      />

      <ul className="w-2/3 grid grid-cols-3 gap-6 justify-center max-h-full">
        <li className="w-full">
          <PathCard
            courses={["course1", "course2", "course3"]}
            totalProgress={50}
          />
        </li>
        <li className="w-full">
          <PathCard
            courses={["course1", "course2", "course3"]}
            totalProgress={50}
          />
        </li>
        <li className="w-full">
          <PathCard
            courses={["course1", "course2", "course3"]}
            totalProgress={50}
          />
        </li>

        <li className="w-full">
          <PathCard
            courses={["course1", "course2", "course3"]}
            totalProgress={50}
          />
        </li>

        <li className="w-full">
          <PathCard
            courses={["course1", "course2", "course3"]}
            totalProgress={50}
          />
        </li>

        <li className="w-full">
          <PathCard
            courses={["course1", "course2", "course3"]}
            totalProgress={50}
          />
        </li>
      </ul>
    </div>
  )
}
