"use client";

import Card from "../components/Card";

const productsData = {
  users: [],
  wishlist: [],
  products: [
    {
      name: "cunabula caelestis volaticus",
      slug: "suspendo-tenetur",
      description: "Ciminatio velociter spero voro demoror vetus voluptas alter copia. Timor coniecto damno comptus usus crinis crebro tametsi. Summisse decumbo virtus calculus vomito utroque bibo aufero aro.\nAdinventitias apto aestas annus deduco capio vehemens. Delibero deporto placeat voluptatibus aeternus deficio. Vis super voluptate autem amicitia capillus vinitor suasoria sufficio deduco.",
      excerpt: "Thorax saepe deficio adimpleo conitor.",
      price: 5249399,
      tags: ["trucido", "talio", "arceo"],
      thumbnail: "https://loremflickr.com/400/400/cats",
      images: [
        "https://loremflickr.com/400/400/abstract",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/transport",
        "https://loremflickr.com/400/400/food"
      ],
      createdAt: "2023-12-15T15:32:06.350Z",
      updatedAt: "2024-03-18T14:47:12.101Z"
    },
    {
        "name": "curtus dolores",
        "slug": "sono-triumphus",
        "description": "Chirographum ventito artificiose tonsor eum canis terminatio reiciendis ater nesciunt. Vomer correptius amissio benevolentia caute sollicito. Eligendi valetudo arguo inflammatio sursum vivo cunae enim.\nVae succedo vere acies cultura amplus caput alter delinquo teneo. Accusator vorax una cariosus volva cinis dolor itaque. Viridis thesaurus claro conservo addo antea.",
        "excerpt": "Ancilla vox adsum aetas.",
        "price": 9434037,
        "tags": ["vitiosus", "tumultus", "ventito"],
        "thumbnail": "https://loremflickr.com/400/400/food",
        "images": [
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/sports",
          "https://loremflickr.com/400/400/sports",
          "https://loremflickr.com/400/400/technics"
        ],
        "createdAt": "2023-08-29T09:38:42.090Z",
        "updatedAt": "2023-08-18T21:08:19.418Z"
      },
      {
        "name": "decens tabella ea",
        "slug": "suadeo-qui-tunc",
        "description": "Vox dens cras vito acidus. Eius volaticus amplus pax uter cavus. Supplanto curriculum creta.\nCausa caput cultellus color pauper vereor cilicium umquam. Cetera quibusdam deprimo tunc thymum aestivus decimus eos. Corona desino depulso adversus enim altus consuasor error.\nAmita aeger sursum antepono cognatus acquiro. Tribuo clarus coma. Vilicus decens coniuratio omnis caute atqui clementia pauper claustrum.",
        "excerpt": "Videlicet tempus repellendus cultura compello spoliatio.",
        "price": 6454574,
        "tags": ["subnecto", "eveniet", "sed"],
        "thumbnail": "https://loremflickr.com/400/400/city",
        "images": [
          "https://loremflickr.com/400/400/technics",
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/city",
          "https://loremflickr.com/400/400/transport"
        ],
        "createdAt": "2023-09-05T22:25:01.314Z",
        "updatedAt": "2023-07-06T14:56:05.392Z"
      },
      {
        "name": "claustrum audacia vulgivagus",
        "slug": "uterque-aqua-conspergo",
        "description": "Derideo chirographum coniuratio at vobis. Illo ex balbus aveho cotidie valeo animus custodia derideo cibus. Fugiat coaegresco currus.\nPauci cedo valeo. Arguo molestiae communis comminor canonicus. Canonicus aliquid ultra.\nAudeo denique vindico supellex vestigium vinitor taedium reprehenderit adversus decerno. Dicta valeo capitulus conduco talis decimus annus impedit. Adipisci thorax coruscus.",
        "excerpt": "Cariosus aiunt minus valde.",
        "price": 5950717,
        "tags": ["cultellus", "aliqua", "ceno"],
        "thumbnail": "https://loremflickr.com/400/400/city",
        "images": [
          "https://loremflickr.com/400/400/cats",
          "https://loremflickr.com/400/400/sports",
          "https://loremflickr.com/400/400/technics",
          "https://loremflickr.com/400/400/animals",
          "https://loremflickr.com/400/400/cats"
        ],
        "createdAt": "2024-04-26T22:38:49.782Z",
        "updatedAt": "2024-09-01T17:48:42.747Z"
      },
      {
        "name": "aperiam magnam vir",
        "slug": "pax-strenuus",
        "description": "Pauci casus appono dignissimos patrocinor nam. Tutamen absque utor. Crux ad audax tertius civis.\nVacuus cultura eius nemo cresco. Cui textus id adipisci cognatus autus quas terminatio dolorum. Desolo spiritus talio adeo totidem cubitum quibusdam distinctio.",
        "excerpt": "Surculus volup antea vulgaris viduo aliquid.",
        "price": 8530937,
        "tags": ["talio", "texo", "super"],
        "thumbnail": "https://loremflickr.com/400/400/nature",
        "images": [
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/technics",
          "https://loremflickr.com/400/400/cats",
          "https://loremflickr.com/400/400/cats",
          "https://loremflickr.com/400/400/cats"
        ],
        "createdAt": "2023-11-25T05:47:20.269Z",
        "updatedAt": "2023-08-05T05:53:31.031Z"
      },
      {
        "name": "arbor adhaero",
        "slug": "culpa-sufficio",
        "description": "Damnatio careo assumenda copiose quis virgo deleniti cognatus defleo. Cicuta attero delibero tamquam subseco tamisium cresco templum benigne amicitia. Timor praesentium aufero toties synagoga esse volo centum vitae nihil.\nStillicidium tandem creo caterva. Subiungo summa eum repudiandae terebro abscido coaegresco. Suscipit defetiscor deserunt urbs angelus.\nDefendo beatus coruscus optio. Tonsor sum acer. Avarus cribro solitudo qui iure caste.",
        "excerpt": "Ea apto conicio adinventitias atrocitas cubo.",
        "price": 8287706,
        "tags": ["trado", "uberrime", "utpote"],
        "thumbnail": "https://loremflickr.com/400/400/food",
        "images": [
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/animals",
          "https://loremflickr.com/400/400/animals",
          "https://loremflickr.com/400/400/cats",
          "https://loremflickr.com/400/400/food"
        ],
        "createdAt": "2024-02-01T16:22:07.114Z",
        "updatedAt": "2023-06-22T21:56:29.111Z"
      },
      {
        "name": "tendo sint",
        "slug": "absconditus-ulciscor",
        "description": "Defungo fuga audacia similique valetudo vulnero. Agnosco vallum centum reprehenderit corona theatrum sopor. Thema sursum delinquo conforto tertius conturbo arx suffoco adulescens.\nDepereo apostolus pecto voluptate somnus aggero deduco aspernatur. At cohors temporibus tepesco ipsum voluptatem. Arceo fugit provident.",
        "excerpt": "Bardus argumentum voluptates trans.",
        "price": 7359333,
        "tags": ["summopere", "arceo", "repellendus"],
        "thumbnail": "https://loremflickr.com/400/400/abstract",
        "images": [
          "https://loremflickr.com/400/400/cats",
          "https://loremflickr.com/400/400/animals",
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/cats",
          "https://loremflickr.com/400/400/cats"
        ],
        "createdAt": "2023-10-15T16:16:35.701Z",
        "updatedAt": "2024-01-03T14:54:25.952Z"
      },
      {
        "name": "corrupti compono conforto",
        "slug": "altus-correptius-quae",
        "description": "Tergeo tantum voluptatem catena dedico infit alias brevis dolorem tenus. Contigo vinitor vociferor delibero ater tollo adaugeo. In teres cognatus utroque voluptates arguo desolo.\nCeno thesaurus credo accommodo crustulum dolorum claustrum inventore sequi cogo. Cernuus eaque carbo. Molestiae cupiditate admoveo caecus coniuratio torrens bene.\nDerideo terra coma vinitor depono tergiversatio. Quis contabesco sperno adinventitias utor adfero cognomen crur. Suggero desidero ventus tribuo cribro subvenio cursim pecto tenetur ceno.",
        "excerpt": "Valeo sequi creator allatus.",
        "price": 3577617,
        "tags": ["vicinus", "speculum", "facere"],
        "thumbnail": "https://loremflickr.com/400/400/food",
        "images": [
          "https://loremflickr.com/400/400/food",
          "https://loremflickr.com/400/400/nature",
          "https://loremflickr.com/400/400/animals",
          "https://loremflickr.com/400/400/sports",
          "https://loremflickr.com/400/400/technics"
        ],
        "createdAt": "2022-12-08T23:49:22.751Z",
        "updatedAt": "2023-02-06T09:07:21.480Z"
      }
  ],
};

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
      {productsData.products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}
