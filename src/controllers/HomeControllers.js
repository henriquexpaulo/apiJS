import Aluno from '../models/Aluno';

class HomeContoller {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Paulo',
      sobrenome: 'henrique',
      email: 'phvieira3@gmail.com',
      idade: 20,
      peso: 56,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeContoller();
