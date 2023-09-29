import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import FetchData from "../components/FetchData";
import Link from "next/link";


const Home = async () => {
  //Fetching data method 1
  /*
  useEffect(() => {
    const fetchProducts = async () => {
      const products:IProject[] = await client.fetch(query);
      setData(products);
    };
    fetchProducts();
  }, []);*/

  //Fetching data method 2
  const SanityData = await FetchData();
  SanityData.map((item) => {

  })

  return (
    <div className="">
      <h1 className="font-extrabold text-7xl">
        Hello I'm{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Rizwan
        </span>
        !{" "}
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my Projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-col-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SanityData.map((project) => (
          <Link
            href={`projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 ">
            {project.image && (
              <Image
                src={urlForImage(project.image).url()}
                alt={project.name}
                width={500}
                height={500}
                className="object-cover border border-gray-500 rounded-lg"
              />
            )}

            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
