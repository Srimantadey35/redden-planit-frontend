import Image from "next/image";

export default function ProcessBarMyBusiness({ processes, onProcessUpdate, editable = false }) {
  const handleProcessClick = (index) => {
    if (!editable || !onProcessUpdate) return;

    const updatedProcesses = [...processes];
    updatedProcesses[index] = {
      ...updatedProcesses[index],
      completed: !updatedProcesses[index].completed
    };

    onProcessUpdate(updatedProcesses);
  };

  return (
    <div className="w-full max-w-xs p-4 rounded-md shadow sticky top-[80px] bg-[#ededed]">
      {processes?.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between px-3 py-2 text-sm border-b last:border-none bg-white rounded-sm ${editable ? 'cursor-pointer hover:bg-gray-50' : ''}`}
          onClick={() => handleProcessClick(idx)}
        >
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-3">
            <Image src={item.icon} alt="icon" width={20} height={20} />
            <span className="text-gray-800">{item.title}</span>
          </div>

          {/* Right: Progress + Tick */}
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-semibold ${
                item.completed ? "text-green-600" : "text-gray-800"
              }`}
              title={`Filled ${item.count} of ${item.total} fields`}
            >
              {item.count}/{item.total}
            </span>
            <Image
              width={16}
              height={16}
              src={
                item.completed
                  ? "/images/checklisticons/tickgreen.svg"
                  : "/images/checklisticons/tickgrey.svg"
              }
              alt={item.completed ? "complete" : "incomplete"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
