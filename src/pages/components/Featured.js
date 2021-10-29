import React from "react";

// import featuredImage1 from '../../img/featuredImage1.png'
// import featuredImage2 from '../../img/featuredImage2.png'
// import featuredImage3 from '../../img/featuredImage3.png'
// import featuredImage4 from '../../img/featuredImage4.png'
// import featuredImage5 from '../../img/featuredImage5.png'
import Solution from "../components/Solution";

export default function Featured() {

    return (
        <section id="ensino" className="s-featured">
        <div className="container">
          <div className="badge">Ensino</div>
          <h2>Conheça nossas soluções</h2>

          <div className="text-desc">
            <p>
            A empresa RF Educação, muito mais que um simples pré-vestibular, veio para abarcar todas as esferas de preparação e suporte para o Enem e para as demais provas. 
            </p>
          </div>

          {/* <Solution
            side={"left"}
            img={featuredImage1}
            title={"Simulados mensais com foco em resultado"}
            text={"Simule a prova do ENEM e descubra como está o seu desempenho de forma precisa por meio do nosso método único!"}
          />

          <Solution
            side={"right"}
            img={featuredImage2}
            title={"Oficinas de redação "}
            text={"Desenvolva habilidades para a construção de textos dissertativos, de acordo com as competências exigidas pelo Exame Nacional do Ensino Médio – ENEM."}
          />

          <Solution
            side={"left"}
            img={featuredImage3}
            title={"Apostilas"}
            text={"Materiais e conteúdos exclusivos, focados em conteúdo de qualidade com professores especialistas em cada área."}
          />

          <Solution
            side={"right"}
            img={featuredImage4}
            title={"Mentoria"}
            text={"Orientação personalizada do seus estudos, entenda quais os seus pontos fortes e fracos para melhorar o seu desempenho."}
          />

          <Solution
            side={"left"}
            img={featuredImage5}
            title={"Correção de simulado com TRI"}
            text={"Mensure seus resultados com a mesma régua de pontuação utilizada no Enem."}
          /> */}

        </div>
      </section>

    )
}