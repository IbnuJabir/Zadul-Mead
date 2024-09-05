"use client";
const backendApi = process.env.NEXT_PUBLIC_APP_BACKEND_API;

export const getAllPrograms = async () => {
  try {
    const programs = await fetch(
      `${backendApi}/programs/getAllPrograms/all`
    );
    if (!programs.ok) {
      throw new Error(`HTTP error! status: ${programs.status}`);
    }
    const data = await programs.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch programs:", error);
    return [];
  }
};
// const [programs, setPrograms] = useState<Program[]>([]);
// const [isLoading, setLoading] = useState(true);

// useEffect(() => {
//   fetch(
//     `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/programs/getAllPrograms/all`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       setPrograms(data);
//       setLoading(false);
//     });
// }, []);
// if (isLoading) return <Loader />;
// if (!programs) return <h1>No Programs Available!</h1>;
