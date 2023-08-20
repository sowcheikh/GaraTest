const mesPass = [
  {id: 1,title: '', subtitle: '', description: ''},
  {id: 2,title: '', subtitle: '', description: ''},
  {id: 3,title: '', subtitle: '', description: ''},
];
export class Pass {

  findAllPasses() {
    return mesPass;
  }

  findOnePass(id: number) {
    return mesPass.find((pass) => pass.id === id);
  }

}
