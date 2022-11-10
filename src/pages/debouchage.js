import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../components/HeroImage"
import depannage from "../assets/images/tt-depannage.jpg"
import PageParagraph from "../components/PageParagraph"

const debouchageP = {
  title: "Ne laissez pas les choses s’accumuler!",
  paragraph: "Besoin d’un débouchage au plus vite? Un évier de cuisine refoule, une douche qui ne s’évacue plus, un sterput ou WC déborde? Et oui, toutes les canalisations peuvent se boucher, et en venir à bout être notre spécialité. Ayant plus de 15 ans d’expérience dans le domaine, on peut vous assurer que nous avons tout vu et tout résolu. Avec le temps, les déchets organiques voire même un corps étrangers tel qu’un jouet d’enfant ou des lingettes vont s’accumuler dans vos canalisations et vont empêcher de faire passer l’eau. Dans d’autres cas, il se peut aussi qu’un dispositif d'évacuation soit mal pensé et doive être refait. En tous les cas, nous sommes équipés de toutes les technologies nécessaires pour vous libérer de ce désagrément. Nous sommes doté d’une caméra thermique pour localiser le bouchon, mais aussi de différent furet, ventouse, pompe, tourniquet et bien-sûr la bête redoutable à qui rien de résiste: le déboucheur haute pression. Notre expertise complète en tant que plombier chauffagiste est prête à agir même dans les situations les plus complexes. N’hésitez pas à nous appeler pour obtenir un devis estimatif et un rendez-vous au plus vite. Nous sommes transparent sur nos tarifs et vous assurons un service sans facture surprise à la fin."
}



const Debouchage = () => (
  <Layout>
    <HeroImage title="débouchage" img={depannage} />
    <PageParagraph title={debouchageP.title} paragraph={debouchageP.paragraph}/>
  </Layout>
)

export const Head = () => <Seo title="Page debouchage" />

export default Debouchage
