import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);
export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
The primary or most-commonly-used HTTP verbs ->
(or methods, as they are properly called) are POST, GET, PUT, and DELETE. These correspond to
create, read, update, and delete (or CRUD)
*/
