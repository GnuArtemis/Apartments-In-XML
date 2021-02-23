// A function that calls the XML from the source, parses and sorts it, and returns the property ID, name, email, and basic unit information about each property.

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const parseString = require('xml2js').parseString;

async function loadNew(city) {
    function collectInfo() {
        return new Promise((resolve, reject) => {
            //Properties contains all the information about each property, and will eventually be returned.
            const properties = [];

            //A callback function to be usedupon connection to the XML source data. Parse String is a function from an extenal library  
            //that parses the returned XML into JSON format.  This messy object is then sorted through for relevant data.
            function reqListener() {
                parseString(this.responseText, (err, res) => {
                    if (err) reject(err)
                    const apartmentData = res.PhysicalProperty.Property;
                    sortResponses(apartmentData, city)
                })
            }

            /*
            The sort and filter function after retrieving XML data: it limits the data requested to only those 
            properties residing in a particular city, then extracts property ID, name, email, and basic unit 
            information (including number of bedrooms per unit). When the sorting is complete, the promise is resolved.
            */
            function sortResponses(listingComposite, city) {
                listingComposite.forEach(element => {
                    if (element.PropertyID[0].Address[0].City[0] === city) {
                        let propertyHash = {
                            property_id: element.PropertyID[0].Identification[0].$.IDValue,
                            name: element.PropertyID[0].MarketingName[0],
                            email: element.PropertyID[0].Email[0],
                            unitCount: element.Information[0].UnitCount[0],
                            unitInfo: []
                        }

                        for (let i = 0; i < propertyHash.unitCount; i++) {
                            let unit = {
                                beds: element.ILS_Unit[i].Units[0].Unit[0].UnitBedrooms[0],
                                baths: element.ILS_Unit[i].Units[0].Unit[0].UnitBathrooms[0],
                                available: element.ILS_Unit[i].Units[0].Unit[0].UnitLeasedStatus[0],
                                rent: element.ILS_Unit[i].Units[0].Unit[0].UnitRent[0]
                            }
                            propertyHash.unitInfo.push(unit)
                        }

                        properties.push(propertyHash)

                    }
                });
                resolve(properties);
            }

            //The request to the XML source, when sent the reqListener function from above is executed and a promise containing the sorted data is returned.
            const oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "https://s3.amazonaws.com/abodo-misc/sample_abodo_feed.xml");
            oReq.send();
        })
    }

    //Returns the information retrieved from the combination of asynchronous functions.
    return  collectInfo();
}

//Allows this function to be called on demand based on events determined in other files, specifically for the city of "Madison"
module.exports = loadNew("Madison");