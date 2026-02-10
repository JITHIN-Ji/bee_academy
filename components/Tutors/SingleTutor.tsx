import Image from "next/image";
import { Tutor } from "@/types/tutor";

const SingleTutor = ({ tutor }: { tutor: Tutor }) => {
  const { name, title, image, experience, bio } = tutor;

  return (
    <div className="group rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <h3 className="mb-2 text-xl font-bold text-black">
        {name}
      </h3>
      
      <p className="mb-3 text-sm font-semibold text-primary">
        {title}
      </p>
      
      <p className="mb-4 flex items-start text-sm text-body-color">
        <span className="mr-2 inline-block h-5 w-5 flex-shrink-0">
          ✓
        </span>
        <span>{experience}</span>
      </p>

      {bio && (
        <p className="text-sm text-body-color">
          {bio}
        </p>
      )}
    </div>
  );
};

export default SingleTutor;
