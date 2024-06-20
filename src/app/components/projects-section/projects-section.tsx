'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './components/project-card'
import { MyFinances } from '../../../../assets/images'
import { NoProjectCard } from './components/no-project-card'
import { MongoDbIcon, NodeJsIcon, ReactIcon, TSIcon } from '@/assets'

export function ProjectsSection() {
  const ProjectsSectionAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-container pb-20" id="projects">
      <div className="centralized-container">
        <div className="flex h-full w-full flex-col gap-10">
          <motion.h2
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          >
            Projetos
          </motion.h2>

          <motion.div
            className="grid h-full w-full grid-cols-1 items-center justify-center gap-6 md:grid-cols-2"
            variants={ProjectsSectionAnim}
            initial="hidden"
            whileInView="show"
          >
            <ProjectCard
              title="My Finances"
              text="O My Finances é um sistema desenvolvido para que você tenha um melhor controle sobre as suas finanças. Conta com uma interface intuitiva e simples de utilizar."
              bg={MyFinances}
              techs={[ReactIcon, TSIcon, NodeJsIcon, MongoDbIcon]}
              projectUrl="https://my-finances-web.vercel.app/"
              projectRepositoryUrl="https://github.com/LucasMendesLopes/my-finances-web"
            />
            <NoProjectCard />
            <NoProjectCard />
            <NoProjectCard />
            <NoProjectCard />
            <NoProjectCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
