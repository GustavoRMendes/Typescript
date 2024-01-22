const ref = {
  name: 'Gustavo',
  team: 'Barcelona'
}

function showRef(ref: { name: string; team: string },team: string){
  console.log(ref.name + ' ' + ref.team)
}

showRef(ref,'Real')