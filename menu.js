const menu = [
  // ENTRADAS
  { nombre: "El Tapao del Malecón", categoria: "entradas", precio: "RD$490", descripcion: "Tapao romanense con salmón a la plancha, queso crema, zucchini y tomate cherry.", imagen: "https://images.unsplash.com/photo-1544025162-d76694265947" },
  { nombre: "Barquito del Campesino", categoria: "entradas", precio: "RD$490", descripcion: "Canastas de plátano verde rellenas de chicharrón crujiente con salsa guacamole.", imagen: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { nombre: "Barquito de las Indias", categoria: "entradas", precio: "RD$390", descripcion: "Canastas de plátano verde rellenas de pollo en cremosa salsa curry.", imagen: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },
  { nombre: "Barquito Pesquero", categoria: "entradas", precio: "RD$550", descripcion: "Canastas de plátano verde rellenas de tartar de salmón con aguacate, piña y tomate cherry.", imagen: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
  { nombre: "Barquito Caribeño", categoria: "entradas", precio: "RD$590", descripcion: "Canastas de plátano verde con camarones y salsa cremosa de coco y chinola.", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
  { nombre: "Alitas en Salsa de Piña", categoria: "entradas", precio: "RD$550", descripcion: "Alitas jumbo doradas con salsa de piña y menta.", imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f" },
  { nombre: "Parmesana", categoria: "entradas", precio: "RD$440", descripcion: "Berenjena a la parmesana con mozzarella, parmesano, salsa de tomate y albahaca.", imagen: "https://images.unsplash.com/photo-1625938145744-e38051539961" },
  { nombre: "Croquetas de Plátano Maduro", categoria: "entradas", precio: "RD$590", descripcion: "Croquetas de plátano maduro con carne molida Angus y queso mozzarella.", imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
  { nombre: "Baba Ganoush", categoria: "entradas", precio: "RD$490", descripcion: "Puré de berenjena asada al estilo Medio Oriente con ajo, aceite de oliva y limón.", imagen: "https://images.unsplash.com/photo-1546549032-9571cd6b27df" },
  { nombre: "Spicy Shrimps", categoria: "entradas", precio: "RD$640", descripcion: "Camarones empanizados servidos en lechuga fresca con salsa spicy mayo.", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
  { nombre: "Calamares Fritos", categoria: "entradas", precio: "RD$440", descripcion: "Anillos de calamares dorados y crujientes con mezcla especial de la casa.", imagen: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6" },
  { nombre: "Fritura del Malecón", categoria: "entradas", precio: "RD$990", descripcion: "Selección de mariscos frescos fritos, ideal para compartir.", imagen: "https://images.unsplash.com/photo-1559847844-5315695dadae" },
  { nombre: "Picadera Mixta de Tierra", categoria: "entradas", precio: "RD$1690", descripcion: "Picadera para 2 personas con chicharrón, alitas, salchicha, fajitas, papas, tostones y más.", imagen: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
  { nombre: "Aros de Cebolla", categoria: "entradas", precio: "RD$190", descripcion: "Aros de cebolla dorados, crujientes por fuera y tiernos por dentro.", imagen: "https://images.unsplash.com/photo-1639024471283-03518883512d" },
  { nombre: "Mozzarella Stick", categoria: "entradas", precio: "RD$290", descripcion: "Palitos de mozzarella envueltos en capa crujiente.", imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270" },

  // TIERRA
  { nombre: "Milanesa de Res", categoria: "tierra", precio: "RD$790", descripcion: "Filete de res empanizado, crujiente por fuera y jugoso por dentro.", imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d" },
  { nombre: "Crazy Chicken", categoria: "tierra", precio: "RD$650", descripcion: "Pechuga de pollo a la plancha marinada en mostaza dijon y limón fresco.", imagen: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b" },
  { nombre: "Churrasco Exótico", categoria: "tierra", precio: "RD$1490", descripcion: "Churrasco Certified Angus Beef con salsa de piña y menta.", imagen: "https://images.unsplash.com/photo-1558030006-450675393462" },
  { nombre: "Picaña", categoria: "tierra", precio: "RD$1090", descripcion: "Picaña Certified Angus Beef a la plancha servida con ensalada mediterránea.", imagen: "https://images.unsplash.com/photo-1600891964092-4316c288032e" },
  { nombre: "Ribeye Borracho", categoria: "tierra", precio: "RD$1690", descripcion: "Ribeye Certified Angus Beef a la plancha flameado con cerveza.", imagen: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
  { nombre: "Cordón Blue", categoria: "tierra", precio: "RD$790", descripcion: "Filete de pollo empanado relleno de jamón cocido y mozzarella con batata stick.", imagen: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976" },
  { nombre: "Costillas Baby BBQ", categoria: "tierra", precio: "RD$790", descripcion: "Costillas baby back marinadas en salsa BBQ, servidas con papas fritas.", imagen: "https://images.unsplash.com/photo-1544025162-d76694265947" },
  { nombre: "Carnita Salada", categoria: "tierra", precio: "RD$890", descripcion: "Tiras de res Angus selladas al fuego y bañadas en la salsa del chef.", imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d" },
  { nombre: "Chuleta de Cerdo", categoria: "tierra", precio: "RD$590", descripcion: "Chuleta fresca a la plancha en salsa de mantequilla y romero.", imagen: "https://images.unsplash.com/photo-1600891964092-4316c288032e" },
  { nombre: "Chivo Guisado", categoria: "tierra", precio: "RD$1090", descripcion: "Chivo guisado al estilo dominicano con toque picantico y tostones.", imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },

  // MAR
  { nombre: "Salmón Glasse", categoria: "mar", precio: "RD$990", descripcion: "Salmón a la plancha glaseado en salsa de limón y miel.", imagen: "https://images.unsplash.com/photo-1485921325833-c519f76c4927" },
  { nombre: "Pulpo Gallego", categoria: "mar", precio: "RD$750", descripcion: "Pulpo gallego dorado con aceite de oliva y especias mediterráneas.", imagen: "https://images.unsplash.com/photo-1559847844-5315695dadae" },
  { nombre: "Chillo Frito", categoria: "mar", precio: "RD$1590", descripcion: "Chillo frito crujiente por fuera y jugoso por dentro.", imagen: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
  { nombre: "Chillo al Coco", categoria: "mar", precio: "RD$1690", descripcion: "Chillo bañado en salsa cremosa de coco con toques del chef.", imagen: "https://images.unsplash.com/photo-1559847844-5315695dadae" },
  { nombre: "Coco Mero", categoria: "mar", precio: "RD$590", descripcion: "Filete de mero bañado con salsa de coco, suave y tropical.", imagen: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
  { nombre: "Camarones a la Plancha", categoria: "mar", precio: "RD$790", descripcion: "Camarones a la plancha con marinada especial del chef.", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
  { nombre: "Camarones al Ajillo", categoria: "mar", precio: "RD$790", descripcion: "Camarones salteados con ajo fresco y toque de mantequilla.", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
  { nombre: "Camarones al Coco", categoria: "mar", precio: "RD$890", descripcion: "Camarones cocidos en salsa cremosa de coco.", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
  { nombre: "Cazuela de Marisco", categoria: "mar", precio: "RD$1590", descripcion: "Mariscos frescos en salsa de tomate con vegetales y pan baguette.", imagen: "https://images.unsplash.com/photo-1579631542720-3a87824fff86" },
  { nombre: "Langostino a la Plancha", categoria: "mar", precio: "RD$1490", descripcion: "Langostinos frescos a la plancha con acabado especial del chef.", imagen: "https://images.unsplash.com/photo-1604909052743-94e838986d24" },
  { nombre: "Parrillada Mixta de Mar", categoria: "mar", precio: "RD$1990", descripcion: "Camarones, calamar, mejillones, langostino, salmón y sepia a la plancha.", imagen: "https://images.unsplash.com/photo-1604909052743-94e838986d24" },

  // MOFONGO
  { nombre: "Mofongo de Chicharrón", categoria: "mofongo", precio: "RD$590", descripcion: "Mofongo clásico con chicharrón.", imagen: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26" },
  { nombre: "Mofongo de Pollo", categoria: "mofongo", precio: "RD$650", descripcion: "Mofongo servido con pollo.", imagen: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26" },
  { nombre: "Mofongo de Res Angus", categoria: "mofongo", precio: "RD$790", descripcion: "Mofongo con filete de res Angus.", imagen: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26" },
  { nombre: "Mofongo de Camarones", categoria: "mofongo", precio: "RD$890", descripcion: "Mofongo con camarones.", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },

  // CEVICHES
  { nombre: "Ceviche de Mero", categoria: "ceviches", precio: "RD$490", descripcion: "Mero fresco marinado en limón con cebolla, pimientos y perejil.", imagen: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
  { nombre: "Ceviche de Salmón", categoria: "ceviches", precio: "RD$790", descripcion: "Salmón marinado con jalapeño, piña, aguacate, pimientos y cebolla.", imagen: "https://images.unsplash.com/photo-1485921325833-c519f76c4927" },
  { nombre: "Ceviche de Camarón", categoria: "ceviches", precio: "RD$790", descripcion: "Camarones frescos marinados en limón con cebolla, pimientos y perejil.", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
  { nombre: "Ceviche Mixto", categoria: "ceviches", precio: "RD$790", descripcion: "Mariscos frescos con manzana verde y vegetales marinados en limón.", imagen: "https://images.unsplash.com/photo-1559847844-5315695dadae" },

  // PASTAS
  { nombre: "Moussaka Griega", categoria: "pastas", precio: "RD$690", descripcion: "Lasaña griega de berenjena, carne molida, papas salteadas y mozzarella.", imagen: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9" },
  { nombre: "Fruti Di Mare", categoria: "pastas", precio: "RD$790", descripcion: "Mariscos frescos en salsa de tomate. Penne o spaghetti.", imagen: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
  { nombre: "Pasta de Camarones", categoria: "pastas", precio: "RD$690", descripcion: "Camarones con zucchini, tomate cherry y salsa blanca del chef.", imagen: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8" },
  { nombre: "Pasta de Salmón", categoria: "pastas", precio: "RD$690", descripcion: "Salmón en salsa de crema de vodka y esencia de limón.", imagen: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9" },
  { nombre: "Mediterránea", categoria: "pastas", precio: "RD$490", descripcion: "Vegetales, tomate cherry, berenjena, aceituna negra y cebolla en salsa de tomate.", imagen: "https://images.unsplash.com/photo-1622973536968-3ead9e780960" },
  { nombre: "Pomodoro", categoria: "pastas", precio: "RD$390", descripcion: "Salsa de tomate con albahaca. Penne o spaghetti.", imagen: "https://images.unsplash.com/photo-1622973536968-3ead9e780960" },
  { nombre: "Al Pesto", categoria: "pastas", precio: "RD$550", descripcion: "Salsa al pesto con albahaca fresca, aceite verde, ajo y nuez.", imagen: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601" },
  { nombre: "Boloñesa", categoria: "pastas", precio: "RD$590", descripcion: "Salsa de tomate y carne molida Certified Angus Beef.", imagen: "https://images.unsplash.com/photo-1572441713132-51c75654db73" },
  { nombre: "Chicken Alfredo", categoria: "pastas", precio: "RD$590", descripcion: "Pollo y salsa Alfredo cremosa. Penne o spaghetti.", imagen: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9" },

  // ENSALADAS
  { nombre: "Fatush", categoria: "ensaladas", precio: "RD$250", descripcion: "Ensalada libanesa con lechuga, tomate, pepino, ají morrón, cebolla, perejil y pan pita frito.", imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
  { nombre: "Churrasco Salad", categoria: "ensaladas", precio: "RD$690", descripcion: "Ensalada mediterránea con churrasco, aceituna negra, mozzarella, cebolla roja y tomate.", imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
  { nombre: "Hawaiana de Camarones", categoria: "ensaladas", precio: "RD$590", descripcion: "Ensalada caribeña servida en piña con camarones.", imagen: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af" },
  { nombre: "Fresca", categoria: "ensaladas", precio: "RD$250", descripcion: "Aguacate, tomates cherry y cebolla roja con limón fresco.", imagen: "https://images.unsplash.com/photo-1540420773420-3366772f4999" },
  { nombre: "César de Pollo", categoria: "ensaladas", precio: "RD$590", descripcion: "Pollo a la plancha sobre lechuga fresca con aderezo César casero.", imagen: "https://images.unsplash.com/photo-1546793665-c74683f339c1" },

  // TEX-MEX Y BURGERS
  { nombre: "Nacho Supreme", categoria: "texmex", precio: "RD$490", descripcion: "Tortillas con carne molida, queso fundido, jalapeños, guacamole y pico de gallo.", imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d" },
  { nombre: "Chili con Carne", categoria: "texmex", precio: "RD$550", descripcion: "Carne molida con frijoles, tomates, especias mexicanas y jalapeños.", imagen: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7" },
  { nombre: "Tacos Lovers", categoria: "texmex", precio: "RD$890", descripcion: "Seis tacos mixtos de pork belly, carne molida y pollo marinado.", imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47" },
  { nombre: "Tacos Sweet & Sour", categoria: "texmex", precio: "RD$690", descripcion: "Tacos rellenos de camarones empanizados con salsa thai agridulce.", imagen: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b" },
  { nombre: "Tacos Pork Belly", categoria: "texmex", precio: "RD$590", descripcion: "Tacos de chicharrón, piña y jalapeños.", imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47" },
  { nombre: "Gyro Griego", categoria: "texmex", precio: "RD$550", descripcion: "Filete de res en pan pita con vegetales y salsa tzatziki.", imagen: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },

  { nombre: "Burger Foodie & Soul", categoria: "burgers", precio: "RD$590", descripcion: "Hamburguesa Angus con cebolla caramelizada, aguacate, mozzarella y miel.", imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
  { nombre: "Bacon Burger", categoria: "burgers", precio: "RD$550", descripcion: "Hamburguesa Angus con tocineta, queso, lechuga, tomate, mayo y kétchup.", imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { nombre: "Chicken Burger", categoria: "burgers", precio: "RD$390", descripcion: "Pollo a la plancha con queso, huevo frito, lechuga, tomate, mayonesa y kétchup.", imagen: "https://images.unsplash.com/photo-1606755962773-d324e0a13086" },
  { nombre: "Crispy Chicken Burger", categoria: "burgers", precio: "RD$420", descripcion: "Pechuga de pollo empanizada con lechuga, tomate, mayo y kétchup.", imagen: "https://images.unsplash.com/photo-1615297928064-24977384d0da" },
  { nombre: "Mexican Burger", categoria: "burgers", precio: "RD$590", descripcion: "Hamburguesa Angus con nachos, lechuga, pico de gallo y guacamole.", imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },

  // POSTRES
  { nombre: "Cheesecake", categoria: "postres", precio: "RD$350", descripcion: "Disponible en fresa, chinola o chocolate.", imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad" },
  { nombre: "Flan de Leche", categoria: "postres", precio: "RD$250", descripcion: "Flan de leche tradicional, suave y cremoso.", imagen: "https://images.unsplash.com/photo-1488477181946-6428a0291777" },
  { nombre: "Flan de Coco", categoria: "postres", precio: "RD$250", descripcion: "Flan de coco con sabor tropical.", imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307" },

  // BEBIDAS
  { nombre: "Foodie & Soul Mocktail", categoria: "mocktails", precio: "RD$250", descripcion: "Menta, manzana y jugo de limón.", imagen: "https://images.unsplash.com/photo-1621263764928-df1444c5e859" },
  { nombre: "Manhattan Berry", categoria: "mocktails", precio: "RD$220", descripcion: "Cranberry, jugo de limón y Sprite.", imagen: "https://images.unsplash.com/photo-1544145945-f90425340c7e" },
  { nombre: "Flor de Jamaica", categoria: "mocktails", precio: "RD$220", descripcion: "Infusión especial de la casa.", imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc" },
  { nombre: "Piña Colada Virgin", categoria: "mocktails", precio: "RD$225", descripcion: "Piña, crema de coco y leche.", imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813" },
  { nombre: "San Francisco", categoria: "mocktails", precio: "RD$200", descripcion: "Jugo de limón, piña, chinola y granadina.", imagen: "https://images.unsplash.com/photo-1553530666-ba11a7da3888" },
  { nombre: "Mojito Virgin", categoria: "mocktails", precio: "RD$180 / RD$200", descripcion: "Sprite, azúcar, limón, menta y fruta a elegir.", imagen: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a" },
  { nombre: "Blue Sky", categoria: "mocktails", precio: "RD$210", descripcion: "Gatorade azul, jugo de limón y Sprite.", imagen: "https://images.unsplash.com/photo-1544145945-f90425340c7e" },

  { nombre: "Jugo de Limón", categoria: "jugos", precio: "RD$120", descripcion: "Jugo natural de limón.", imagen: "https://images.unsplash.com/photo-1621263764928-df1444c5e859" },
  { nombre: "Jugo de Chinola", categoria: "jugos", precio: "RD$150", descripcion: "Jugo natural de chinola.", imagen: "https://images.unsplash.com/photo-1577805947697-89e18249d767" },
  { nombre: "Jugo de Fresa", categoria: "jugos", precio: "RD$150", descripcion: "Jugo natural de fresa.", imagen: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd" },
  { nombre: "Limón-Fresa", categoria: "jugos", precio: "RD$170", descripcion: "Combinación natural de limón y fresa.", imagen: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd" },

  { nombre: "Presidente Peq. Light y Normal", categoria: "cervezas", precio: "RD$150", descripcion: "Cerveza Presidente pequeña.", imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9" },
  { nombre: "Corona", categoria: "cervezas", precio: "RD$200", descripcion: "Cerveza Corona.", imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9" },
  { nombre: "Heineken", categoria: "cervezas", precio: "RD$200", descripcion: "Cerveza Heineken.", imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9" },
  { nombre: "Modelo Rubia", categoria: "cervezas", precio: "RD$230", descripcion: "Cerveza Modelo Rubia.", imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9" },
  { nombre: "Modelo Negra", categoria: "cervezas", precio: "RD$250", descripcion: "Cerveza Modelo Negra.", imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9" }
];

const menuContainer = document.getElementById("menuContainer");

function mostrarMenu(lista) {
  menuContainer.innerHTML = "";

  lista.forEach(plato => {
    menuContainer.innerHTML += `
      <article class="card">
        <img src="${plato.imagen}" alt="${plato.nombre}">
        <div class="card-content">
          <h3>${plato.nombre}</h3>
          <p>${plato.descripcion}</p>
          <span class="price">${plato.precio}</span>
        </div>
      </article>
    `;
  });
}

function filtrarMenu(categoria) {
  if (categoria === "todos") {
    mostrarMenu(menu);
    return;
  }

  const filtrado = menu.filter(plato => plato.categoria === categoria);
  mostrarMenu(filtrado);
}

mostrarMenu(menu);
