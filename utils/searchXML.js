const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const parseString = require('xml2js').parseString;

async function loadNew() {
    function collectInfo() {
        return new Promise((resolve, reject) => {

            const properties = [];
            function reqListener() {
                parseString(this.responseText, (err, res) => {
                    if (err) reject(err)
                    const apartmentData = res.PhysicalProperty.Property;
                    sortResponses(apartmentData, "Madison")
                })
            }

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

            const oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "https://s3.amazonaws.com/abodo-misc/sample_abodo_feed.xml");
            oReq.send();
        })
    }

    const properties = await collectInfo();
    return properties;
}

module.exports = loadNew();