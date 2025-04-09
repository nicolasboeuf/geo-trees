<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <div class="content-section section-dark">
        <div class="content-wrapper">
          <h1>ALL ABOUT GEO-TREES</h1>
          <h2>GEO-TREES is enabled by a consortium of established forest inventory networks, advanced concept teams and user groups.</h2>
          <span class="default-text">Many users will benefit from GEO-TREES. Naturally, these include the Earth Observation community, as well as ecological, forest and biodiversity researchers, and earth system modellers. As confidence increases in biomass maps, GEO-TREES will assist diverse groups including governments, policy-makers, communities and enterprises -everyone needing to know where forest carbon is and how it is changing.</span>
          
          
        </div>
      </div>

      <div class="content-section section-light">
        <div class="content-wrapper">
          <img class="center" src="governance-image.png"/>
          <span class="default-text default-text-italic">The governance structure for GEO-TREES is currently under review. Our mission is for the governance to represent all key stakeholders in the global GEO-TREES initiative. The governance is described under Terms of Reference.</span>
        </div>
      </div>

      <div class="content-section section-white">
        <div class="content-wrapper">

          <h2>Executive Board</h2>
          <div class="team-member-list">
            <div class="team-member" v-for="member in executiveBoard" :class="member.group" v-bind:key="member.name">
              <div class="team-member-image">
                <img :class="(member.name=='Camille Piponiot'?'zoom':'')" :src="member.image"/>
              </div>
              <h3>{{member.name}}</h3>
              <span class="team-member-role">{{member.role}}</span>
              <span class="team-member-affiliation">{{member.affiliation}}</span>
            </div>
          </div>

          <h2>Project Manager</h2>
          <div class="team-member-list">
            <div class="team-member" v-for="member in projectManager" :class="member.group" v-bind:key="member.name">
              <div class="team-member-image">
                <img :src="member.image"/>
              </div>
              <h3>{{member.name}}</h3>
              <span class="team-member-role">{{member.role}}</span>
              <span class="team-member-affiliation">{{member.affiliation}}</span>
            </div>
          </div>

          <h2>Scientific Advisory Board</h2>
          <div class="team-member-list">
            <div class="team-member" v-for="member in scientificBoard" :class="member.group" v-bind:key="member.name">
              <div class="team-member-image">
                <img :class="(member.name=='Luiz Aragão'||member.name=='Bonaventure Sonké'?'zoom':'')" :src="member.image"/>
              </div>
              <h3>{{member.name}}</h3>
              <span class="team-member-role">{{member.role}}</span>
              <span class="team-member-affiliation">{{member.affiliation}}</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  name: 'About-us',
  components: {
    Header
  },
  data(){
    return {
      team:[
        {
          name:"Jérôme Chave",
          role:"Direction",
          affiliation:"CNRS, France",
          image:"Photo_JeromeChave.jpg",
          group:"executive-board"
        },
        {
          name:"Klaus Scipal",
          role:"Direction",
          affiliation:"European Space Agency, Italy",
          image:"Photo_Klaus.jpg",
          group:"executive-board"
        },
        {
          name:"Stuart Davies",
          role:"Network representative",
          affiliation:"Smithsonian Institution, USA",
          image:"StuartDavies_Photo.jpg",
          group:"executive-board"
        },
        {
          name:"Alvaro Duque",
          role:"Site representative",
          affiliation:"National University of Colombia, Colombia",
          image:"Alvaro_2024-e1716278662757.jpg",
          group:"executive-board"
        },
        {
          name:"Beatriz Schwantes Marimon",
          role:"Site representative",
          affiliation:"Universidade do Estado de Mato Grosso, Brazil",
          image:"Photo_Beatriz_S_M.jpg",
          group:"executive-board"
        },
        {
          name:"Oliver Phillips",
          role:"Network representative",
          affiliation:"University of Leeds, UK",
          image:"Photo_Oliver_Phillips-scaled.jpg",
          group:"executive-board"
        },
        {
          name:"Camille Piponiot",
          role:"Network representative",
          affiliation:"CIRAD, France",
          image:"Photo_Camille-scaled.jpg",
          group:"executive-board"
        },
        {
          name:"Lillian Rodriguez",
          role:"Site representative",
          affiliation:"University of the Philippines, the Philippines",
          image:"Rodriguez_cropped.jpg",
          group:"executive-board"
        },
        {
          name:"Irié Zo-Bi",
          role:"Site representative",
          affiliation:"INPHB, Côte d'Ivoire",
          image:"Irie_ZoBi.jpg",
          group:"executive-board"
        },
        {
          name:"CNRS, France",
          role:"",
          affiliation:"",
          image:"cnrs-image.png",
          group:"project-manager"
        },
        {
          name:"Luiz Aragão",
          role:"",
          affiliation:"INPE, Brazil",
          image:"Foto_Luiz_Aragao_2-300x253-1.jpg",
          group:"scientific-board"
        },
        {
          name:"Mathias Disney",
          role:"",
          affiliation:"University College London, UK",
          image:"MatDisney_photo.jpg",
          group:"scientific-board"
        },
        {
          name:"Laura Duncanson",
          role:"",
          affiliation:"University of Maryland, USA",
          image:"Laura_D_photo-e1678213041213.jpg",
          group:"scientific-board"
        },
        {
          name:"Martin Herold",
          role:"",
          affiliation:"GFZ Potsdam, Germany",
          image:"martin_herold_photo-1.jpeg",
          group:"scientific-board"
        },
        {
          name:"Euridice Honorio Coronado",
          role:"",
          affiliation:"University of St Andrews, UK",
          image:"Euridice-Honorio-Coronado_photo.jpg",
          group:"scientific-board"
        },
        {
          name:"Tommaso Jucker",
          role:"",
          affiliation:"University of Bristol, UK",
          image:"Tommaso-Jucker_square.jpg",
          group:"scientific-board"
        },
        {
          name:"Helene Muller-Landau",
          role:"",
          affiliation:"Smithsonian Institution, USA",
          image:"Photo_HeleneMuller.jpg",
          group:"scientific-board"
        },
        {
          name:"Sassan Saatchi",
          role:"",
          affiliation:"NASA, Jet Propulsion Laboratory, USA",
          image:"sassan_photo_BW.png",
          group:"scientific-board"
        },
        {
          name:"Dmitry Schepaschenko",
          role:"",
          affiliation:"IIASA, Austria",
          image:"Dmitry_S_IIASA_photo.jpg",
          group:"scientific-board"
        },
        {
          name:"Bonaventure Sonké",
          role:"",
          affiliation:"University of Yaounde I, Cameroon",
          image:"Capture-décran-2022-10-27-à-12.50.23.png",
          group:"scientific-board"
        },
      ]
    }
  },
  computed: {
    executiveBoard(){
      return this.team.filter(member => member.group === "executive-board");
    },
    projectManager(){
      return this.team.filter(member => member.group === "project-manager");
    },
    scientificBoard(){
      return this.team.filter(member => member.group === "scientific-board");
    }
  },

  watch:{
  
  },
  
  created(){
  
  }
}
</script>

<style lang="scss">

@import "../../../css/overload-fonts.css";
@import "../../../css/commons.scss";

#app {
  #content{
    .content-section{
      .content-wrapper{
        .team-member-list{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 50px 0px;
          padding-top: 50px;
          margin-bottom: 100px;
          .team-member{
            width: 33%;
            text-align: center;
          }
          .team-member-image{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            margin: 0 auto;
            img{
              width: 100%;
              height: auto;
              position: absolute;
              left:50%;
              top:50%;
              transform: translate(-50%, -50%);
              &.zoom{
                width: 150px;
              }
            }
          }
          h3{
            font-family: "Lato-Bold";
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          span{
            display: block;
            font-family: "Lato-Regular";
            font-size: 18px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {

#app {
  #content{
    .content-section{
      .content-wrapper{
        .team-member-list{
          gap: 30px 0px;
          padding-top: 20px;
          .team-member{
            width: 50%;
          }
          h3{
            font-size: 18px;
          }
          span{
            font-size: 16px;
          }
        }
      }
    }
  }
}

}

</style>
