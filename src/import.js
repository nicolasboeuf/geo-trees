/* eslint-disable no-unused-vars */


import axios from 'axios'
import * as _ from 'lodash'

export const getData = async function (store) {
	
	return axios.get("https://sheets.googleapis.com/v4/spreadsheets/16qusGlajdZwqx6lX_RIxuWoxmiQqhxf-Guzwe4hI538/values:batchGet?ranges=Aboutus!A2:K10000&key=AIzaSyA1-lEBOiEyohPSN9jBFTDG51qsmp5-Kn0")
      .then(response => {
        const values = response.data.valueRanges[0].values;
		var allItems = []
		_.each(values,function(item){
			var itemObj = {}
			itemObj.name = item[0]
			itemObj.group = item[1]
			itemObj.role = item[2]
			itemObj.affiliation = item[3]
			itemObj.image = item[4]
			itemObj.link = item[5]
			allItems.push(itemObj)
		})
		
		store.commit('initializeAboutData',allItems)
        store.commit("endImport",true)
        return true 
      })
	}