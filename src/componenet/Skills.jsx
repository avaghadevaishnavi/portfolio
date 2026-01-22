import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div>
      <section
        id="skills"
        className="min-h-screen px-6 sm:px-10 py-20 bg-gray-900 text-white"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

        {/* Frontend */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-300">Frontend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillCard
            img="https://tse3.mm.bing.net/th/id/OIP.QQUTcBAmVvxoiZ0CRJy5rwHaHa?pid=Api&P=0&h=180"
            title="HTML"
          />
          <SkillCard
            img="https://vectorseek.com/wp-content/uploads/2023/04/CSS-Logo-Vector.jpg"
            title="CSS"
          />
          <SkillCard
            img="https://tse1.mm.bing.net/th/id/OIP.YPYdVAg5ieRspLI6HIpmDQHaIB?pid=Api&P=0&h=180"
            title="JavaScript"
          />
          <SkillCard
            img="https://t.kfs.io/upload_images/36340/react-logo-1000-transparent_original.png"
            title="React"
          />
        </div>

        {/* Programming Languages */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-300">
          Backend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
         
         <SkillCard
  img="https://cdn.iconscout.com/icon/free/png-512/free-java-60-1174953.png"
  title="Java"
/>
<SkillCard
  img="https://images.prismic.io/turing/65980c1c531ac2845a2726a7_java_jdbc_connection_ca4860e75b.webp?auto=format,compress"
  title="JDBC"
/>
<SkillCard
  img="http://blog.programacionytecnologia.com/wp-content/uploads/2023/06/Que-Es-el-FrameWork-Hibernate-de-JAVA.png"
  title="Hibernate"
/>
<SkillCard
  img="https://tse3.mm.bing.net/th/id/OIP.rXpxktVEo-vY6QMsl6tG3AHaDN?pid=Api&P=0&h=180"
  title="Servlets"
/>
<SkillCard
  img="https://huongdanjava.com/wp-content/uploads/2018/03/spring-boot-1.png"
  title="Spring Framework"
/>






        </div>

        {/* Database */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-300">Database</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillCard
            img="https://tse4.mm.bing.net/th/id/OIP.CuwHbVnfX2bHPfU6CLQaoAHaEJ?pid=Api&P=0&h=180"
            title="SQL"
          />
        </div>

        {/* Version Control & Collaboration */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-300">
          Version Control & Collaboration
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <SkillCard
            img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            title="Git"
          />
          <SkillCard
            img="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            title="GitHub"
          />
          <SkillCard
            img="https://www.devprojournal.com/wp-content/uploads/2021/06/GitLab_logo.png"
            title="GitLab"
          />
        </div>
      </section>
    </div>
  );
}

function SkillCard({ img, title }) {
  return (
    <motion.div
      className="flex flex-col items-center bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-xl hover:scale-105 transition transform"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img
        src={img}
        alt={title}
        className="w-20 h-20 mb-4 object-contain"
      />
      <p className="text-lg font-semibold text-gray-200">{title}</p>
    </motion.div>
  );
}

export default Skills;
