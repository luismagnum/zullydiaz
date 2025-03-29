"use client";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Psychotherapy from "@/components/psychotherapy/Psychotherapy ";
import Action from "../components/action/Action";
import Mett from "../components/mett/Mett";
import Footer from "../components/footer/Footer";
import Direccion from "../components/direccion/Direccion";
import Frecuentes from "../components/frecuentes/Frecuentes";
import Boton from "../components/Boton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Especializacion from "../components/especializacion/Especializacion";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    }, []);
  return (
    <div className="overflow-x-hidden">
      <div id="home">
      <Navbar />
      </div>
      <Hero />
      <div id="psychotherapy">
      <Psychotherapy/>
      </div>
      <div id="action">
      <Action />
      </div>
      <div id="mett">
      <Mett />
      </div>
      <Especializacion />
      <Direccion />
      <Frecuentes />
      <Footer />
      <Boton />
    </div>
  );
}
