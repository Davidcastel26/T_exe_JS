const paddockType = [
    {id:1, name:'PALTOS'},
    {id:2, name:'AVELLANOS'},
    {id:3, name:'CEREZAS'},
    {id:4, name: 'NOGALES'}
  ]
  
  const paddocks = [
    {padoockManagerId: 6, farmId:1, paddockTypeId: 1, harvestYear: 2019, area: 1200},
    {padoockManagerId: 1, farmId:3, paddockTypeId: 4, harvestYear: 2019, area: 500},
    {padoockManagerId: 5, farmId:3, paddockTypeId: 2, harvestYear: 2020, area: 2000},
    {padoockManagerId: 2, farmId:2, paddockTypeId: 3, harvestYear: 2021, area: 1200},
    {padoockManagerId: 5, farmId:1, paddockTypeId: 4, harvestYear: 2020, area: 800},
    {padoockManagerId: 3, farmId:2, paddockTypeId: 1, harvestYear: 2017, area: 1000},
    {padoockManagerId: 2, farmId:3, paddockTypeId: 2, harvestYear: 2018, area: 1200},
    {padoockManagerId: 1, farmId:1, paddockTypeId: 2, harvestYear: 2020, area: 11300},
    {padoockManagerId: 5, farmId:2, paddockTypeId: 3, harvestYear: 2018, area: 12300},
    {padoockManagerId: 2, farmId:3, paddockTypeId: 4, harvestYear: 2019, area: 2400},
    {padoockManagerId: 5, farmId:2, paddockTypeId: 1, harvestYear: 2020, area: 5200},
    {padoockManagerId: 3, farmId:3, paddockTypeId: 1, harvestYear: 2018, area: 1200},
    {padoockManagerId: 2, farmId:2, paddockTypeId: 2, harvestYear: 2017, area: 23000},
  ]
  
  
  const areaOfPadocks = {}
  
  //recorrer los paddocks para hacer la suma
  paddocks.forEach(paddock => {
    const {paddockTypeId, area } = paddock;
      
    areaOfPadocks[paddockTypeId] = areaOfPadocks[paddockTypeId] ?? 0
    areaOfPadocks[paddockTypeId] += area
  })
  
  areaOfPadocks
  
  paddockType.map(p => ({
    ...p,
    totalSum: areaOfPadocks[p.id]
  }))
    .sort((a,b) => b.totalSum - a.totalSum)
    .map( p => p.name)  
  
  
  