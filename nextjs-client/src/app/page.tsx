import Image from "next/image";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

interface Product {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

interface ProductsData {
  products: Product[];
}

const productsData: ProductsData = {
  products: [
    {
      name: "cunabula caelestis volaticus",
      slug: "suspendo-tenetur",
      description:
        "Ciminatio velociter spero voro demoror vetus voluptas alter copia. Timor coniecto damno comptus usus crinis crebro tametsi. Summisse decumbo virtus calculus vomito utroque bibo aufero aro. Adventitias apto aestas annus deduco capio vehemens. Delibero deporto placeat voluptatibus aeternus deficio. Vis super voluptate autem amicitia capillus vinitor suasoria sufficio deduco.",
      excerpt: "Thorax saepe deficio adimpleo conitor.",
      price: 5249399,
      tags: ["trucido", "talio", "arceo"],
      thumbnail: "https://loremflickr.com/400/400/cats",
      images: [
        "https://loremflickr.com/400/400/abstract",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/transport",
        "https://loremflickr.com/400/400/food",
      ],
      createdAt: "2023-12-15T15:32:06.350Z",
      updatedAt: "2024-03-18T14:47:12.101Z",
    },
    {
      name: "vaco decet",
      slug: "umquam-defendo-vorax",
      description:
        "Avarus theatrum deserunt cavus ultio. Quae curatio abeo. Distinctio apud desino adhuc trado.\nAspernatur aestas comes modi. Asper caput rerum absque alii molestiae vestrum usitas sodalitas. Assentator calculus illo.\nMaxime tot depraedor textus auctus. Acidus crapula quae verumtamen delicate absum vulgo alioqui votum sonitus. Voro utor maxime tamquam repudiandae creptio atrocitas crebro.",
      excerpt: "Absorbeo sursum tres excepturi cupiditas altus.",
      price: 7675600,
      tags: ["cimentarius", "adaugeo", "vacuus"],
      thumbnail: "https://loremflickr.com/400/400/business",
      images: [
        "https://loremflickr.com/400/400/transport",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/animals",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/cats",
      ],
      createdAt: "2024-01-22T13:15:24.887Z",
      updatedAt: "2024-01-25T18:19:54.047Z",
    },
    {
      name: "capitulus conventus",
      slug: "omnis-arbor-tego",
      description:
        "Theologus vindico supplanto. Sed vix verto vulgus xiphias. Civitas dolore angelus patruus comptus attero.\nConfido deputo quos vitiosus sustineo taceo perspiciatis cuius decumbo argentum. Vinum aestivus hic. Catena velit venustas avaritia.\nAduro tabgo tabula iste sophismata delinquo demonstro amor quasi. Vulgivagus beneficium necessitatibus super tredecim. Sunt cui calculus nemo adamo contigo comptus talio.",
      excerpt: "Cruciamentum contabesco subito aggero.",
      price: 3768019,
      tags: ["conforto", "vobis", "rerum"],
      thumbnail: "https://loremflickr.com/400/400/food",
      images: [
        "https://loremflickr.com/400/400/nature",
        "https://loremflickr.com/400/400/city",
        "https://loremflickr.com/400/400/technics",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/sports",
      ],
      createdAt: "2024-08-09T03:01:50.432Z",
      updatedAt: "2023-05-17T16:42:21.208Z",
    },
    {
      name: "capillus mollitia",
      slug: "voro-cupio-corroboro",
      description:
        "Provident deinde corona amplitudo summisse cur avaritia. Amita cunctatio alii victus cruentus. Adstringo comparo adstringo solutio sufficio adnuo rem trado curis comes.\nAeneus aggredior illo apto voluntarius spoliatio ratione certus amet. Uberrime consequuntur calco stella sum supellex utique. Creta deleniti animus amplexus.",
      excerpt: "Voluptate tricesimus denego currus.",
      price: 3225477,
      tags: ["copia", "sursum", "omnis"],
      thumbnail: "https://loremflickr.com/400/400/cats",
      images: [
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/food",
      ],
      createdAt: "2024-03-06T12:32:37.477Z",
      updatedAt: "2024-06-10T19:39:46.154Z",
    },
    {
      name: "aranea illum cubitum",
      slug: "vinum-astrum",
      description:
        "Aliquam sol aurum solio. Totam itaque audax cernuus trans spero conforto aut. Conturbo uterque coerceo quae defendo sortitus.\nCustodia baiulus urbanus uredo cernuus vulariter defero teres. Ago vulgaris sperno concido quidem usus ustulo. Denuo comminor temptatio.\nVelut valeo casus. Supra at coniecto ultio vigor vulticulus. Cognatus culpa ventosus curtus arma cunae tamquam advenio candidus facere.",
      excerpt: "Cultellus defessus teres depopulo aperio.",
      price: 7706552,
      tags: ["timor", "tantum", "desipio"],
      thumbnail: "https://loremflickr.com/400/400/cats",
      images: [
        "https://loremflickr.com/400/400/city",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/sports",
        "https://loremflickr.com/400/400/transport",
        "https://loremflickr.com/400/400/abstract",
      ],
      createdAt: "2024-11-15T09:54:08.287Z",
      updatedAt: "2024-02-10T18:53:21.288Z",
    },
    {
      name: "terga voluptates",
      slug: "in-usitas",
      description:
        "Occaecati vaco ago verus credo alo vir commemoro. Thymum cupressus repellat vir compono soleo stella alveus. Repudiandae torrens clementia quis alius carbo.\nVoco tergum sint comedo aequitas ademptio conservo. Vivo concido crebro consequuntur aestas pax coruscus usitas truculenter. Adversus certe cunctatio avarus tot ubi vae viduo.",
      excerpt: "Paens magnam ars apparatus.",
      price: 6961261,
      tags: ["aegrus", "utpote", "cado"],
      thumbnail: "https://loremflickr.com/400/400/cats",
      images: [
        "https://loremflickr.com/400/400/sports",
        "https://loremflickr.com/400/400/abstract",
        "https://loremflickr.com/400/400/animals",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/transport",
      ],
      createdAt: "2023-01-27T18:25:27.802Z",
      updatedAt: "2022-12-27T20:46:38.431Z",
    },
    {
      name: "perferendis talus",
      slug: "unus-articulus",
      description:
        "Talus coma casso aufero aeternus tibi territo. Comminor caecus ipsam ut tubineus capillus tego sub. Consequatur deripio tollo angelus astrum abundans nihil varius sophismata.\nTemperantia decet comptus compello valeo patior uberrime. Paens canto vigor communis deserunt adstringo cohors conqueror tracto recusandae. Crebro corpus culpo tantum vestrum.\nUniverse clamo patria color. Rerum aiunt derelinquo pauper titulus cultellus uredo crapula. Cohors qui demonstro error despecto cerno tolero.",
      excerpt: "Arguo talio valde vicinus tenus.",
      price: 7410934,
      tags: ["spectaculum", "adipisci", "trucido"],
      thumbnail: "https://loremflickr.com/400/400/transport",
      images: [
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/transport",
      ],
      createdAt: "2023-01-27T13:37:17.354Z",
      updatedAt: "2023-09-09T13:43:34.455Z",
    },
    {
      name: "perferendis talus",
      slug: "unus-articulus",
      description:
        "Talus coma casso aufero aeternus tibi territo. Comminor caecus ipsam ut tubineus capillus tego sub. Consequatur deripio tollo angelus astrum abundans nihil varius sophismata.\nTemperantia decet comptus compello valeo patior uberrime. Paens canto vigor communis deserunt adstringo cohors conqueror tracto recusandae. Crebro corpus culpo tantum vestrum.\nUniverse clamo patria color. Rerum aiunt derelinquo pauper titulus cultellus uredo crapula. Cohors qui demonstro error despecto cerno tolero.",
      excerpt: "Arguo talio valde vicinus tenus.",
      price: 7410934,
      tags: ["spectaculum", "adipisci", "trucido"],
      thumbnail: "https://loremflickr.com/400/400/transport",
      images: [
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/transport",
      ],
      createdAt: "2023-01-27T13:37:17.354Z",
      updatedAt: "2023-09-09T13:43:34.455Z",
    },
    {
      name: "perferendis talus",
      slug: "unus-articulus",
      description:
        "Talus coma casso aufero aeternus tibi territo. Comminor caecus ipsam ut tubineus capillus tego sub. Consequatur deripio tollo angelus astrum abundans nihil varius sophismata.\nTemperantia decet comptus compello valeo patior uberrime. Paens canto vigor communis deserunt adstringo cohors conqueror tracto recusandae. Crebro corpus culpo tantum vestrum.\nUniverse clamo patria color. Rerum aiunt derelinquo pauper titulus cultellus uredo crapula. Cohors qui demonstro error despecto cerno tolero.",
      excerpt: "Arguo talio valde vicinus tenus.",
      price: 7410934,
      tags: ["spectaculum", "adipisci", "trucido"],
      thumbnail: "https://loremflickr.com/400/400/transport",
      images: [
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/transport",
      ],
      createdAt: "2023-01-27T13:37:17.354Z",
      updatedAt: "2023-09-09T13:43:34.455Z",
    },
    {
      name: "perferendis talus",
      slug: "unus-articulus",
      description:
        "Talus coma casso aufero aeternus tibi territo. Comminor caecus ipsam ut tubineus capillus tego sub. Consequatur deripio tollo angelus astrum abundans nihil varius sophismata.\nTemperantia decet comptus compello valeo patior uberrime. Paens canto vigor communis deserunt adstringo cohors conqueror tracto recusandae. Crebro corpus culpo tantum vestrum.\nUniverse clamo patria color. Rerum aiunt derelinquo pauper titulus cultellus uredo crapula. Cohors qui demonstro error despecto cerno tolero.",
      excerpt: "Arguo talio valde vicinus tenus.",
      price: 7410934,
      tags: ["spectaculum", "adipisci", "trucido"],
      thumbnail: "https://loremflickr.com/400/400/transport",
      images: [
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/transport",
      ],
      createdAt: "2023-01-27T13:37:17.354Z",
      updatedAt: "2023-09-09T13:43:34.455Z",
    },
  ],
};

export default function Home() {
  return (
    <div className="relative font-sans">
      <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          width={200}
          height={200}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] max-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 overflow-hidden">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Find Your Favorite Product
          </h2>
          <p className="sm:text-lg text-base text-center text-gray-200">
            Add your favorite product to your wishlist today!
          </p>
          <button
            type="button"
            className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Find Now
          </button>
        </div>
      </div>

{/* Products Display Section */}
<div className="overflow-x-auto ml-64 mr-64 py-6">
  <div className="flex justify-between items-center mb-4 ml-12">
    <h2 className="text-4xl ml-48 font-bold">Gamers Favourite.</h2>
    <div className="flex justify-end">
      <Link
        href="/products"
        className="bg-blue-500 text-white px-4 mr-64 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        See All
      </Link>
    </div>
  </div>
  
  {/* Card Display Section */}
  <div className="flex flex-wrap max-w-6xl mx-auto">
    {productsData.products.map((product, index) => (
      <div className="w-1/5 p-2" key={index}>
        <ProductCard product={product} />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
