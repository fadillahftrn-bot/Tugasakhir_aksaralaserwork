import LaserCutting from "components/Layanan/LaserCutting.jsx";
import LaserEngraving from "components/Layanan/LaserEngraving.jsx";
import LaserMarking from "components/Layanan/LaserMarking.jsx";
import CustomDesign from "components/Layanan/CustomDesign.jsx";

const Jasa = [
  {
    path: "/layanan/laser-cutting",
    name: "Laser Cutting",
    component: LaserCutting,
    layout: "/admin",
  },
  {
    path: "/layanan/laser-engraving",
    name: "Laser Engraving",
    component: LaserEngraving,
    layout: "/admin",
  },
  {
    path: "/layanan/laser-marking",
    name: "Laser Marking",
    component: LaserMarking,
    layout: "/admin",
  },
  {
    path: "/layanan/custom-design",
    name: "Custom Design",
    component: CustomDesign,
    layout: "/admin",
  },
];

export default Jasa;
