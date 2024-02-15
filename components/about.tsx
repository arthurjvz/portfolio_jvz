import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const {ref, inView} = useInView({
    threshold:0.75,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick>1000) {
      setActiveSection("Présentation")
    }
  }, [inView, setActiveSection, timeOfLastClick])
  

  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    ref={ref}
    initial={{ opacity: 0, y:100}}
    animate={{ opacity: 1, y:0}}
    transition={{
        delay:0.175
    }}
    id="about"
    >
        <SectionHeading>Présentation</SectionHeading>

        <p className="mb-3">Actuellement en train de reprendre mes études en <span className="font-medium">développement web</span>  💻. J&apos;ai tout de suite accroché avec le <span className="font-medium">Framework React.js</span>. Je recherche une alternance, car j&apos;ai pour objectif d&apos;en faire mon métier 💼.
        </p>
        <p>
        En tant qu&apos;alternant, je suis sûr que je peux contribuer positivement à votre entreprise. Bien que je ne dispose pas encore d&apos;une expertise complète, mes différents projets attestent de mon investissement, ce qui rendra mon profil rapidement utile à l&apos;entreprise malgré mon statut d&apos;apprenti 🚀
        </p>
    </motion.section>
  )
}
