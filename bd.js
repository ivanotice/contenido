// Array de películas
const baseDeDatos = [    
    {
      nombre: "Elemental",
      tipo: "Pelicula",
      categoria: "animacion romance",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/d79DeKDCgFOM23O8Dr6MELZVooY.jpg",
      enlace: "go:0002",
      año: 2023
    },
    {
      nombre: "Megalodon 2",
      tipo: "Pelicula",
      categoria: "accion cienciaficcion terror",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/mBgynPDplmo5JTY9VfGqY35OjDu.jpg",
      enlace: "go:0001",
      año: 2023
    },
    {
      nombre: "Agente Stone",
      tipo: "Pelicula",
      categoria: "suspenso accion",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/3iEjVseteIY8YnryTKWgVB91Uil.jpg",
      enlace: "go:0003",
      año: 2023
    },
    {
      nombre: "Insidious: La puerta roja",
      tipo: "Pelicula",
      categoria: "terror misterio suspenso",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/wD4eLIHUaTvrXQqAzlfduHQ1NYg.jpg",
      enlace: "go:0004",
      año: 2023
    },
    {
      nombre: "La gente como nosotros",
      tipo: "Pelicula",
      categoria: "romance comedia",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/c0dfDXSu6esHRdE6mx2SzehvaDv.jpg",
      enlace: "go:0006",
      año: 2023
    },
    {
      nombre: "Ant-Man",
      tipo: "Pelicula",
      categoria: "cienciaficcion aventura accion comedia",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/zwuE28gSXlLFLgueqMe9b7xKy1f.jpg",
      enlace: "go:0005",
      año: 2015
    },
    {
      nombre: "Oppenheimer",
      tipo: "Pelicula",
      categoria: "historia drama",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
      enlace: "go:0007",
      año: 2023
    },
    {
      nombre: "Black Clover: La espada del rey mago",
      tipo: "Pelicula",
      categoria: "animacion fantasia accion aventura",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/jm2BckEhy1upr4iPpOZ6WTx1tWw.jpg",
      enlace: "go:0008",
      año: 2023
    },
    {
      nombre: "En terreno vedado",
      tipo: "Pelicula",
      categoria: "gay drama romance comedia",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/zOxSNyosUbD5oTEz9D048QkVcS.jpg",
      enlace: "go:0009",
      año: 2005
    },
    {
      nombre: "El último viaje del Demeter",
      tipo: "Pelicula",
      categoria: "terror fantasia",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/dAImnw2GJNDAEVeGij9HVQNJD2c.jpg",
      enlace: "go:0010",
      año: 2023
    },
    {
      nombre: "Barbie",
      tipo: "Pelicula",
      categoria: "comedia drama romance aventura fantasia",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg",
      enlace: "go:0011",
      año: 2023
    },
    {
      nombre: "Un lugar tranquilo",
      tipo: "Pelicula",
      categoria: "terror drama cienciaficcion",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/bBcQiubPGb7LgcRgT2kwC8YOWVo.jpg",
      enlace: "go:0012",
      año: 2018
    },
    {
      nombre: "Un lugar tranquilo 2",
      tipo: "Pelicula",
      categoria: "suspenso terror drama cienciaficcion",
      imagen: https://www.themoviedb.org/t/p/w220_and_h330_face/6uRb5axnwAd17h4ak4ENHcJqHVr.jpg",
      enlace: "go:0013",
      año: 2021
    },
    {
      nombre: "Jujutsu Kaisen 0",
      tipo: "Pelicula",
      categoria: "animacion terror accion fantasia",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
      enlace: "go:0014",
      año: 2021
    },
    {
      nombre: "Spider-Man:Cruzando el Multiverso",
      tipo: "Pelicula",
      categoria: "animacion accion aventura",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/37WcNMgNOMxdhT87MFl7tq7FM1.jpg",
      enlace: "go:0015",
      año: 2023
    },
    {
      nombre: "Oppenheimer: el dilema de la bomba atómica",
      tipo: "Pelicula",
      categoria: "documental historia",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/lAgXJGC00jzO8An9On4QHeYMJqP.jpg",
      enlace: "go:0016",
      año: 2023
    },
    {
      nombre: "Sin malos rollos",
      tipo: "Pelicula",
      categoria: "comedia romance",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/hKlpYtDLBtJEvYVvaUIq39Gh6rI.jpg",
      enlace: "go:0017",
      año: 2023
    },
    {
      nombre: "No tengas miedo",
      tipo: "Pelicula",
      categoria: "terror",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/o0ndJZaa9ZFFfpnl1IejajXv0II.jpg",
      enlace: "go:0018",
      año: 2023
    },
    {
      nombre: "Ninja Turtles: Caos mutante",
      tipo: "Pelicula",
      categoria: "animacion comedia accion",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/ez3IwZGBuVMVbYFcS9iftoxDjB8.jpg",
      enlace: "go:0019",
      año: 2023
    },
    {
      nombre: "Joy Ride",
      tipo: "Pelicula",
      categoria: "comedia juvenil",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/oRcAeRi1SqlGC2uI1r1ckq9Sx1B.jpg",
      enlace: "go:0020",
      año: 2023
    },
    {
      nombre: "Big George Foreman",
      tipo: "Pelicula",
      categoria: "comedia historia drama",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/zEFMzHaMd13T5io3ZAKm2sQVD57.jpg",
      enlace: "go:0021",
      año: 2023
    },
    {
      nombre: "Sonido de libertad",
      tipo: "Pelicula",
      categoria: "accion drama",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/zKs57cx0vjIYSWUZq0oOMrqWSlN.jpg",
      enlace: "go:0022",
      año: 2023
    },
    {
      nombre: "Blue Beetle",
      tipo: "Pelicula",
      categoria: "accion cienciaficcion",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/tf5Mqgoj1fFIeP7Ktfn8KGrYhup.jpg",
      enlace: "go:0023",
      año: 2023
    },
    {
      nombre: "La última llamada",
      tipo: "Pelicula",
      categoria: "crimen suspenso",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/dXXovw9VjPPmmhfbQXaGuqhSEli.jpg",
      enlace: "go:0024",
      año: 2013
    },
    {
      nombre: "Flash",
      tipo: "Pelicula",
      categoria: "accion aventura ciencia ficcion",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/x9Qc86JEyYkAKsdzjDpS5kbaAB7.jpg",
      enlace: "go:0025",
      año: 2023
    },
    {
      nombre: "Culpa mia",
      tipo: "Pelicula",
      categoria: "romance drama",
      imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/gp31EwMH5D2bftOjscwkgTmoLAB.jpg",
      enlace: "go:0026",
      año: 2023
    },

  ];

// Imprimir los contenidos de la base de datos
console.log(baseDeDatos.contenidos);
