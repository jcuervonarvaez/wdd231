const bussinessData = [
  {
    name: "Mi Terraza",
    address: "Calle Quintero 284,Valparaíso, Chile",
    phone: "+56 9 8652 8827",
    website: "https://mi-terraza.cl/",
    image: "https://mi-terraza.cl/wp-content/uploads/2024/05/logo1.png",
    membership_level: "3",
    category: "Diseño y Construcción",
    description: "Brindando Diseños de Calidad y Soluciones Óptimas",
    social_media: {
      Instagram: "https://www.instagram.com/miterrazacl/#",
    },
  },
  {
    name: "Happy Baby Bu",
    address: "Av. Gómez Carreño 3707,Viña del mar, Valparaíso, Chile",
    phone: "+56 9 2210 8506",
    website: "https://happy-baby-bu-1.ueniweb.com/",
    image:
      "https://speedy.uenicdn.com/177b31ae-6d17-49c3-9e9b-cd463bf43e73/n192_192a/image/upload/v1586361109/business/df41f86c-1559-486a-9d5e-5542406871ea.png",
    membership_level: "1",
    category: "Piñatas y Cotillón",
    description:
      "Somos Happy Baby Bu, una tienda que ofrece una amplia variedad de piñatas y cotillón de primera calidad, pensados especialmente para ti.",
    social_media: {
      Facebook: "https://www.facebook.com/HappyBabyBu",
    },
  },
  {
    name: "Del Pedregal",
    address: "AV. Valparaiso 121, Viña del mar, Valparaíso, Chile",
    phone: "+56 9 3920 0963",
    website: "https://alimentosdelpedregal.com/la-dehesa/empresa/",
    image:
      "https://alimentosdelpedregal.com/la-dehesa/wp-content/uploads/2023/11/Logo_Pequeno-1.png",
    membership_level: "3",
    category: "Alimentos Congelados",
    description:
      "Alimentos Del Pedregal, Empresa nacional creada el año 2010, en la ciudad de Linares, orientada al consumo masivo de productos alimenticios.",
    social_media: {
      Facebook: "http://facebook.com/alimentosdelpedregaloficial",
    },
  },
  {
    name: "Farmavet",
    address: "Irarrázabal 634, Quilpué, Valparaíso, Chile",
    phone: "+56 32 291 0011",
    website: "https://www.clinicasfarmavet.cl/",
    image:
      "https://www.clinicasfarmavet.cl/wp-content/uploads/2020/01/logofarmavet2.png",
    membership_level: "2",
    category: "veterinaria",
    description:
      "Farmavet Quilpué nace como una clínica veterinaria enfocada a la atención de perros y gatos",
    social_media: {
      Instagram: "https://www.instagram.com/veterinaria.farmavet/#",
    },
  },
  {
    name: "DI TR3VI",
    address: "Av. Blanca estela #1560, 2do piso Concón, Valparaíso, Chile",
    phone: "+56 9 3926 4978",
    website: "https://www.ditrevi.cl/",
    image:
      "https://static.wixstatic.com/media/5691c2_38f0a8328af84c9082263172b4a466ae~mv2.png/v1/crop/x_1100,y_1653,w_3471,h_2328/fill/w_182,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Di%20trevi%20logo_boton%20BW%202024_boton%20coral.png",
    membership_level: "1",
    category: "Venta de ropa",
    description: "VEN Y DÉJANOS AYUDARTE A ENCONTRAR TU ESTILO PERFECTO",
    social_media: {
      Instagram: "https://www.instagram.com/ditrevichile/",
    },
  },
  {
    name: "Murken",
    address: "Caupolicán 53. Limache, Valparaíso, Chile",
    phone: "+ 56 33 2 255 932",
    website: "https://pasteleriamurken.cl/",
    image:
      "https://pasteleriamurken.cl/wp-content/uploads/2017/12/murken-logo-color-250.png",
    membership_level: "2",
    category: "Pasteleria",
    description:
      "Fundada en el año 2008 nos caracterizamos por nuestros productos elaborados en forma artesanal, con una cocina abierta donde nuestros clientes pueden observar y deleitarse con las preparaciones que entran y salen del horno.",
    social_media: {
      Instagram: "https://www.instagram.com/pasteleriamurken/",
    },
  },
  {
    name: "Glow",
    address: "1 norte 649, Viña del Mar, Valparaíso, Chile",
    phone: "+56 99577 7387",
    website: "https://glowsalon.cl/",
    image:
      "https://content.app-sources.com/s/63565849766730848/uploads/Images/GLOW-LOGO-6340879.png?format=webp",
    membership_level: "3",
    category: "Peluqueria",
    description:
      "Nuestro objetivo es brindarte una experiencia única y satisfactoria, donde puedas transformar tu cabello y lucir radiante. ",
    social_media: {
      Facebook:
        "https://www.facebook.com/people/Glow-by-Oscar-Soto/100063850218947/?mibextid=LQQJ4d",
    },
  },
  {
    name: "CIntegral",
    address: "Libertad 749, Viña del Mar, Valparaíso, Chile",
    phone: "32 2327015",
    website:
      "https://cintegral.cl/?srsltid=AfmBOopSG2rKh17IekHqC4ULZpsivqS1IOeUqacFX8SoGRnYxmO0TR1n",
    image: "https://cintegral.cl/wp-content/uploads/2023/04/Logo-Cintegral.png",
    membership_level: "2",
    category: "Computación Integral",
    description:
      "Somos una empresa con más de 29 años en el mercado. Nos hemos convertido en uno de los más importantes proveedores del área de computación.",
    social_media: {
      Facebook: "https://www.facebook.com/Cintegral",
    },
  },
  {
    name: "SuperZoo",
    address: "Av. Los Carrera 754, Quilpué, Valparaíso, Chile",
    phone: "+56227607777",
    website: "https://www.superzoo.cl/",
    image:
      "https://www.superzoo.cl/on/demandware.static/Sites-SuperZoo-Site/-/default/dwe42ba344/fonts/logo-superzoo.svg",
    membership_level: "1",
    category: "Comida para mascotas",
    description:
      "Nuestro principal objetivo es brindar todo lo que una mascota necesita y sueña para ser feliz.",
    social_media: {
      Instagram: "https://www.instagram.com/superzoo.cl/",
    },
  },
  {
    name: "Jugueteria Super Kids",
    address: " Av. Valparaíso 647, Villa Alemana, Valparaíso, Chile",
    phone: "+59 9 9600 9992",
    website: "https://jugueteriasuperkids.cl/",
    image:
      "https://jugueteriasuperkids.cl/wp-content/uploads/2021/03/logo-superkids.png",
    membership_level: "3",
    category: "Jugueteria",
    description:
      " En Juguetería Superkids encontrarás una amplia variedad de juguetes, coleccionables y juegos de mesa. Nuestro catálogo tiene las marcas más reconocidas, LEGO, Pokémon, Super Zings, Rubiks, Sylvanian Families, Paw Patrol y muchas más.",
    social_media: {
      Facebook: "https://www.facebook.com/jugueteriasuperkids/",
    },
  },
  {
    name: "Alerce Muebres",
    address:
      " Avenida Valparaíso 617, Local 71-B, 4to piso (usar ascensor), Galería Carrusel, Viña del Mar, Chile",
    phone: "+56 9 93810092",
    website: "https://tienda.alercemuebles.cl/",
    image:
      "https://tienda.alercemuebles.cl/wp-content/uploads/2020/06/web_woodmart_alercemuebles_250x64_color.png",
    membership_level: "2",
    category: "Muebleria",
    description:
      "ALERCE MUEBLES, es una empresa familiar chilena, con más de 12 años de experiencia en el rubro de muebles para el hogar.",
    social_media: {
      Facebook: "",
    },
  },
  {
    name: "Tierra Nativa",
    address: "Av. Valparaíso 279, Local 1, Viña del Mar, Valparaíso, Chile",
    phone: "+56 9 8730 9436",
    website: "https://tierranativa.cl/",
    image:
      "https://tierranativa.cl/wp-content/uploads/2021/04/TIERRANATIVA.png",
    membership_level: "1",
    category: "Productos Artesanales",
    description:
      " Artesanía Típica Chilena, trabajamos con destacados Artesanos de nuestro País.",
    social_media: {
      Facebook: "https://www.facebook.com/tnativa",
    },
  },
];

const cardsGridElement = document.getElementById("business-cards");

function addGridCard(busineess) {
  let cardWrapper = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardLogo = document.createElement("img");

  cardTitle.textContent = `${busineess.name}`;
  cardLogo.setAttribute("src", busineess.image);
  cardLogo.setAttribute("alt", `logo of ${busineess.name}`);
  cardLogo.setAttribute("title", `logo of ${busineess.name}`);
  cardLogo.setAttribute("width", "300");
  cardLogo.setAttribute("heigth", "300");

  cardWrapper.classList.add("card");
  cardWrapper.appendChild(cardLogo);
  cardWrapper.appendChild(cardTitle);

  cardsGridElement.appendChild(cardWrapper);
}

bussinessData.forEach((busineess) => {
  addGridCard(busineess);
});
