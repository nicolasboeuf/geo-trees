<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <div class="content-section section-dark">
        <div class="content-wrapper">
          <h1>About us</h1>
          <h2>GEO-TREES is enabled by a consortium of established forest inventory networks, advanced concept teams and user groups.</h2>
          <span class="default-text">Many users will benefit from GEO-TREES. Naturally, these include the Earth Observation community, as well as ecological, forest and biodiversity researchers, and earth system modellers. As confidence increases in biomass maps, GEO-TREES will assist diverse groups including governments, policy-makers, communities and enterprises -everyone needing to know where forest carbon is and how it is changing.</span>
        </div>
      </div>

      <div class="content-section section-light">
        <div class="content-wrapper">
          <h2>Governance</h2>
          <img class="center" src="governance-image-2.png"/>
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
              <div class="team-member-image no-border">
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
                <img :class="(member.name=='Luiz Aragão'||member.name=='Bonaventure Sonké'||member.name=='Laura Duncanson'?'zoom':'')" :src="member.image"/>
              </div>
              <h3>{{member.name}}</h3>
              <span class="team-member-role">{{member.role}}</span>
              <span class="team-member-affiliation">{{member.affiliation}}</span>
            </div>
          </div>

          <h2>Network Partners</h2>
          <div class="partners-logo-list">
            <div class="partner-logo"><a href="https://forestplots.net/" target="_blank"><img src="logo-forestplots.png"/></a></div>
            <div class="partner-logo"><a href="https://forestgeo.si.edu/" target="_blank"><img src="logo-forestgeo.jpg"/></a></div>
            <div class="partner-logo"><a href="https://tmfo.org/" target="_blank"><img src="logo-tmfo.png"/></a></div>
          </div>

          <h2>Site Partners</h2>
          <div class="partners-logo-list x-small-logo">
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="logo-cirad.png"/></a></div>
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="Universidade-do-Estado-de-Mato-Grosso-UNEMAT-300x300.png"/></a></div>
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="logo-CONICET_opt.png"/></a></div>
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="iiap_logo.jpeg"/></a></div>
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="logo_-_panama_canal_authority.png"/></a></div>
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="Logo-Parques-Principal-1.png"/></a></div>
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="logo_fundacao_florestal.png"/></a></div>
          </div>

          <h2>Supporting Partners</h2>
          <div class="partners-logo-list small-logo">
            <div class="partner-logo"><a href="https://www.bezosearthfund.org/" target="_blank"><img src="log-bezos-fund.jpg"/></a></div>
            <div class="partner-logo"><a href="https://www.asc-csa.gc.ca/eng/" target="_blank"><img src="CSA_circular_black_and_red.png"/></a></div>
            <div class="partner-logo"><a href="https://cnes.fr/" target="_blank"><img src="Logo_CNES_2017_triangulaire_bleu-2.png"/></a></div>
            <div class="partner-logo"><a href="https://www.cnrs.fr" target="_blank"><img src="cnrs-image.png"/></a></div>
            <div class="partner-logo"><a href="https://www.dlr.de/en" target="_blank"><img src="DLR-logo.jpg"/></a></div>
            <div class="partner-logo"><a href="https://www.esa.int/" target="_blank"><img src="ESA_logo.svg_.png"/></a></div>
            <div class="partner-logo"><a href="https://iiasa.ac.at/" target="_blank"><img src="IIASA-logo-square-150x150.jpg"/></a></div>
            <div class="partner-logo"><a href="https://www.earthdata.nasa.gov/data/instruments/gedi-lidar" target="_blank"><img src="nasa-logo-1280x1059-1.png"/></a></div>
            <div class="partner-logo"><a href="https://www.oneforestvision.org/" target="_blank"><img src="ofvi-3.jpg"/></a></div>
            <div class="partner-logo"><a href="https://www.tern.org.au/" target="_blank"><img src="TERN-NCRIS-Logo-Primary.png"/></a></div>
            <div class="partner-logo"><a href="https://www.leeds.ac.uk/" target="_blank"><img src="University-of-Leeds-logo.jpg"/></a></div>
            <div class="partner-logo"><a href="https://stri.si.edu/" target="_blank"><img src="si_STRI_rgb_horizontal_color.jpg"/></a></div>
            <div class="partner-logo"><a href="https://www.nsf.gov/" target="_blank"><img src="NSF-logo-1.png"/></a></div>
            <div class="partner-logo"><a href="https://www.moore.org/" target="_blank"><img src="moore-logo-PRIMARY-1024x398.png"/></a></div>
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
          image:"Capture-decran-2022-10-27-a-12.50.23.png",
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
        .center{
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
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
            border:3px solid #53A034;
            box-sizing: border-box;
            &.no-border{
              border:none;
            }
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
        .partners-logo-list{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 50px 25px;
          margin-top: 50px;
          margin-bottom: 100px;
          .partner-logo{
            width: 30%;
            height: 150px;
            img{
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          &.small-logo{
            .partner-logo{
              width: 20%;
              height: 125px;
            }
          }
          &.x-small-logo{
            .partner-logo{
              width: 15%;
              height: 100px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1023px) {

  #app {
    #content{
      .content-section{
        .content-wrapper{
          .partners-logo-list{
            &.small-logo{
              .partner-logo{
                width: 30%;
              }
            }
            &.x-small-logo{
              .partner-logo{
                width: 15%;
              }
            }
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
        .partners-logo-list{
          .partner-logo{
            width: 40%;
          }
          &.small-logo{
            .partner-logo{
              width: 40%;
            }
          }
          &.x-small-logo{
            .partner-logo{
              width: 40%;
            }
          }
        }
      }
    }
  }
}

}

</style>
